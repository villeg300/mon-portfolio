import { EXPERIENCES } from '../../assets/data'

function Experiences() {
    return (
        <div>
            <div className=' max-w-6xl mx-auto pb-20'>
                <h2 className=' mb-8 pt-0 text-center text-3xl'><span className='text-neutral-500'>Mes</span> Expériences</h2>
                <div className='p-3'>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className=' mb-8 flex flex-wrap lg:justify-center border-b border-background pb-6'>
                            <div className=" w-full lg:w-1/4">
                                <h3 className=' mb-2 text-md font-bold text-neutral-400'>{experience.year}</h3>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h4 className=' mb-2 font-semibold'>{experience.role} - <span className=' text-sm text-purple-200'>{experience.company}</span></h4>
                                <div className='mb-2 flex flex-wrap items-center '>
                                    <a type="button" href={experience.github} target='_blank' rel='noreferrer' className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                        </svg>
                                        GITHUB
                                    </a>
                                    {experience.preview ? <a type="button" href={experience.preview} target='_blank' rel='noreferrer' className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Démo</a> : ""}
                                </div>
                                <p className=' mb-4 text-neutral-400'>{experience.description}</p>
                                {experience.technologies.map((tech, techIndex) => (
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
