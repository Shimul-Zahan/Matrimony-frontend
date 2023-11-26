import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheekoutPage from "../RegularPages/CheekoutPage";


const stripePromise = loadStripe(import.meta.env.VITE_STRPE_KEY);
console.log(stripePromise)

const Payment = () => {

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheekoutPage />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;