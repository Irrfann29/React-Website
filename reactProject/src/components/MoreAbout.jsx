import React from 'react'

const MoreAbout = () => {
  return (
    <div className=' text-black flex bg-[#948979] font-neueMontreal h-[80vh]'>
      <div className='pl-16 w-1/2 '>
        <h1 className='text-7xl py-7'>How We Can Help</h1>
        <div className='bg-gray-900 gap-12 items-center inline-flex py-6 px-10 text-white rounded-full'>
        <button className='uppercase text-xl text-gray-200'>Read More </button>
        <span className='bg-white h-3 w-3 rounded-full'> </span>
        </div>
      </div>
      <div className='pt-8 ' ><img className='h-[70vh] rounded-3xl border-1 border-gray-700' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
    </div>
  )
}

export default MoreAbout
