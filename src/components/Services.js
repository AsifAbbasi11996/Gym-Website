import React from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/Services.css'

// Images
import effortlessLogging from '../assets/images/effortless.jpg'
import repCounting from '../assets/images/repcounting.jpg'
import calorieCalculation from '../assets/images/calorie.jpg'
import workoutPlan from '../assets/images/workoutplan.jpg'
import dietPlan from '../assets/images/dietplan.jpg'
import tracking from '../assets/images/tracking.jpg'

const services = [
  {
    title: 'Effortless Logging',
    description:
      'Log your workouts and progress effortlessly with advanced tracking tools.',
    image: effortlessLogging
  },
  {
    title: 'Accurate Rep Counting',
    description: 'Track your reps with precision using AI-driven technology.',
    image: repCounting
  },
  {
    title: 'Calorie Calculation Made Easy',
    description: 'Easily calculate your daily calorie intake and burn rate.',
    image: calorieCalculation
  },
  {
    title: 'Personalized Workout Plan',
    description:
      'Get a customized workout plan tailored to your fitness goals.',
    image: workoutPlan
  },
  {
    title: 'Personalized Diet Plan',
    description:
      'Enjoy a diet plan designed specifically for your nutritional needs.',
    image: dietPlan
  },
  {
    title: 'Progress Tracking',
    description:
      'Monitor your growth with interactive charts and visual analytics for a futuristic experience.',
    image: tracking
  }
]

const Services = () => {
  return (
    <div id='features' className='services-container'>
      <motion.div
        className='services-header'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>What We Provide</h1>
        <p>
          Explore the features that make your fitness journey seamless and
          effective.
        </p>
      </motion.div>
      <div className='services-grid'>
        {services.map((service, index) => (
          <motion.div
            className='service-card'
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className='service-image' loading='lazy'
            />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
