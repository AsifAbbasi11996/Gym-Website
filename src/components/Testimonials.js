import React from 'react';
import { motion } from 'framer-motion'
import '../assets/styles/Testimonials.css';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'GymInfluencer helped me achieve my fitness goals effortlessly!',
    image: require('../assets/images/john.jpg'),
  },
  {
    name: 'Jane Smith',
    feedback: 'The personalized plans are a game changer!',
    image: require('../assets/images/jane.jpg'),
  },
  {
    name: 'Mike Johnson',
    feedback: 'The progress tracking tools are futuristic and highly effective!',
    image: require('../assets/images/mike.jpg'),
  },
];

const Testimonials = () => (
  <div className="testimonials-container">
    <h2>What Our Users Say</h2>
    <div className="testimonials-grid">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="testimonial-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={testimonial.image} alt={testimonial.name} />
          <p>"{testimonial.feedback}"</p>
          <h3>- {testimonial.name}</h3>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Testimonials;
