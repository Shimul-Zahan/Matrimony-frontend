import React, { useEffect } from 'react'
import Carousel from '../../Utils/Carousels'
import Navbar from '../../Utils/Navbar'
import PremiumMember from '../Components/PremiumMember'
import HowItWorks from '../Components/HowItWorks'
import SuccessCounter from '../Components/SuccessCounter'
import SuccessStory from '../Components/SuccessStory'

const Home = () => {

  return (
    <div>
      <div data-aos="fade-right">
        <Carousel />
      </div>
      <div className='container mx-auto my-20'>
        <PremiumMember />
      </div>
      <div data-aos="fade-right">
        <HowItWorks />
      </div>
      <div data-aos="fade-right">
        <SuccessCounter />
      </div>
      <div data-aos="fade-right">
        <SuccessStory />
      </div>
    </div>
  )
}

export default Home