import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-background-secondary text-neutral-200'>
            <div className='max-w-6xl mx-auto px-6 py-12'>
                <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-6'>
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl font-semibold'>Ludovic Moyenga</h3>
                        <p className='text-sm mt-2'>
                            <a href='mailto:villeg300@gmail.com' className='inline-flex items-center gap-2 hover:underline'>
                                <FaEnvelope />
                                villeg300@gmail.com
                            </a>
                        </p>
                        <p className='text-sm mt-1'>
                            <a href='tel:+33600000000' className='inline-flex items-center gap-2 hover:underline'>
                                <FaPhone />
                                +33 6 00 00 00 00
                            </a>
                        </p>
                    </div>

                    <div className='flex flex-col items-center md:items-end'>
                        <div className='flex gap-4 text-2xl'>
                            <a href='https://github.com/villeg300' target='_blank' rel='noreferrer' aria-label='GitHub' className='hover:text-white'>
                                <FaGithub />
                            </a>
                            <a href='#' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='hover:text-white'>
                                <FaLinkedin />
                            </a>
                            <a href='#' target='_blank' rel='noreferrer' aria-label='Facebook' className='hover:text-white'>
                                <FaFacebook />
                            </a>
                        </div>
                        <p className='text-sm mt-3'>&copy; {new Date().getFullYear()} Ludovic Moyenga — All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
