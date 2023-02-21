import React from 'react'
import '../styles/Header.css'
import '../styles/Navigation.css'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Header() {
  return (
    <div className='header-div'>
        <h1 className='header-text'>Riley Newhart</h1>
        <Navigation />
    </div>
  )
}
