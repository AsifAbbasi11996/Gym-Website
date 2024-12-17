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
      <div className='images'>
        <img src={img1} />
        <img src={img2} />
      </div>
      <div className='hero'>
        <motion.div
          className='hero-text'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
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

        {/* Animated Shapes */}
        {/* <motion.div
        className="animated-shape shape-one"
        initial={{ scale: 0 }}
        animate={{ scale: [0.8, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        ></motion.div>
        <motion.div
        className="animated-shape shape-two"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: [100, 0, 50] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        ></motion.div> */}
        {/* <motion.div
        className="animated-shape shape-three"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: [-100, 50, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        ></motion.div> */}

        {/* Image Section */}
        <motion.div
          className='hero-image'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={homeImg} alt='Gym Influencer' />
        </motion.div>
      </div>

      <div className='images'>
        <img src={img3} />
        <img src={img4} />
      </div>
    </div>
  )
}

export default Home
