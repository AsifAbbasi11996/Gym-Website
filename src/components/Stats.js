import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import '../assets/styles/Stats.css'

const Stats = () => {
  const statsRef = useRef(null)
  const inView = useInView(statsRef, { once: true })
  const [hasCounted, setHasCounted] = useState(false)

  useEffect(() => {
    if (inView && !hasCounted) {
      setHasCounted(true)
    }
  }, [inView, hasCounted])

  return (
    <div className='stats-container' ref={statsRef}>
      <div className='background-overlay' />
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Achievements
      </motion.h2>
      <div className='stats-grid'>
        <motion.div
          className='stat-card'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{hasCounted && <CountUp end={458} duration={2} />}+</h3>
          <p
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Happy Users
          </p>
        </motion.div>
        <motion.div
          className='stat-card'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{hasCounted && <CountUp end={293} duration={2} />}+</h3>
          <p>Transformations</p>
        </motion.div>
      </div>

      <div className='cta-section'>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Begin Your Fitness Journey ?
        </motion.h2>
        <motion.a
          href='#get-started'
          className='btn btn-primary'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join Now
        </motion.a>
      </div>
    </div>
  )
}

export default Stats
