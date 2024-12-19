import React, { useState, useLayoutEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import '../assets/styles/Navbar.css';
import logo from '../assets/images/gymlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinksRef = useRef([]);
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const logoTextRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTopAndResetURL = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.pushState(null, '', '/');
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = navContainerRef.current.offsetHeight; // Get navbar height
    const additionalPadding = 60; // Add top padding of 60px

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight - additionalPadding,
        behavior: 'smooth',
      });
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    // GSAP animation for nav links
    const navLinks = navLinksRef.current;
    if (navLinks.length > 0) {
      gsap.from(navLinks, {
        duration: 1,
        opacity: 1,
        y: -10,
        ease: 'power2.out',
      });
    }

    // GSAP animation for logo and text
    gsap.from([logoRef.current, logoTextRef.current], {
      duration: 1,
      opacity: 1,
      ease: 'elastic.out(1, 0.3)',
      delay: 0.5,
    });

    // Sticky navbar on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navContainerRef.current.classList.add('scrolled');
      } else {
        navContainerRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className="nav-container"
      ref={navContainerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
      <div className="logo" onClick={scrollToTopAndResetURL}>
        <motion.img
          src={logo}
          alt="GymInfluencer Logo"
          className="logo-img"
          ref={logoRef}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <motion.span
          className="logo-text"
          ref={logoTextRef}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          GymInfluencer
        </motion.span>
      </div>

      <motion.div
        className={`nav-links ${isOpen ? 'open' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', staggerChildren: 0.2 }}
      >
        {['features', 'workout-plans', 'diet-plans', 'faqs', 'contact'].map(
          (id, index) => (
            <motion.a
              key={id}
              href={`#${id}`}
              ref={(el) => (navLinksRef.current[index] = el)}
              onClick={() => {
                handleScroll(id);
                closeMenu();
              }}
              transition={{ duration: 0.2 }}
            >
              {id.replace('-', ' ')}
            </motion.a>
          )
        )}
      </motion.div>
      <div className="buttons">
        <motion.a
          href="#get-started"
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Get Started
        </motion.a>
        <motion.a
          href="#login"
          className="btn btn-secondary"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Login
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
