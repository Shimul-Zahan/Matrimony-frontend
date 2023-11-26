import React from 'react'
import TitleBar from '../../Utils/TitleBar'

const CheekoutPage = () => {
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
                            <form action="" className="space-y-8">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-2 border-black p-3 text-sm"
                                        placeholder="Requester biodata ID"
                                        type="number"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <input
                                            className="w-full rounded-lg border-2 border-black p-3 text-sm"
                                            placeholder="Your biodata ID"
                                            type="number"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className="w-full rounded-lg border-2 border-black p-3 text-sm"
                                            placeholder="Email"
                                            type="email"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
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