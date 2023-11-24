import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bg from '../../assets/slider-resources/handriyanto-setiadi-Kd9zljneM1A-unsplash.jpg'
import TitleBar from '../../Utils/TitleBar';

const About = () => {
  return (
    <div>
      <div className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px] my-16 bg-fixed lg:mb-40' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className='flex flex-col justify-between items-center lg:flex-row h-full text-white max-w-7xl mx-auto gap-5 relative'>
          <h1 className='text-2xl text-center lg:text-start lg:text-7xl font-bold mt-20 lg:mt-0'>Discover <br />Your Forever <br />Connection</h1>
          <div className=' w-full p-2 h-[300px] lg:w-[550px] lg:h-[400px]'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='text-white my-10 w-9/12 lg:text-black lg:bg-white py-10 px-20 lg:absolute lg:-bottom-64 lg:left-1/2 lg:transform lg:-translate-x-1/2 hidden lg:block rounded-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto'>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='w-32 h-32' />
              <h1 className='text-xl font-bold'>Profiles and Matching</h1>
              <p>Emphasize the importance of these details in finding compatible matches</p>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='w-32 h-32' />
              <h1 className='text-xl font-bold'>Security and Privacy</h1>
              <p>Assure users about the security measures in place to protect their personal information.</p>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='w-32 h-32' />
              <h1 className='text-xl font-bold'>Community and Support</h1>
              <p> Highlight the sense of community on your matrimony website. Discuss any forums, discussion boards</p>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" alt="" className='w-32 h-32' />
              <h1 className='text-xl font-bold'>Innovative Features</h1>
              <p>Introduce any unique or innovative features that set your matrimony website apart from others.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='py-20 container mx-auto'>
        <TitleBar title={'WHY CHOOSE US'} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:20  text-center lg:text-start'>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl lg:text-2xl font-bold mb-2'>Fuck</h1>
              <p className='text-sm lg:text-lg font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero tempore animi non aperiam reprehenderit dolorem omnis iusto dignissimos quaerat?</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl lg:text-2xl font-bold mb-2'>Fuck</h1>
              <p className='text-sm lg:text-lg font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero tempore animi non aperiam reprehenderit dolorem omnis iusto dignissimos quaerat?</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl lg:text-2xl font-bold mb-2'>Fuck</h1>
              <p className='text-sm lg:text-lg font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero tempore animi non aperiam reprehenderit dolorem omnis iusto dignissimos quaerat?</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl lg:text-2xl font-bold mb-2'>Fuck</h1>
              <p className='text-sm lg:text-lg font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum libero tempore animi non aperiam reprehenderit dolorem omnis iusto dignissimos quaerat?</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TitleBar title={'OUR ACHIVEMENTS'} />
        <div className='flex justify-center items-center' data-aos="fade-up-right">
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24'>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-72 w-72 rounded-full' />
              <h1 className='text-2xl font-bold mt-4'>Best Seller</h1>
            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-72 w-72 rounded-full' />
              <h1 className='text-2xl font-bold mt-4'>Trusted</h1>
            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-72 w-72 rounded-full' />
              <h1 className='text-2xl font-bold mt-4'>Verified</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About