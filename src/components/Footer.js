import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import '../assets/styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        {/* Logo */}
        <div className='footer-logo'>
          <h3>GymInfluencer</h3>
          <p>
            Empower your fitness journey with personalized workout plans, expert
            guidance, and a supportive community designed to help you achieve
            your goals faster and more efficiently.
          </p>
        </div>

        {/* Links */}
        <div className='footer-links'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href='/features'>Features</Link>
            </li>
            <li>
              <Link href='/workout-plans'>Workout Plans</Link>
            </li>
            <li>
              <Link href='/diet-plans'>Diet Plans</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/faqs'>FAQs</Link>
            </li>
            <li>
              <Link href='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='footer-social'>
          <h3>Follow Us</h3>
          <div className='social-links'>
            <Link
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </Link>
            <Link
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaXTwitter />
            </Link>
            <Link
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
