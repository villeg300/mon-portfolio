import React from 'react'
import { EXPERIENCES } from '../../assets/data'
import { div } from 'framer-motion/client'

function Experiences() {
    return (
        <div>
            <div className=' max-w-6xl mx-auto'>
                <h2 className=' my-8 pt-4 text-center text-3xl'><span className='text-neutral-500'>Mes</span> Expériences</h2>
                <div>
                    {EXPERIENCES.map((experience, index)=>(
                        <div key={index} className=' mb-8 flex flex-wrap lg:justify-center'>
                            <div className=" w-full lg:w-1/4">
                                <h3 className=' mb-2 text-md font-bold text-neutral-400'>{experience.year}</h3>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h4 className=' mb-2 font-semibold'>{experience.role} - <span className=' text-sm text-purple-200'>{experience.company}</span></h4>
                                <p className=' mb-4 text-neutral-400'>{experience.description}</p>
                                {experience.technologies.map((tech, techIndex)=>(
                                    <span key={techIndex} className=' inline-block bg-background-secondary/50 text-sm text-neutral-300 px-3 py-1 rounded-full mr-2 mb-2 border border-background'>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
