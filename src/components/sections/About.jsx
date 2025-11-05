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
                        <a href='mailto:villeg300@gmail.com' className='w-full lg:w-7/12 mt-3 bg-secondary text-white px-6 py-3 rounded-xl text-lg font-semibold border-2 border-secondary hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary transition-all duration-300 md:px-8 md:py-4 md:text-xl'>Contactez-moi</a>
                    </div>
                    <div className=' w-full lg:w-1/2 lg:p-8'>
                        <div className='flex mx-auto items-center justify-center object-cover'>
                            <img className=' rounded-2xl' src={Moi2} alt="photo de Ludovic Moyenga" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
