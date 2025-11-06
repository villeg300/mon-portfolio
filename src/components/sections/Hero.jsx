import React from 'react'
import { HERO_CONTENT } from '../../assets/data'
import Moi from "../../assets/images/Moi.png"
import { motion, useReducedMotion } from 'framer-motion'

function Hero() {
    const prefersReduced = useReducedMotion()
    const imgAnim = prefersReduced
        ? {}
        : { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: false, amount: 0.25 }, transition: { duration: 0.8, ease: 'easeOut' } }
    const textAnim = prefersReduced
        ? {}
        : { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: false, amount: 0.25 }, transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } }

    return (
        <motion.section className='pb-12 mt-16 lg:mt-8' {...(prefersReduced ? {} : { initial: 'hidden' })}>
            <div className="flex flex-wrap">
                <motion.div className=' w-full lg:w-1/2 lg:p-8' {...imgAnim}>
                    <div className='flex justify-center'>
                        <img src={Moi} alt="photo de Ludovic" />
                    </div>
                </motion.div>
                <motion.div className=' w-full lg:w-1/2 mt-3' {...textAnim}>
                    <div className=' flex flex-col items-center lg:items-start'>
                        <h1 className=' pb-2 text-4xl text-center font-bold leading-tight md:text-6xl lg:text-left lg:mt-16 lg:text-7xl'><span className='block pb-2 lg:pb-2'>Développeur</span> <span className=' text-3xl text-neutral-300 font-light md:text-5xl lg:text-6xl'><span>web</span> <span className='text-secondary font-extrabold'>&</span> <span>mobile</span></span></h1>
                        <p className=' text-xl my-2 max-w-xl py-6 font-light md:text-2xl md:font-normal text-neutral-300'>
                            {HERO_CONTENT}
                        </p>
                        <div className=' max-w-xl w-full'>
                            <a
                                href='mailto:villeg300@gmail.com'
                                className='block w-full sm:w-11/12 md:w-3/4 lg:w-5/12 mx-auto lg:mx-0 mt-3 bg-secondary text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-base md:text-lg font-semibold border-2 border-secondary hover:bg-white hover:text-secondary transition-all duration-300 text-center cursor-pointer'
                                aria-label='Me contacter'
                            >
                                Me Contacter
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Hero
