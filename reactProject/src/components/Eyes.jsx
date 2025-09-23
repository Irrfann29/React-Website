import React from 'react'

const Eyes = () => {
    return (
        <div className='h-[100vh] w-full bg-gray-700 overflow-hidden '>
            <div className='relative w-full bg-center h-screen bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute flex justify-evenly w-[80vh] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='h-[32vh] bg-blue-200 w-[32vh] rounded-full flex justify-center items-center'>
                        <div className=' bg-zinc-800 w-[20vh] h-[20vh]  rounded-full flex justify-center items-center'>
                            <div className=' bg-zinc-100 w-[3vh] h-[3vh]  rounded-full'></div>
                        </div>
                    </div>
                    <div className='h-[32vh] bg-blue-200 w-[32vh] rounded-full flex justify-center items-center'>
                        <div className=' bg-zinc-800 w-[20vh] h-[20vh]  rounded-full flex justify-center items-center'>
                            <div className=' bg-zinc-100 w-[3vh] h-[3vh]  rounded-full'></div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Eyes
