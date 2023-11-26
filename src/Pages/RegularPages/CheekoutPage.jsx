import React, { useCallback, useContext, useEffect, useState } from 'react'
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import TitleBar from '../../Utils/TitleBar';
import Swal from 'sweetalert2';
import { MyAuthContext } from '../../Context/AuthContext';
import useAllBiodatas from '../../Hooks/useAllBiodatas';
// console.log(stripePromise)

const CheekoutPage = () => {


    const { id } = useParams();
    const { user } = useContext(MyAuthContext);
    const { data, refetch } = useAllBiodatas();
    const myID = data?.find(man => man?.userEmail == user?.email)?.biodataId;

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecureInstance = useAxiosSecure()
    let price = 500;
    const navigate = useNavigate()

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosSecureInstance.post("/create-payment-intent", {price})
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log("confirm error");
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
            const requestContactData = {
                requesterID: myID,
                neededID: id,
                requesterEmail: user?.email,
                status: 'pending',
                time: new Date().toLocaleDateString(),
                trxnID: paymentIntent?.id,
                paidTk: parseInt(500)
            }

            const res = await axiosSecureInstance.post('/payments', requestContactData)
            if (res.data.acknowledged) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Transaction done",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
                
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${res.data.message}`,
                });
                reset();
            }
        }
    }

    return (
        <div className='pt-10 min-h-screen'>
            <TitleBar title={'CHECKOUT HERE'} />
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                If You want to cheekout then you need to pay 500TK. If you paid the amound and if admin approved your request then you see your requested contact iformation in your dashboard. If admin want then he/she can cancel your request if your biodata information is fake. If interested then paid and cheekout this page.
                            </p>

                            <div className="mt-8">
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    Any more information contact
                                </a>

                                <address className="mt-2 not-italic">
                                    admin_memory@gmail.com
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className='mb-2'>Requested ID</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-black p-3 text-sm"
                                        placeholder="Requester biodata ID"
                                        value={id}
                                        type="number"
                                        id="name"
                                        disabled
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className='mb-2'>Requester ID</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-black p-3 text-sm"
                                            placeholder="Your biodata ID"
                                            value={myID}
                                            type="number"
                                            id="email"
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <label className='mb-2'>Requester Email</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-black p-3 text-sm"
                                            placeholder="Email"
                                            value={user?.email}
                                            type="email"
                                            id="phone"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div>
                                    <CardElement
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#424770',
                                                    '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }}
                                    />
                                </div>

                                <div className="mt-4">
                                    <button disabled={!clientSecret}
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheekoutPage