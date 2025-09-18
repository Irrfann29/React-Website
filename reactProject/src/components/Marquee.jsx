import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
    return (

        <div className='bg-[#393E46] text-white rounded-tl-3xl rounded-tr-3xl py-30'>
            <div className='flex items-center flex-nowrap whitespace-nowrap font-foundersGrotesk uppercase overflow-hidden border-y-2 h-80 pb-12 '>
                <motion.h1 animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 7, // adjust speed
                    }} className='leading-none text-[22vw] border-spacing-x-4 '>We Are Ochi ㅤ 

 </motion.h1>
                <motion.h1 animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 7, // adjust speed
                    }} className='leading-none text-[22vw] border-spacing-x-4 '>We Are Ochi ㅤ </motion.h1>
                <motion.h1 animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 7, // adjust speed
                    }} className='leading-none text-[22vw] border-spacing-x-4 '>We Are Ochi ㅤ </motion.h1>


            </div>

        </div>
    )
}

export default Marquee
