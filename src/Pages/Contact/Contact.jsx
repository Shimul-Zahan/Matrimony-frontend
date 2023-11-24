import React from 'react'
import icon from '../../assets/icons/group.png'

const Contact = () => {
    return (
        <div className='mt-16'>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="algowebbot@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-lg  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how can we help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py- px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                    <button className='btn bg-[#1976D2] rounded-sm py-2 text-lg px-10 capitalize font-light'>Send</button>
                </div>
            </section>

            <div className='my-10 flex flex-col justify-center items-center relative'>
                <hr className='w-3/5 bg-black h-[3px]' />
                <h1 className='text-5xl font-bold text-center absolute -top-7 bg-white px-4'>Stay With Us</h1>
            </div>

            <div className='flex justify-center items-center container mx-auto mt-20'>
                <div className='container mx-auto mb-20 grid grid-cols-1 gap-10 lg:grid-cols-3 '>
                    <div className='space-y-4 flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                        <h1 className='text-2xl font-bold'>Quick Links</h1>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={icon} alt="" className='h-8 w-8' />
                            <p className='text-xl font-thin text-black'>AlgoWebBot_636</p>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={icon} alt="" className='h-8 w-8' />
                            <p className='text-xl font-thin text-black'>AlgoWebBot_Viber</p>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={icon} alt="" className='h-8 w-8' />
                            <p className='text-xl font-thin text-black'>AlgoWebBot_In_7088</p>
                        </div>
                    </div>
                    <div className='space-y-4 flex items-center flex-col '>
                        <img src={icon} alt="" className='h-20 w-20' />
                        <p className='text-lg font-thin text-center'>Jones Hopkins Tower <br />230, Baker Street Road <br />New York, USA</p>
                    </div>
                    <div className='space-y-4 text-end flex flex-col justify-center items-center lg:justify-end lg:items-end'>
                        <h1 className='text-2xl font-bold'>Contact</h1>
                        <div className='flex justify-end items-center gap-4'>
                            <p className='text-xl font-thin text-black'>+98 065520</p>
                            <img src={icon} alt="" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                            <p className='text-xl font-thin text-black'>+98 065520</p>
                            <img src={icon} alt="" className='h-8 w-8' />
                        </div>
                        <div className='flex justify-end items-center gap-4'>
                            <p className='text-xl font-thin text-black'>algowebbot@gmai.com</p>
                            <img src={icon} alt="" className='h-8 w-8' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact