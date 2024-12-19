import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../assets/styles/DietPlans.css';

// Images
import veganDiet from '../assets/images/vegandiet.jpg';
import ketoDiet from '../assets/images/ketodiet.jpeg';
import balancedDiet from '../assets/images/balanceddiet.jpg';
import lowCarbDiet from '../assets/images/lowcarbdiet.webp';
import paleoDiet from '../assets/images/paleodiet.jpeg';
import mediterraneanDiet from '../assets/images/mediterraneandiet.jpg';

const dietPlans = [
  {
    title: 'Vegan Diet',
    description:
      'A plant-based diet that focuses on fruits, vegetables, grains, and legumes.',
    image: veganDiet,
  },
  {
    title: 'Keto Diet',
    description:
      'A high-fat, low-carb diet designed to put your body in a state of ketosis.',
    image: ketoDiet,
  },
  {
    title: 'Balanced Diet',
    description:
      'A well-rounded diet providing all essential nutrients for a healthy lifestyle.',
    image: balancedDiet,
  },
  {
    title: 'Low-Carb Diet',
    description:
      'A diet focused on reducing carbohydrate intake to aid weight loss and control blood sugar.',
    image: lowCarbDiet,
  },
  {
    title: 'Paleo Diet',
    description:
      'A diet inspired by what our ancestors ate: whole foods, lean meats, and nuts.',
    image: paleoDiet,
  },
  {
    title: 'Mediterranean Diet',
    description:
      'A heart-healthy diet emphasizing fruits, vegetables, fish, and olive oil.',
    image: mediterraneanDiet,
  },
];

const DietPlans = () => {
  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation for the carousel with infinite loop
    const carousel = document.querySelector('.diet-plans-carousel');
    gsap.to(carousel, {
      x: '-200%',
      duration: 20,
      repeat: -1, // Infinite loop
      ease: 'linear', // Smooth scrolling effect
      scrollTrigger: {
        trigger: '.diet-plans-carousel',
        start: 'top top',
        end: '+=500%', // Trigger when the carousel has scrolled fully out of view
        scrub: 1, // Smooth scroll animation
        markers: false,
      },
    });
  }, []);

  // Function to handle touch events for manual scrolling
  const handleTouchStart = (e) => {
    e.preventDefault();
    let touchStart = e.touches[0].clientX;

    const handleTouchMove = (moveEvent) => {
      let touchMove = moveEvent.touches[0].clientX;
      let moveDistance = touchStart - touchMove;
      const carousel = document.querySelector('.diet-plans-carousel');
      carousel.scrollBy({ left: moveDistance, behavior: 'auto' });
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div id="diet-plans" className="diet-plans-container">
      <div className="background-overlay" />
      <motion.div
        className="diet-plans-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Explore Our Diet Plans</h1>
        <p>Choose the perfect diet to fuel your fitness journey and health goals.</p>
      </motion.div>
      <div
        className="diet-plans-carousel"
        onTouchStart={handleTouchStart}
      >
        {dietPlans.map((plan, index) => (
          <motion.div
            className="diet-plan-card"
            key={index}
            initial={{ x: -50 }}
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
