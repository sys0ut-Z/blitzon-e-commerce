import React from 'react'

const PromotionBox = ({text, btnText, width}) => {
  return (
    <div className={`w-full ${width} border text-xs sm:text-sm`}>
      <input type="text" placeholder={text} className='!px-3 !py-2 sm:!py-3 !w-[80%] sm:!w-[75%] outline-none caret-red-500 
      !border-none !text-xs sm:!text-sm' />
      <button className='w-[20%] sm:w-[25%] bg-black text-white px-3 py-2 sm:py-3'>{btnText}</button>
    </div>
  )
}

export default PromotionBox