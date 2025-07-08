import React from 'react'
import { assets } from '../assets/assets.js'
import PromotionBox from '../util/PromotionBox.jsx'

const AboutUs = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        About Us & More
      </div>

      <div className='py-10 flex flex-col justify-center md:flex-row gap-10 pb-10 sm:pb-20'>
        <img src={assets.white_keyboard} alt="contact_img" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl xl:text-2xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54790 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@blitzon.com</p>
          <p className='font-semibold text-xl xl:text-2xl text-gray-600'>Careers at Blitzon</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-5 sm:px-8 py-2 sm:py-4 text-sm sm:hover:bg-black sm:hover:text-white
          transition-all duration-300 bg-black sm:bg-white text-white sm:text-black'>Explore Jobs</button>
        </div>
      </div>
      <div className='flex justify-center'>
        <PromotionBox text={'Enter your email'} btnText={'Subscribe'} width="max-w-[610px]"/>
      </div>
    </div>
  )
}

export default AboutUs