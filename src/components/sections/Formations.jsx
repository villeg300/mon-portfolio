import React from 'react'
import { FORMATIONS } from '../../assets/data'
import { motion, useReducedMotion } from 'framer-motion'

function Formations() {
    const prefersReduced = useReducedMotion()
    const anim = prefersReduced ? {} : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.2 }, transition: { duration: 0.6, ease: 'easeOut' } }

    return (
        <motion.section className='border-b border-background pb-24' {...anim}>
            <div className='max-w-6xl mx-auto px-6'>
                <h2 className='my-8 pt-4 text-center text-3xl'><span className='text-neutral-500'>Mes</span> Formations</h2>
                <div className='grid gap-6 sm:grid-cols-2'>
                    {FORMATIONS.map((f) => (
                        <article key={f.id} className='flex gap-4 p-4 rounded-2xl bg-background-secondary/40 border border-background'>
                            <div className='w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-800 flex items-center justify-center'>
                                {/* image square */}
                                <img src={f.image} alt={f.title} className='w-full h-full object-cover' />
                            </div>
                            <div className='flex-1'>
                                <div className='flex items-start justify-between'>
                                    <div>
                                        <h3 className='font-semibold'>{f.title}</h3>
                                        <p className='text-sm text-neutral-400'>{f.institution}</p>
                                    </div>
                                    <div className='text-right text-sm'>
                                        <div className='text-neutral-400'>{f.start} • {f.end}</div>
                                        {f.certified ? <span className='inline-block mt-2 px-2 py-1 text-xs rounded bg-green-700/40 text-green-200'>Certifié</span> : <span className='inline-block mt-2 px-2 py-1 text-xs rounded bg-amber-700/20 text-amber-200'>Non certifié</span>}
                                    </div>
                                </div>
                                <p className='text-sm mt-2 text-neutral-300'>{f.description}</p>
                                <div className='mt-3 flex flex-wrap gap-2'>
                                    {f.skills.map((s, i) => (
                                        <span key={i} className='inline-block text-xs text-neutral-200 bg-background/20 px-2 py-1 rounded-full border border-background'>{s}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Formations
