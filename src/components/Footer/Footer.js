import React from 'react'
import s from './Footer.scss'

function Footer ({ active = false }) {
  const activeClass = active ? ' active' : ''
  return (
    <footer className={s.container}>
      <p className={s.copyright + activeClass}>Footer</p>
    </footer>
  )
}

export default Footer