import React from 'react'
import '../styles/Navigation.css'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  let location = useNavigate();
  return (
    <div className='nav-div'>
        <a className='nav-link' onClick={() => location('/about')}>About Me</a>
        <a className='nav-link' onClick={() => location('/projects')}>Projects</a>
        <a className='nav-link' onClick={() => location('/contact')}>Contact</a>
        <a className='nav-link'>Resume</a>
    </div>
  )
}
