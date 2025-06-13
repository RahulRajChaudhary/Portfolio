"use client"

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'


export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  return (
    <motion.section 
      id="contact" 
      className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className='text-gray-600 -mt-6'>Please contact me directly at {" "}
        <a href="mailto:rrajchaudhary.hajipur@gmail.com" className="underline">rrajchaudhary.hajipur@gmail.com</a> {" "}
        or through this form.</p>
      
      <form 
        className='mt-6 flex flex-col gap-2'
        action={async (formData) => {
          const { error } = await sendEmail(formData)

           console.log('Form submission result:', { error });
          
          if (error) {
            toast.error(error)
            return
          }
          
          setEmail('')
          setMessage('')
          toast.success('Email sent successfully!')
        }}
      >
        <input
          name="senderEmail"
          type="email"
          className='h-14 border border-black/10 rounded-xl px-4 w-full'
          placeholder='Your email'
          required
          maxLength={100}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Your message here"
          className='h-52 my-3 border border-black/10 rounded-xl px-4 w-full'
          required
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button 
      type="submit" 
      disabled={pending}
      className='group bg-gray-900 w-[max-content] text-white px-4 py-2 inline-flex items-center gap-1 rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-70'
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send <FaPaperPlane className='w-4 h-4 transition-all group-hover:translate-x-[0.1rem] group-hover:-translate-y-[0.1rem]' /> 
        </>
      )}
    </button>
  )
}