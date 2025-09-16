import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
    return (
        
        <div className='bg-emerald-600 text-white rounded-2xl py-18'>
            <div className='flex items-center flex-nowrap whitespace-nowrap font-foundersGrotesk uppercase overflow-hidden border-y-2 h-80 pb-12 '>
                <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear", repeat : Infinity,duration: 5}} className='leading-none text-[30vw] border-spacing-x-4'>We Are Ochi </motion.h1>motion.
                <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear", repeat : Infinity,duration: 5}} className='leading-none text-[30vw]' >We Are Ochi</motion.h1>
            </div>

        </div>
    )
}

export default Marquee
