import React from 'react'
import { BiLogoDjango, BiLogoPostgresql } from 'react-icons/bi'
import { FaNode } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb'
import vite from "../../assets/icons/vite.svg"
import { motion, useReducedMotion } from 'framer-motion'
import { FaFlutter } from 'react-icons/fa6'


function Technologies() {
    const prefersReduced = useReducedMotion()
    const anim = prefersReduced
        ? {}
        : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.2 }, transition: { duration: 0.7, ease: 'easeOut' } }

    return (
        <motion.section className='border-b border-background pb-24' {...anim}>
            <div className=' max-w-6xl mx-auto'>
                <h2 className=' my-8 pt-4 text-center text-3xl'><span className='text-neutral-500'>Mes</span> Technologies</h2>
                <div className=' flex flex-wrap items-center justify-center gap-4'>
                    {[
                        <RiReactjsLine className='text-5xl text-cyan-400' key='react' />,
                        <TbBrandNextjs className='text-5xl' key='next' />,
                        <img className='w-[48px] h-[48px]' src={vite} alt="vite" key='vite' />,
                        <BiLogoDjango className='text-5xl text-green-900' key='django' />,
                        <BiLogoPostgresql className='text-5xl text-sky-700' key='postgres' />,
                        <FaFlutter className='text-5xl text-cyan-500' key='node' />,
                    ].map((icon, idx) => (
                        <motion.div
                            key={idx}
                            className=" rounded-2xl border-4 border-background p-4"
                            {...(prefersReduced
                                ? {}
                                : { animate: { y: [0, -8, 0] }, transition: { duration: 3 + idx * 0.3, delay: idx * 0.12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } })}
                        >
                            {icon}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Technologies
