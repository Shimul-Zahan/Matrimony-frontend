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
      <div>
        <Carousel />
      </div>
      <div className='container mx-auto my-20'>
        <PremiumMember />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <SuccessCounter />
      </div>
      <div>
        <SuccessStory />
      </div>
    </div>
  )
}

export default Home