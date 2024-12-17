import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import '../assets/styles/FAQs.css'

const faqs = [
  {
    question: 'What is GymInfluencer ?',
    answer:
      'GymInfluencer is a platform that provides personalized workout plans, diet plans, and tracking tools to help you achieve your fitness goals effortlessly.'
  },
  {
    question: 'How do I get started ?',
    answer:
      'To get started, simply click the "Get Started" button in the navbar and create an account. You can then explore personalized plans, track your progress, and more!'
  },
  {
    question: 'Is there a mobile app ?',
    answer:
      'Currently, GymInfluencer is accessible via web but we are working on a mobile app that will be available soon for download on both iOS and Android platforms.'
  },
  {
    question: 'Can I cancel my subscription ?',
    answer:
      'Yes, you can cancel your subscription at any time from your account settings. Please contact support if you need assistance.'
  },
  {
    question: 'How does the calorie calculation work ?',
    answer:
      'Our calorie calculator uses your personal metrics and activity level to estimate your daily calorie needs. Adjustments can be made based on your progress and goals.'
  }
]

const FAQs = () => {
  const [openedIndex, setOpenedIndex] = useState(null)

  const toggle = index => {
    setOpenedIndex(openedIndex === index ? null : index)
  }

  return (
    <div id='faqs' className='faqs-container'>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className='faq-item'>
          <div className='faq-question' onClick={() => toggle(index)}>
            <h3>{faq.question}</h3>
          </div>
          <Collapse isOpened={openedIndex === index}>
            <div className='faq-answer'>
              <p>{faq.answer}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  )
}

export default FAQs
