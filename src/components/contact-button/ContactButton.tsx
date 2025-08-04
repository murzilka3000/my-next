"use client";

import s from './Contact.module.scss'

import React, { useState } from 'react'

const ContactButton = () => {


    const [count, setCount] = useState(false)


    const lookContacts = () => {
        let look = !count
        setCount(look)
    }

    if(count) {
        return (
            <div>
                <p className={s.p}>89932732205</p>
                <p className={s.p}>nikolayzhidkov@icloud.com</p>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={lookContacts}>
                    показать контакты
                </button>
            </div>
        )
    }


 
}

export default ContactButton