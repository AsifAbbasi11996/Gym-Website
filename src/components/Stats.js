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
      <h2>Our Achievements</h2>
      <div className='stats-grid'>
        <motion.div
          className='stat-card'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            {hasCounted && <CountUp end={458} duration={2} />}+
          </h3>
          <p>Happy Users</p>
        </motion.div>
        <motion.div
          className='stat-card'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>
            {hasCounted && <CountUp end={293} duration={2} />}+
          </h3>
          <p>Transformations</p>
        </motion.div>
      </div>

      <div className='cta-section'>
        <h2>Ready to Begin Your Fitness Journey ?</h2>
        <motion.a
          href='#get-started'
          className='btn btn-primary'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Join Now
        </motion.a>
      </div>
    </div>
  )
}

export default Stats
