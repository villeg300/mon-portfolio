import React from 'react'
import Moi2 from "../../assets/images/about-img3.png"
import { ABOUT_TEXT } from '../../assets/data'

function About() {
    return (
        <div className=' border-b border-background'>
            <div className=' max-w-6xl mx-auto'>
                    <h2 className=' my-8 pt-4 text-center text-3xl'>A Propos de <span className='text-neutral-500'>Moi</span></h2>
                <div className="flex flex-wrap-reverse">
                    <div className=' w-full lg:w-1/2 p-6 lg:p-8'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className=' my-3 max-w-sm md:max-w-xl text-lg text-center md:text-left'>{ABOUT_TEXT}</p>
                        </div>
                        <div className='mt-3'>
                            <a
                                href='mailto:villeg300@gmail.com'
                                className='block w-full sm:w-11/12 md:w-3/4 lg:w-7/12 mx-auto lg:mx-0 mt-3 bg-secondary text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-base md:text-lg font-semibold border-2 border-secondary hover:bg-white hover:text-secondary transition-all duration-300 text-center'
                                aria-label='Contactez moi par email'
                            >
                                Contactez-moi
                            </a>
                        </div>
                    </div>
                    <div className=' w-full lg:w-1/2 lg:p-8'>
                        <div className='flex mx-auto items-center justify-center object-cover relative'>
                            <img className=' rounded-2xl' src={Moi2} alt="photo de Ludovic Moyenga" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
