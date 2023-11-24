import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/slider-resources/5737962.jpg'
import img2 from '../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import img3 from '../assets/slider-resources/couple-newlyweds-hugging.jpg'
import img4 from '../assets/slider-resources/handriyanto-setiadi-Kd9zljneM1A-unsplash.jpg'
import img5 from '../assets/slider-resources/lesbian-couple-with-guests-their-wedding.jpg'
import img6 from '../assets/slider-resources/sir-manuel-_dNMxv3SGcM-unsplash.jpg'

const Carousels = () => {
  return (
    <div className="h-screen bg-green-500 mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Welcome to <br />"TOGETHER" <br />Family with <br />Millions of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Welcome to <br />"TOGETHER" <br />Family with <br />Millions of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Welcome to <br />"TOGETHER" <br />Family with <br />Millions of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Welcome to <br />"TOGETHER" <br />Family with <br />Millions of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Welcome to <br />"TOGETHER" <br />Family with <br />Millions of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-50'>
            <h1 className='text-center'>Welcome to <br />"TOGETHER" <br />Family with <br />Millions of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousels