import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import '../assets/styles/Navbar.css'
import logo from '../assets/images/gymlogo.png'

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

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('.nav-container').offsetHeight; // Get navbar height
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight, // Use navbar height as offset
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <motion.nav
      className='nav-container'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='hamburger' onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <div className='logo' onClick={scrollToTop}>
        <motion.img
          src={logo}
          alt='GymInfluencer Logo'
          className='logo-img'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.span
          className='logo-text'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          GymInfluencer
        </motion.span>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href='#features' onClick={() => handleScroll('features')}>Features</a>
        <a href='#diet-plans'>Diet Plans</a>
        <a href='#workout-plans'>Workout Plans</a>
        <a href='#blog'>Blog</a>
        <a href='#faqs' onClick={() => handleScroll('faqs')}>FAQs</a>
        <a href='#contact' onClick={() => handleScroll('contact')}>Contact Us</a>
      </div>
      <div className='buttons'>
        <a href='#get-started' className='btn btn-primary'>
          Get Started
        </a>
        <a href='#login' className='btn btn-secondary'>
          Login
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar
