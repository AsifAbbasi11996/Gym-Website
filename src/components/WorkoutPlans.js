import React from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/WorkoutPlans.css'

// Images
import strengthTraining from '../assets/images/workoutplan.jpg'
import cardio from '../assets/images/cardio.jpg'
import yoga from '../assets/images/yoga.jpg'
import pilates from '../assets/images/pilates.jpg'
import HIIT from '../assets/images/hiit.jpg'
import stretching from '../assets/images/stretching.webp'

const workoutPlans = [
  {
    title: 'Strength Training',
    description:
      'Build muscle mass and increase strength with resistance exercises.',
    image: strengthTraining
  },
  {
    title: 'Cardio',
    description:
      'Enhance your cardiovascular health with running, cycling, or swimming.',
    image: cardio
  },
  {
    title: 'Yoga',
    description:
      'Improve flexibility, balance, and mindfulness with yoga exercises.',
    image: yoga
  },
  {
    title: 'Pilates',
    description:
      'Strengthen your core and improve posture with pilates exercises.',
    image: pilates
  },
  {
    title: 'HIIT',
    description: 'Boost your metabolism with high-intensity interval training.',
    image: HIIT
  },
  {
    title: 'Stretching',
    description:
      'Maintain flexibility and reduce muscle tension with stretching exercises.',
    image: stretching
  }
]

const WorkoutPlans = () => {
  return (
    <div id='workout-plans' className='workout-plans-container'>
      <div className='background-overlay' />
      <motion.div
        className='workout-plans-header'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Explore Our Workout Plans</h1>
        <p>
          Choose a plan to enhance your fitness routine and achieve your goals.
        </p>
      </motion.div>
      <div className='workout-plans-carousel'>
        {workoutPlans.map((plan, index) => (
          <motion.div
            className='workout-plan-card'
            key={index}
            initial={{ x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className='workout-plan-image-wrapper'>
              <img
                src={plan.image}
                alt={plan.title}
                className='workout-plan-image'
                loading='lazy'
              />
            </div>
            <div className='workout-plan-content'>
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutPlans
