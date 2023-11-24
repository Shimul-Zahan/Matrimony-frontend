import React, { useEffect, useState } from 'react'
import ParallaxImage from '/Images/Screenshot 2023-10-08 022536.png'
import { useLoaderData } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    
    AOS.init({
        duration:"1000"
    });

    const employees = useLoaderData();
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('/feedback.json')
            .then(res => res.json())
        .then(data=> setFeedback(data))
    }, [])

    console.log(feedback)

    return (
        <div className=''>
            <div className='min-h-screen lg:-mt-[130px] -mt-[118px] bg-black bg-blend-overlay bg-fixed bg-opacity-90' style={{ backgroundImage: `url('${ParallaxImage}')`, backgroundSize: 'cover' }} >
                <div className='flex flex-col justify-center items-center min-h-[950px] space-y-5 px-4 -z-10' data-aos="fade-up-right">
                    <div className='text-2xl lg:text-5xl text-white font-bold'>About Us</div>
                    <h1 className='text-xl lg:text-3xl font-bold text-center text-yellow-500'>Our Motto: Unleashing Innovation and Gaming Excitement</h1>
                    <p className='text-white text-base lg:text-lg font-thin max-w-[950px] text-center'>Welcome to <strong className='text-yellow-500'>AlgoWebBot</strong>, where technology meets gaming in extraordinary experiences. As the CEO, I take pride in leading a team dedicated to curating unparalleled events. From cutting-edge Tech Conferences to heart-pounding Gaming Conventions, we redefine the intersection of innovation and excitement. Our vision goes beyond events; it's about building a community that thrives on shared passion and collaboration. Join us on this thrilling journey as we push the boundaries of technology and gaming, creating moments that resonate in the hearts of enthusiasts and industry leaders alike. Welcome to a future where every event is an adventure, and every gathering is a celebration of limitless possibilities.</p>
                    <h1 className='text-lg lg:text-xl text-yellow-500 font-bold text-center'>Eleush Zahan Shimul <br />CEO AlgoWebBot</h1>
                </div>
            </div>
            <div className='my-10 container mx-auto' data-aos="fade-right">
                <h1 className='text-5xl font-bold text-center my-20'>Meet Out Team</h1>
                <div className='w-full flex justify-center items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            employees?.map(employee => <div className=''>
                                <div className='h-96 w-80 flex justify-center items-center flex-col space-y-2'>
                                    <img src={employee?.image} className='h-72 w-72 rounded-full' />
                                    <h1 className='text-xl font-bold'>{employee?.name}</h1>
                                    <h1 className='text-xl font-thin'>{employee?.position}</h1>
                                    <h1 className='text-xl font-thin'>{employee?.experience}</h1>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='my-32 flex flex-col justify-center items-center relative'>
                <hr className='w-3/5 bg-black h-[3px]' />
                <h1 className='text-5xl font-bold text-center absolute -top-7 bg-white px-4'>Upcooming Events</h1>
            </div>
            {/* <h1 className='text-5xl font-bold text-center my-20'>Upcooming Events</h1> */}
            <div className='my-20 container mx-auto flex flex-col lg:flex-row justify-center gap-10 px-3' data-aos="fade-right">
                <div>
                    <div className='relative'>
                        <img src="/cardImage/Creative-Technology-girl-wearing-VR-Goggles.png"
                            className='w-full lg:w-[950px] lg:h-[610px]' />
                        <h1 className='font-xl lg:text-4xl font-bol border-2 text-white bg-black bg-blend-overlay bg-opacity-50 absolute p-4 top-0 left-0'>02 days : 11 hours : 36 mins left</h1>
                        <h1 className='text-xl font-bold mt-2'>Virtual Reality (VR) and Augmented Reality (AR) Experiences</h1>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='relative'>
                        <img src="/cardImage/software-training-workshops.jpg"
                            className='w-full lg:w-[500px]' />
                        <h1 className='text-xl font-bol border-2 text-white bg-black bg-blend-overlay bg-opacity-50 absolute p-4 top-0 left-0'>00 days : 21 hours : 06 mins left</h1>
                        <h1 className='text-xl font-bold mt-2'>Workshops and Training Sessions</h1>
                    </div>
                    <div className='relative'>
                        <img src="/cardImage/gaming-tournaments.jpg"
                            className='w-full lg:w-[500px]' />
                        <h1 className='text-xl font-bol border-2 text-white bg-black bg-blend-overlay bg-opacity-50 absolute p-4 top-0 left-0'>01 days : 05 hours : 13 mins left</h1>
                        <h1 className='text-xl font-bold mt-2'>Gaming Conventions and Tournaments</h1>
                    </div>
                </div>
            </div>

            {/*   */}

            <h1 className='text-5xl font-bold text-center my-20'>Experts Testimonial</h1>
            <div className='flex justify-center items-center mb-20 p-4' data-aos="fade-up-right">
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 md:space-y-5'>
                    {
                        feedback.map(message => <div className='max-w-[550px] text-center space-y-2'>
                            <svg class="h-12 mx-auto text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <p className='text-lg font-thin max-w-[550px] text-center'>{message?.testimonial}</p>
                            <div className='flex justify-center items-center gap-4'>
                                <h1 className='w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center'>IMG</h1>
                                <div className='text-left'>
                                    <h1 className='text-lg font-bold'>{message?.name}</h1>
                                    <h1 className='text-base font-thin'>{message?.position}</h1>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className='my-32 flex flex-col justify-center items-center relative'>
                <hr className='w-3/5 bg-black h-[3px]' />
                <h1 className='text-5xl font-bold text-center absolute -top-7 bg-white px-4'>Our Achivements</h1>
            </div>
            {/* <h1 className='text-5xl font-bold text-center mt-20 mb-10'>Our Achivements</h1> */}
            <div className='flex justify-center items-center' data-aos="fade-up-right">
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24'>
                    <div className='flex flex-col justify-center items-center mb-20'>
                        <img src="/Images/best-seller-158885_640.png" className='h-72 w-80' />
                        <h1 className='text-2xl font-bold mt-4'>Best Seller</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center mb-20'>
                        <img src="/Images/trusted-stamp-3.png" className='h-72 w-80' />
                        <h1 className='text-2xl font-bold mt-4'>Trusted</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center mb-20'>
                        <img src="/Images/Verification.jpg" className='h-72 w-80' />
                        <h1 className='text-2xl font-bold mt-4'>Verified</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About