import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState(null)
    const prefersReduced = useReducedMotion()
    const anim = prefersReduced
        ? {}
        : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: false, amount: 0.2 }, transition: { duration: 0.7, ease: 'easeOut' } }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !message) {
            setStatus({ type: 'error', text: 'Veuillez renseigner au minimum votre email et un message.' })
            return
        }

        // Fallback simple : ouvrir client mail avec mailto (aucun backend configuré)
        const subject = `Contact depuis le site - ${name || 'Anonyme'}`
        const body = `${message}\n\n---\nNom: ${name || '—'}\nEmail: ${email}`
        const mailto = `mailto:villeg300@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailto

        setStatus({ type: 'success', text: 'Votre client mail va s’ouvrir pour envoyer le message.' })
        // keep fields as-is so user can edit if mail client not opened
    }

    return (
        <motion.section className='border-b border-background pb-24' {...anim}>
            <div className='max-w-6xl mx-auto px-6'>
                <h2 className='my-8 pt-4 text-center text-3xl'>Contactez <span className='text-neutral-500'>moi</span></h2>
                <div className='w-full max-w-2xl mx-auto'>
                    <form onSubmit={handleSubmit} className='grid gap-4'>
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Votre nom (optionnel)'
                                className='w-full px-4 py-2 rounded-lg bg-background-secondary/40 border border-background text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary'
                                aria-label='Votre nom'
                            />
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Votre email'
                                required
                                className='w-full px-4 py-2 rounded-lg bg-background-secondary/40 border border-background text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary'
                                aria-label='Votre email'
                            />
                        </div>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Votre message'
                            required
                            className='w-full min-h-[140px] px-4 py-3 rounded-lg bg-background-secondary/40 border border-background text-neutral-200 focus:outline-none focus:ring-2 focus:ring-secondary'
                            aria-label='Votre message'
                        />

                        <div className='flex items-center justify-between gap-4'>
                            <button type='submit' className='bg-secondary text-white px-5 py-2 rounded-xl font-semibold hover:bg-white hover:text-secondary transition-all duration-200'>Envoyer</button>
                            {status && (
                                <p className={`text-sm ${status.type === 'error' ? 'text-rose-400' : 'text-green-300'}`}>
                                    {status.text}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
