import React from 'react'

const Marquee = () => {
    return (
        <div className='bg-emerald-600 text-white rounded-2xl'>
            <div className='flex items-center flex-nowrap whitespace-nowrap font-foundersGrotesk uppercase overflow-hidden '>
                <div className='leading-none text-[25vw] border-spacing-x-4'>We Are Ochi </div>
                <div className='leading-none text-[25vw]' >We Are Ochi</div>
            </div>

        </div>
    )
}

export default Marquee
