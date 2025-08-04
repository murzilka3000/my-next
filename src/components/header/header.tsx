import Link from 'next/link'
import React from 'react'

import s from './Header.module.scss'

const header = () => {
  return (
    <header className={s.header}>
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link href={'/projects'}>Prjects</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default header