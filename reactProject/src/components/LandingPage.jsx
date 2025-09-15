import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faArrowRight} from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <div className='w-full h-screen  text-white items-center pt-[11%]  '>

            <div className="textstructure pl-[3.5%]">
                <div className="masker font-foundersGrotesk text-[135px] uppercase leading-18 tracking-[0.015em]">
                    We create
                </div>
                <div className="masker font-foundersGrotesk text-[135px] uppercase leading-32 tracking-[0.015em] flex items-center">
                    <div className='bg-emerald-400 mt-3 h-23 w-35 rounded-lg mr-4'></div>
                    <div className=''>eye-opening</div>
                </div>
                <div className="masker font-foundersGrotesk text-[135px] uppercase leading-18 tracking-[0.015em]">
                    presentations
                </div>
            </div>
            <div className="border-t-1 border-zinc-600 mt-32 font-neueMontreal px-10 py-4 text-[17px]">
                <div className="options flex items-center justify-between ">
                    <ul>
                        <li>Presentation and storytelling agency</li>
                    </ul>
                    <ul>
                        <li>
                            For innovation teams and global brands
                        </li>
                    </ul>
                    <ul className='flex items-center gap-2 mr-3 uppercase'>
                        <li className='border rounded-3xl py-1.5 px-3.5 border-gray-500'>Start the project</li>
                        <FontAwesomeIcon className='border border-gray-500 rotate-[-45deg] rounded-full py-2 px-1.5' icon={faArrowRight} />

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
