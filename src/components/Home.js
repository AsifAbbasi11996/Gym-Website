import React from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/Home.css'
import homeImg from '../assets/images/home-img.jpg'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const Home = () => {
  return (
    <div className='home-container'>
      {/* Animated Background */}
      <div className='background-overlay' />

      {/* Animated Images Div */}
      <div className='scrolling-images'>
        <motion.div
          className='scroll-wrapper'
          animate={{ y: ['0%', '-100%'] }}
          transition={{
            duration: 10, // Adjust this for speed
            ease: 'linear',
            repeat: Infinity
          }}
        >
          <img src={img1} alt='Image 1' loading='lazy' />
          <img src={img3} alt='Image 3' loading='lazy' />
          <img src={img2} alt='Image 2' loading='lazy' />
        </motion.div>
      </div>

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

        {/* Hero Image */}
        <motion.div
          className='hero-image'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={homeImg} alt='Gym Influencer' loading='lazy' />
        </motion.div>
      </div>

      {/* More Animated Images */}
      <div className='scrolling-images'>
        <motion.div
          className='scroll-wrapper'
          animate={{ y: ['-100%', '0%'] }}
          transition={{
            duration: 10, // Adjust this for speed
            ease: 'linear',
            repeat: Infinity
          }}
        >
          <img src={img3} alt='Image 3' loading='lazy' />
          <img src={img4} alt='Image 4' loading='lazy' />
          <img src={img1} alt='Image 1' loading='lazy' />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
