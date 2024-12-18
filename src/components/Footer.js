import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import '../assets/styles/Footer.css'
import logo from '../assets/images/gymlogo.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-logo'>
          <div className='logo'>
            <img src={logo} />
            <h3>GymInfluencer</h3>
          </div>
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
              <a href='#features'>Features</a>
            </li>
            <li>
              <a href='#workout-plans'>Workout Plans</a>
            </li>
            <li>
              <a href='#diet-plans'>Diet Plans</a>
            </li>
            <li>
              <a href='#faqs'>FAQs</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='footer-social'>
          <h3>Follow Us</h3>
          <div className='social-links'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaXTwitter />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
