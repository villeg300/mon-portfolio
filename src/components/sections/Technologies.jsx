import React from 'react'
import { BiLogoDjango, BiLogoPostgresql } from 'react-icons/bi'
import { FaNode } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb'
import vite from "../../assets/icons/vite.svg"


function Technologies() {
    return (
        <div className='border-b border-background pb-24'>
            <div className=' max-w-6xl mx-auto'>
                <h2 className=' my-8 pt-4 text-center text-3xl'><span className='text-neutral-500'>Mes</span> Technologies</h2>
                <div className=' flex flex-wrap items-center justify-center gap-4'>
                    <div className=" rounded-2xl border-4 border-background p-4">
                        <RiReactjsLine className='text-5xl text-cyan-400'/>
                    </div>
                    <div className=" rounded-2xl border-4 border-background p-4">
                        <TbBrandNextjs className='text-5xl'/>
                    </div> 
                    <div className=" rounded-2xl border-4 border-background p-4">
                        {/* <TbBrandVite className='text-5xl text-yellow-400'/> */}
                        <img className='w-[48px] h-[48px]' src={vite} alt="" />
                    </div>                   
                    <div className=" rounded-2xl border-4 border-background p-4">
                        <FaNode className='text-5xl text-green-500'/>
                    </div>
                    <div className=" rounded-2xl border-4 border-background p-4">
                        <BiLogoDjango className='text-5xl text-green-900'/>
                    </div>
                    <div className=" rounded-2xl border-4 border-background p-4">
                        <BiLogoPostgresql className='text-5xl text-sky-700'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies
