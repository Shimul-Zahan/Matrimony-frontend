import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img2 from '../assets/slider-resources/andy-holmes-XaQ-aaMJKgc-unsplash.jpg'
import img4 from '../assets/slider-resources/handriyanto-setiadi-Kd9zljneM1A-unsplash.jpg'

const Carousels = () => {
  return (
    <div className="h-screen mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
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
          <img src='https://i.ibb.co/zRWqKkD/beautiful-bride-with-her-husband-park-1157-19036.jpg' alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-[#FFC436] opacity-50'>
            <h1 className='text-center'>Welcome To <br />"MEMORY" Family<br /> With Millions Of Joys</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-[#FFC436] opacity-50'>
            <h1 className='text-center'>"Unforgettable Matches<br /> Crafting Memories <br /> for a Lifetime"</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/Syp5S2t/beautiful-caucasian-wedding-couple-is-standing-front-decorated-with-blue-hydrangea-archway-holding-h.jpg' alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-[#FFC436] opacity-50'>
            <h1 className='text-center'>"ForeverTies <br /> Building Memories,<br /> One Union at a Time"</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-[#FFC436] opacity-50'>
            <h1 className='text-center'>"Memory Lane <br />Matrimony Where <br />Love Lives On"</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/fpdx12y/top-view-beautiful-wedding-couple-with-wedding-bouquet-who-are-kissing-outdoors-marriage-concept-835.jpg' alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-[#FFC436] opacity-50'>
            <h1 className='text-center'>"Timeless Love <br /> Creating Beautiful <br /> Memories"</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/ZMkjQcL/bride-bridesmaids-red-dresses-pose-outside-old-wet-street-8353-7114.jpg' alt="" className='w-full h-screen' />
          <div className='absolute text-2xl lg:text-7xl font-bold font-serif top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-[#FFC436] opacity-50'>
            <h1 className='text-center'>"Create A Memory <br /> to Last a Lifetime <br /> With "MEMORY"</h1>
          </div>
          <div class="absolute z-10 inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousels