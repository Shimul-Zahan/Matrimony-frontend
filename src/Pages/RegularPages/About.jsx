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
      <div data-aos="fade-right" className='bg-black bg-blend-overlay bg-opacity-70 lg:h-[800px] my-16 bg-fixed lg:mb-40' style={{ backgroundImage: `url('${bg}')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className='flex flex-col justify-between items-center lg:flex-row h-full text-white max-w-7xl mx-auto gap-5 relative'>
          <h1 className='text-2xl text-center text-[#FFC436] lg:text-start lg:text-7xl font-bold mt-20 lg:mt-0'>Discover <br />Your Forever <br />Connection</h1>
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
                <img src="https://i.ibb.co/ZMkjQcL/bride-bridesmaids-red-dresses-pose-outside-old-wet-street-8353-7114.jpg" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/Syp5S2t/beautiful-caucasian-wedding-couple-is-standing-front-decorated-with-blue-hydrangea-archway-holding-h.jpg" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/fpdx12y/top-view-beautiful-wedding-couple-with-wedding-bouquet-who-are-kissing-outdoors-marriage-concept-835.jpg" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.ibb.co/zRWqKkD/beautiful-bride-with-her-husband-park-1157-19036.jpg" alt="" className='h-[200px] lg:h-[400px] md:w-[500px] w-full rounded-sm mx-auto' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='text-white my-10 w-9/12 lg:text-black lg:bg-white py-10 px-20 lg:absolute lg:-bottom-64 lg:left-1/2 lg:transform lg:-translate-x-1/2 hidden lg:block rounded-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mx-auto'>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://i.ibb.co/jvckksK/match.png" alt="" className='w-32 h-32' />
              <h1 className='text-xl text-[#0C356A] font-bold'>Profiles and Matching</h1>
              <p className='text-[#0C356A]'>Emphasize the importance of these details in finding compatible matches</p>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://i.ibb.co/yNM0pRL/folder.png" alt="" className='w-32 h-32' />
              <h1 className='text-xl text-[#0C356A] font-bold'>Security and Privacy</h1>
              <p className='text-[#0C356A]'>Assure users about the security measures in place to protect their personal information.</p>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://i.ibb.co/QQdg4dN/img3.jpg" alt="" className='w-32 h-32' />
              <h1 className='text-xl text-[#0C356A] font-bold'>Community and Support</h1>
              <p className='text-[#0C356A]'> Highlight the sense of community on your matrimony website. Discuss any forums, discussion boards</p>
            </div>
            <div className='flex justify-center items-center gap-3 flex-col text-center px-4'>
              <img src="https://i.ibb.co/2d71Pgs/project-management.png" alt="" className='w-32 h-32' />
              <h1 className='text-xl text-[#0C356A] font-bold'>Innovative Features</h1>
              <p className='text-[#0C356A]'>Introduce any unique or innovative features that set your matrimony website apart from others.</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className='py-20 container mx-auto'>
        <TitleBar title={'WHY CHOOSE US'} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 lg:20  text-center lg:text-start'>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl text-[#0C356A] lg:text-2xl font-bold mb-2'>Tailored Matchmaking Algorithm</h1>
              <p className='text-sm lg:text-base font-thin'>Our advanced matchmaking algorithm goes beyond basic criteria, considering compatibility, shared interests, and values to ensure meaningful connections. We prioritize quality matches over quantity, increasing the likelihood of finding a life partner.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://i.ibb.co/gVdyRL7/customer-review.png" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl text-[#0C356A] lg:text-2xl font-bold mb-2'>Memorable User Experience</h1>
              <p className='text-sm lg:text-base font-thin'>Experience a user-friendly interface that enhances your journey to finding love. Our website is designed to be intuitive, making navigation easy and enjoyable. From profile creation to communication tools, every step is crafted to provide a seamless and memorable experience.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://i.ibb.co/jM4YGVN/picture.png" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl text-[#0C356A] lg:text-2xl font-bold mb-2'>Verified Profiles for Trust and Safety</h1>
              <p className='text-sm lg:text-base font-thin'>Trust is crucial in the search for a life partner. Our matrimony website ensures the authenticity of profiles through a rigorous verification process. This commitment to security creates a safe environment where individuals can confidently explore and connect.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://i.ibb.co/RPF4GgV/love.png" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl text-[#0C356A] lg:text-2xl font-bold mb-2'>Diverse Community and Inclusivity</h1>
              <p className='text-sm lg:text-base font-thin'>Embrace diversity in our inclusive community, where individuals from various backgrounds, cultures, and communities come together to find love. We celebrate differences and believe that true compatibility transcends boundaries, fostering a rich and diverse pool of potential matches.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://i.ibb.co/80Vk3qt/social-services.png" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl text-[#0C356A] lg:text-2xl font-bold mb-2'>Supportive Relationship Guidance</h1>
              <p className='text-sm lg:text-base font-thin'>Beyond matchmaking, we offer resources and guidance to support you on your journey to a successful and fulfilling relationship. From expert articles on relationships to personalized advice, we are committed to being a reliable companion throughout your matrimony experience.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-start md:border-b-2 p-4">
            <img src="https://i.ibb.co/L0Z4hBY/secret-file.png" className='h-36 w-36 rounded-full' />
            <div>
              <h1 className='text-xl text-[#0C356A] lg:text-2xl font-bold mb-2'>Privacy and Confidentiality</h1>
              <p className='text-sm lg:text-base font-thin'>We understand the importance of privacy in the search for a life partner. Our platform prioritizes confidentiality, ensuring that your personal information is handled with the utmost care. We provide control over what you share, giving you the peace of mind needed for a genuine and open exploration of connections.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TitleBar title={'OUR ACHIVEMENTS'} />
        <div data-aos="fade-right" className='flex justify-center items-center' data-aos="fade-up-right">
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24'>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src="https://img.freepik.com/premium-photo/indian-wedding-miniature_38694-277.jpg?w=740" className='h-72 w-72 rounded-full' />
              <h1 className='text-2xl font-bold mt-4 text-[#0C356A]'>Best Match Maker</h1>
            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src="https://i.ibb.co/RjZVBFf/check-mark.png" className='h-72 w-72 rounded-full' />
              <h1 className='text-2xl font-bold mt-4 text-[#0C356A]'>Trusted</h1>
            </div>
            <div className='flex flex-col justify-center items-center mb-20'>
              <img src="https://i.ibb.co/QDH5t8N/shield.png" className='h-72 w-72 rounded-full' />
              <h1 className='text-2xl font-bold mt-4 text-[#0C356A]'>Verified</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About