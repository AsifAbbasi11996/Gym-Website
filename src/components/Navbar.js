import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import '../assets/styles/Navbar.css' // Import the external CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    })
  }

  return (
    <nav className='nav-container'>
      <div className='logo' onClick={scrollToTop}>
        GymInfluencer
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href='#features'>Features</a>
        <a href='#diet-plans'>Diet Plans</a>
        <a href='#workout-plans'>Workout Plans</a>
        <a href='#blog'>Blog</a>
        <a href='#faqs'>FAQs</a>
        <a href='#contact-us'>Contact Us</a>
      </div>
      <div className='buttons'>
        <a href='#get-started' className='btn btn-primary'>
          Get Started
        </a>
        <a href='#login' className='btn btn-secondary'>
          Login
        </a>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </nav>
  )
}

export default Navbar
