import React from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/Home.css'

const Home = () => {
  return (
    <div id='home' className='home-container'>
      {/* Animated Background */}
      <div className='background-overlay' />

      {/* Hero Section */}
      <div className='hero'>
        <motion.div
          className='hero-text'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Welcome to <span>GymInfluencer</span>
          </h1>
          <p>
            Transform your body, mind, and spirit with futuristic training plans
            and personalized diet plans.
          </p>
          <motion.a
            href='#get-started'
            className='btn btn-primary'
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(255, 75, 75, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
