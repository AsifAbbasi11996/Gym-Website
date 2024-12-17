import React from 'react'
import Home from '../components/Home'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import FAQs from '../components/FAQs'
import ContactUs from '../components/ContactUs'
import DietPlans from '../components/DietPlans'
import WorkoutPlans from '../components/WorkoutPlans'

const Homepage = () => {
  return (
    <>
      <Home />
      <Services />
      <DietPlans />
      <Testimonials />
      <WorkoutPlans />
      <Stats />
      <FAQs />
      <ContactUs />
    </>
  )
}

export default Homepage
