import React from 'react'
import { assets } from '../../assets/assets.js'

const AppStore = () => {
  return (
    <div className='w-full my-32'>
      <h1 className='text-center text-3xl pb-6 font-semibold tracking-wide sm:tracking-wider'>Download Blitzon</h1>
      <div className='flex justify-center items-center gap-5'>
        <img src={assets.play_store} alt="play_store" className='cursor-pointer w-[max(13vw,145px)]' />
        <img src={assets.app_store} alt="app_store" className='cursor-pointer w-[max(13vw,145px)]'/>
      </div>
    </div>
  )
}

export default AppStore