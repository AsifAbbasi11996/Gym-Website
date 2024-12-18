import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../assets/styles/ContactUs.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Simulating form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus('Thank you for reaching out! We will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <motion.div id='contact'
      className='contact-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='background-overlay' />
      
      <motion.h1
        className='contact-title'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className='contact-description'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We're here to help! Drop us a message and we'll respond as soon as
        possible.
      </motion.p>

      <motion.form
        className='contact-form'
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <motion.div className='form-group'>
          <label htmlFor='name'>Name</label>
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: '#00FFAB' }}
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className='form-group'>
          <label htmlFor='email'>Email</label>
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: '#00FFAB' }}
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className='form-group'>
          <label htmlFor='message'>Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: '#00FFAB' }}
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></motion.textarea>
        </motion.div>

        <motion.button
          type='submit'
          className='btn btn-primary'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </motion.form>

      {formStatus && (
        <motion.p
          className='form-status'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {formStatus}
        </motion.p>
      )}
    </motion.div>
  )
}

export default ContactUs
