import React from 'react';
import { Container, Grid, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';

import img from "../../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg"
import img1 from "../../assets/slider-resources/couple-newlyweds-hugging.jpg"
import img2 from "../../assets/slider-resources/handriyanto-setiadi-Kd9zljneM1A-unsplash.jpg"
import TitleBar from '../../Utils/TitleBar';

const Testimonials = () => {


    return (

        <>
            <Container maxWidth='lg'>
                <div>
                    <TitleBar title={'SUCCESS STORY'} subTitle={'Here Some of Our Success Stroy'} />
                </div>
                <Box sx={{ my: 10 }}>
                    <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">

                        <SwiperSlide>
                            <div className='flex  flex-col justify-center ite items-center space-y-4 mx-14 lg:mx-28'>

                                <img src={img} alt="" className='rounded-lg h-[200px] w-[300px]' />
                                <p className='text-black lg:text-[25px] text-2xl font-semibold'>2023-11-25</p>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                                <h1 className='text-[#444] font-medium text-xl  lg:text-[20px] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima asperiores magni quasi, iusto non facere deleniti modi recusandae ipsum ducimus fugit obcaecati? Possimus cupiditate, libero sapiente assumenda quam similique soluta.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex  flex-col justify-center ite items-center space-y-4 mx-14 lg:mx-28'>

                                <img src={img1} alt="" className='rounded-lg h-[200px] w-[300px]' />
                                <p className='text-black lg:text-[25px] text-2xl font-semibold'>2000-12-25</p>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                                <h1 className='text-[#444] font-medium text-xl  lg:text-[20px] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima asperiores magni quasi, iusto non facere deleniti modi recusandae ipsum ducimus fugit obcaecati? Possimus cupiditate, libero sapiente assumenda quam similique soluta.</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex  flex-col justify-center ite items-center space-y-4 mx-14 lg:mx-28'>

                                <img src={img2} alt="" className='rounded-lg h-[200px] w-[300px]' />
                                <p className='text-black lg:text-[25px] text-2xl font-semibold'>2024-11-25</p>

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                />
                                <h1 className='text-[#444] font-medium text-xl  lg:text-[20px] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima asperiores magni quasi, iusto non facere deleniti modi recusandae ipsum ducimus fugit obcaecati? Possimus cupiditate, libero sapiente assumenda quam similique soluta.</h1>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </Box>
            </Container>
        </>
    );
};

export default Testimonials;