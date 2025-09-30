import React from 'react'

const Features = () => {
  return (
    <div className='text-white font-neueMontreal' >
      
      <div className='flex mx-20 text-lg mt-14'>
        <div className='w-1/2'>
        <div className='uppercase flex items-center gap-3'>
          <div className='w-[14px] h-[14px] rounded-full bg-amber-50'></div>
          <div>Salience Labs</div>
          </div>
        <div className='h-[70vh] w-[98%]  mt-8 rounded-2xl'>
          <img className=' bg-cover object-cover w-[100%] h-[100%] rounded-2xl bg-center ' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
        </div>
        <div className='uppercase pt-8 flex gap-4'>
            <div className='border-1 px-5 py-2 rounded-3xl border-gray-400'>Brand Identity </div>
            <div className='border-1 px-5 py-2 rounded-3xl border-gray-400'>Executive Keynote</div>
            
            
          </div>
        </div>
        <div className='w-1/2'>
          <div className='uppercase flex items-center gap-3'>
          <div className='w-[14px] h-[14px] rounded-full bg-amber-50'></div>
          <div>Madellia experience</div>
          </div>
          <div className='cards h-[70vh] w-[98%] mt-8 rounded-2xl overflow-hidden'>
          <img className='imagwa object-cover w-[100%] h-[100%] rounded-2xl ' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
        </div>
          <div className='uppercase pt-8 flex gap-4'>
            <div className='border-1 px-5 py-2 rounded-3xl border-gray-400'>Brand Identity </div>
            <div className='border-1 px-5 py-2 rounded-3xl border-gray-400'>Executive Keynote</div>
            <div className='border-1 px-5 py-2 rounded-3xl border-gray-400'>Product Launch</div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Features
