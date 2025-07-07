import React, { useState } from 'react'
import { assets } from '../../assets/assets.js'
import headphone_img from '../../assets/other/header_img_final.png'
import keyboard_img from '../../assets/other/kb_1_4.png'
import mice_img from '../../assets/mice/mice_3_3.png'
import laptop_img from '../../assets/laptop/laptop_5_1.png'
import monitor_img from '../../assets/other/header_pc_img.png'

const headerImgs = [
  {
    id: 1,
    image: headphone_img,
  },
  {
    id: 2,
    image: keyboard_img,
  },
  {
    id: 3,
    image: mice_img,
  },
  {
    id: 4,
    image: laptop_img,
  },
  {
    id: 5,
    image: monitor_img,
  }
]

const Header = () => {
  const [headerId, setHeaderId] = useState(1);

  return (
    // sm:h-[max(50vw,410px)]
    <div className='mt-6 mb-10 bg-[#FF003F]/90 h-[max-content] rounded-xl 
      grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] px-5 py-10 sm:px-10 sm:pt-15 pb-10 gap-7'>
      <div className='pt-5 sm:pt-10 flex flex-col gap-[40px] sm:gap-[90px] text-white'>
        <div className='flex flex-col gap-[30px]'>
          <h1 className='text-[max(4vw,35px)] leading-[1]'>Checkout our latest gaming equipments</h1>
          <p className='text-sm lg:text-base leading-[1]'>
            Hmm it looks like your setup is incomplete, no worries you are at right place, 
            go and grab those deals to level up your gaming experience</p>
        </div>
        <div className='flex justify-between items-center lg:max-w-[45vw] gap-6 scrollbar overflow-x-auto '>
          {
            headerImgs.map(({id, image}) => (
              <div className='bg-white rounded-lg 
              min-w-[80px] min-h-[80px] max-h-[80px] max-w-[80px] sm:min-w-[100px] sm:min-h-[100px] 
              xl:min-w-[120px] xl:min-h-[120px] flex items-center justify-center' key={id}>
                <img src={image} alt="product_img" className='cursor-pointer object-contain'
                onClick={() => setHeaderId(id)}/>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='bg-white rounded-full aspect-square flex h-fit justify-center items-center'>
          <img src={headerImgs[headerId-1].image} className='object-cover w-[220px] h-[220px] sm:w-[max(33vw,245px)] sm:h-[max(25vw,210px)]'/>
        </div>
      </div>
    </div>
  )
}

export default Header