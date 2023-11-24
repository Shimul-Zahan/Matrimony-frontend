import React, { useEffect } from 'react'
import Carousel from '../../Utils/Carousels'
import Navbar from '../../Utils/Navbar'
import PremiumMember from '../Components/PremiumMember'

const Home = () => {

  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className='container mx-auto my-20'>
        <PremiumMember />
      </div>
    </div>
  )
}

export default Home