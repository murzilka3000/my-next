"use client"
import { handleContactForm } from '@/lib/actions'
import React from 'react'
import SubmitButton from '../submit/SubmitButton'

const ContactForm = () => {
  return (
    <div>
        <form action={handleContactForm}>
            <div>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="">Your name</label>
                <input type="text" name="name"/>
            </div>
            <SubmitButton/>
        </form>
    </div>
  )
}

export default ContactForm