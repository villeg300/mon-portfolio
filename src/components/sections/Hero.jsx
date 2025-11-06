import React from 'react'
import { HERO_CONTENT } from '../../assets/data'
import Moi from "../../assets/images/Moi.png"

function Hero() {
    return (
        <div className='pb-12 mt-16 lg:mt-8'>
            <div className="flex flex-wrap">
                <div className=' w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <img src={Moi} alt="" />
                    </div>
                </div>
                <div className=' w-full lg:w-1/2 mt-3'>
                    <div className=' flex flex-col items-center lg:items-start'>
                        <h1 className=' pb-2 text-4xl text-center font-bold leading-tight md:text-6xl lg:text-left lg:mt-16 lg:text-7xl'><span className='block pb-2 lg:pb-2'>Développeur</span> <span className=' text-3xl text-neutral-300 font-light md:text-5xl lg:text-6xl'><span>web</span> <span className='text-secondary font-extrabold'>&</span> <span>mobile</span></span></h1>
                        <p className=' text-xl my-2 max-w-xl py-6 font-light md:text-2xl md:font-normal text-neutral-300'>
                            {HERO_CONTENT}
                        </p>
                        <div className=' max-w-xl w-full'>
                            {/* <button className='w-full lg:w-5/12 bg-primary text-white px-6 py-3 rounded-xl text-lg font-semibold border-2 border-primary hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 md:px-8 md:py-4 md:text-xl mb-3 lg:me-3'>Mes Projets</button>  */}
                            <a
                                href='mailto:villeg300@gmail.com'
                                className='block w-full sm:w-11/12 md:w-3/4 lg:w-5/12 mx-auto lg:mx-0 mt-3 bg-secondary text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-base md:text-lg font-semibold border-2 border-secondary hover:bg-white hover:text-secondary transition-all duration-300 text-center cursor-pointer'
                                aria-label='Me contacter'
                            >
                                Me Contacter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
