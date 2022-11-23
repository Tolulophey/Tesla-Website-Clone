import React from 'react'
import Banner from '../../Components/Banner/Banner';
import SecondBanner from '../../Components/SecondBanner/SecondBanner';
import ThirdBanner from '../../Components/ThirdBanner/ThirdBanner';
import FourthBanner from '../../Components/FourthBanner/FourthBanner';
import FifthBanner from '../../Components/FifthBanner/FifthBanner';
import SixthBanner from '../../Components/SixthBanner/SixthBanner';
// import Signin from '../../pages/Sign-in/signin';

const Home = () => {
  return (
    <div>
      <Banner/>
      <SecondBanner/>
      <ThirdBanner/>
      <FourthBanner/>
      <FifthBanner/>
      <SixthBanner/>
      {/* <Signin/> */}
    </div>
  )
}

export default Home