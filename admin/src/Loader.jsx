import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-screen min-w-[100%] flex justify-center items-center'>
      <div className='h-[100px] w-[100px] border-2 border-y-red-500 border-x-transparent rounded-full animate-[loading_1s_linear_infinite]'>

      </div>
    </div>
  )
}

export default Loader