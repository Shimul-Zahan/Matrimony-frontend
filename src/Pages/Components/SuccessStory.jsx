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
import useGetSuccessStory from '../../Hooks/useGetSuccessStory';

const Testimonials = () => {

    const { data } = useGetSuccessStory();
    console.log(data)

    return (

        <div className=''>
            <Container maxWidth='lg'>
                <div>
                    <TitleBar title={'SUCCESS STORY'} subTitle={'Here Some of Our Success Stroy'} />
                </div>
                <Box sx={{ my: 10, backgroundColor: '' }}>
                    <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">

                        {
                            data?.map(story =>
                                <SwiperSlide>
                                    <div className='flex  flex-col justify-center ite items-center space-y-4 mx-14 lg:mx-28'>

                                        <img src={story?.image} alt="" className='rounded-full h-[250px] w-[250px]' />
                                        <p className='text-black lg:text-[25px] text-2xl font-semibold'>{story?.date}</p>

                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={story?.rating}
                                            readOnly
                                        />
                                        <h1 className='text-[#444] font-medium text-xl  lg:text-[20px] text-center'>{story?.successStoryReview}</h1>
                                    </div>
                                </SwiperSlide>
                            )
                        }

                    </Swiper>
                </Box>
            </Container>
        </div>
    );
};

export default Testimonials;