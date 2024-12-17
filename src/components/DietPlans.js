import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/DietPlans.css';

// Images
import veganDiet from '../assets/images/calorie.jpg'
import ketoDiet from '../assets/images/dietplan.jpg'
import balancedDiet from '../assets/images/effortless.jpg'
import lowCarbDiet from '../assets/images/img1.jpg'
import paleoDiet from '../assets/images/repcounting.jpg'
import mediterraneanDiet from '../assets/images/workoutplan.jpg'

const dietPlans = [
  {
    title: 'Vegan Diet',
    description:
      'A plant-based diet that focuses on fruits, vegetables, grains, and legumes.',
    image: veganDiet
  },
  {
    title: 'Keto Diet',
    description:
      'A high-fat, low-carb diet designed to put your body in a state of ketosis.',
    image: ketoDiet
  },
  {
    title: 'Balanced Diet',
    description:
      'A well-rounded diet providing all essential nutrients for a healthy lifestyle.',
    image: balancedDiet
  },
  {
    title: 'Low-Carb Diet',
    description:
      'A diet focused on reducing carbohydrate intake to aid weight loss and control blood sugar.',
    image: lowCarbDiet
  },
  {
    title: 'Paleo Diet',
    description:
      'A diet inspired by what our ancestors ate: whole foods, lean meats, and nuts.',
    image: paleoDiet
  },
  {
    title: 'Mediterranean Diet',
    description:
      'A heart-healthy diet emphasizing fruits, vegetables, fish, and olive oil.',
    image: mediterraneanDiet
  }
];

const DietPlans = () => {
  return (
    <div id="diet-plans" className="diet-plans-container">
      <motion.div
        className="diet-plans-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Explore Our Diet Plans</h1>
        <p>Choose the perfect diet to fuel your fitness journey and health goals.</p>
      </motion.div>
      <div className="diet-plans-carousel">
        {dietPlans.map((plan, index) => (
          <motion.div
            className="diet-plan-card"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 10, delay: index * 0.2 }}
          >
            <div className="diet-plan-image-wrapper">
              <img src={plan.image} alt={plan.title} className="diet-plan-image" loading="lazy" />
            </div>
            <div className="diet-plan-content">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DietPlans;
