import React from 'react'
import SportsGallery from '../Components/HomeGallery'
import LatestNews from '../Components/HomeBlogs'
import StylishProducts from '../Components/HomeProducts'
import NewArrivals from '../Components/HomeNewProduct'
import FitnessVideo from '../Components/HomeVideo'
import HomeHero from '../Components/HomeHero'
import WarmUpSection from '../Components/HomeWarm'
import ClubSection from '../Components/HomeClub'
import AccessoriesSection from '../Components/HomeAccessories'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <HomeHero/>
        <AccessoriesSection/>
        <WarmUpSection/>
        <ClubSection/>
        <FitnessVideo/>
        <NewArrivals/>
        <StylishProducts/>
        <LatestNews/>
      <SportsGallery/>
    </div>
  )
}

export default Home
