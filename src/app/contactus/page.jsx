'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useState } from 'react'

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleWhatsApp = () => {
    const whatsappNumber = '+1234567890'
    const message = encodeURIComponent('Hello! I would like to connect with you.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleEmail = () => {
    const email = 'contact@yourdomain.com'
    window.location.href = `mailto:${email}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] lg:h-[50vh] w-full">
        <div className="absolute inset-0">
          <img 
            src="/Images/hec11.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h1>
            <p className="text-xl md:text-2xl">We'd love to hear from you</p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to work together? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
                onClick={handleWhatsApp}
              >
                <div className="h-12 w-12 flex items-center justify-center bg-green-100 rounded-full">
                  <FaWhatsapp className="text-green-500 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <p className="text-gray-600">Chat with us anytime</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
                onClick={handleEmail}
              >
                <div className="h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <FaEnvelope className="text-blue-500 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">contact@yourdomain.com</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="h-12 w-12 flex items-center justify-center bg-purple-100 rounded-full">
                  <FaPhone className="text-purple-500 text-2xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contactus