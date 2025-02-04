'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaDownload, 
  FaArrowRight, 
  FaShieldAlt, 
  FaCog, 
  FaChartLine, 
  FaCheck 
} from 'react-icons/fa'
import { FaServer, FaBolt, FaSync,FaPlay, FaRocket, FaFileDownload } from 'react-icons/fa'

const Product = () => {
  const [activeTab, setActiveTab] = useState('features')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
 const features = {
  features: [
    {
      icon: <FaCog className="text-blue-600 text-xl" />,
      title: "Adaptive Control",
      description: "Dynamic pressure regulation system that adapts to varying conditions"
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-xl" />,
      title: "Enhanced Safety",
      description: "Multiple redundancy layers with real-time monitoring"
    },
    {
      icon: <FaChartLine className="text-blue-600 text-xl" />,
      title: "Performance Analytics",
      description: "Advanced diagnostics and performance tracking"
    },
    // Add more features...
  ],
  specs: [
    {
      icon: <FaServer className="text-blue-600 text-xl" />,
      title: "Pressure Range",
      description: "350-700 bar operational capacity with precise control"
    },
    // Add more specs...
  ],
  safety: [
    {
      icon: <FaShieldAlt className="text-blue-600 text-xl" />,
      title: "ISO Certified",
      description: "Compliant with ISO 26262 and ISO/SAE 21434 standards"
    },
    // Add more safety features...
  ]
}

const systemFeatures = [
    {
      title: "Intelligent Monitoring",
      description: "Real-time tracking of pressure, temperature, and flow rates with AI-powered analytics.",
      icon: <FaChartLine className="text-blue-400 text-xl" />
    },
    {
      title: "Advanced Safety Protocols",
      description: "Multi-layered safety systems with predictive maintenance capabilities.",
      icon: <FaShieldAlt className="text-blue-400 text-xl" />
    },
    {
      title: "Seamless Integration",
      description: "Compatible with existing infrastructure and future hydrogen technologies.",
      icon: <FaCog className="text-blue-400 text-xl" />
    },
    {
      title: "Performance Optimization",
      description: "Self-adjusting algorithms for maximum efficiency and reliability.",
      icon: <FaBolt className="text-blue-400 text-xl" />
    }
  ]

  return (
    <>
 

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with 3D-like elements */}
      <section className="relative overflow-hidden bg-gray-900 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,#0f172a,#1e1b4b)] opacity-90" />
        <div className="absolute inset-0">
          {/* Animated grid pattern */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }} 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-screen py-20 gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 mb-6"
              >
                <span className="animate-pulse mr-2">🔥</span>
                Next Generation Technology
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                <span className="block">Revolutionizing</span>
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Hydrogen Management
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience unprecedented control and efficiency with our advanced FCCU system. 
                Setting new standards in hydrogen-powered vehicle technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                  <FaRocket className="relative z-10" />
                  <span className="relative z-10 font-medium">Get Started</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-indigo-500/30 text-white rounded-full hover:bg-indigo-500/10 transition-colors"
                >
                  <FaPlay className="text-indigo-400" />
                  <span className="font-medium">Watch Demo</span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { value: '350-700', label: 'Bar Pressure Range' },
                  { value: 'ISO 26262', label: 'Safety Certified' },
                  { value: '24/7', label: 'Monitoring' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - 3D Model */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 relative"
            >
              {/* Main Product Image */}
              <div className="relative">
              <motion.div
  animate={{ 
    rotate: [0, 5, -5, 0],
    y: [0, -10, 10, 0]
  }}
  transition={{ 
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse"
  }}
  className="relative z-10 w-full h-[500px] flex items-center justify-center"
>
  {/* Main Hexagonal Structure */}
  <div className="relative">
    {/* Central Hexagon */}
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
        rotate: [0, 360]
      }}
      transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      }}
      className="w-64 h-64 relative"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
          fill="none"
          stroke="url(#gradient-1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <defs>
          <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner Rotating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-40 h-40 relative">
          {[0, 60, 120, 180, 240, 300].map((degree, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-16 origin-bottom"
              style={{
                transform: `rotate(${degree}deg)`,
                transformOrigin: 'center center'
              }}
            >
              <motion.div
                animate={{
                  backgroundColor: ['#4f46e5', '#7c3aed', '#4f46e5'],
                  height: ['60%', '80%', '60%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="w-full h-full rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>

    {/* Orbiting Particles */}
    {[...Array(8)].map((_, index) => (
      <motion.div
        key={index}
        className="absolute top-1/2 left-1/2 w-3 h-3"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }
        }}
        style={{
          transformOrigin: `${150 + index * 20}px center`
        }}
      >
        <div className="w-full h-full rounded-full bg-indigo-500/50 blur-[2px]" />
      </motion.div>
    ))}

    {/* Floating Data Points */}
    {[
      { label: "Pressure", value: "700 bar", top: "-20%", left: "0%" },
      { label: "Efficiency", value: "99.9%", top: "20%", right: "-20%" },
      { label: "Temperature", value: "85°C", bottom: "-10%", left: "10%" }
    ].map((point, index) => (
      <motion.div
        key={index}
        className="absolute bg-white/10 backdrop-blur-md rounded-lg p-3"
        style={{
          top: point.top || 'auto',
          left: point.left || 'auto',
          right: point.right || 'auto',
          bottom: point.bottom || 'auto'
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3
        }}
      >
        <p className="text-xs text-indigo-200">{point.label}</p>
        <p className="text-sm font-bold text-white">{point.value}</p>
      </motion.div>
    ))}

    {/* Connecting Lines */}
    <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
      {[...Array(6)].map((_, index) => (
        <motion.line
          key={index}
          x1="50%"
          y1="50%"
          x2={`${50 + Math.cos(index * Math.PI / 3) * 45}%`}
          y2={`${50 + Math.sin(index * Math.PI / 3) * 45}%`}
          stroke="url(#gradient-1)"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </svg>
  </div>

  {/* Glowing Background Effect */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[100px]" />
  </div>
</motion.div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full"
              >
                <span className="text-indigo-300">Advanced Sensors</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full"
              >
                <span className="text-indigo-300">Real-time Monitoring</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="bg-white rounded-lg p-4">
            {/* Add your video player component here */}
            <p className="text-gray-900">Video Demo Content</p>
          </div>
        </motion.div>
      )}
    </section>

      {/* Interactive Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-6"
            >
              Advanced Capabilities
            </motion.h2>
            <div className="flex gap-4 bg-gray-100 p-2 rounded-full">
              {['features', 'specs', 'safety'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === tab 
                      ? 'bg-white shadow-md text-blue-600' 
                      : 'text-gray-600'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features[activeTab].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Visualization Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 text-white overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        System Architecture
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Experience our cutting-edge system design that sets new standards in hydrogen management
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-12 gap-8 items-center">
      {/* Left Side - Interactive Features */}
      <div className="lg:col-span-5 space-y-6">
        {systemFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 backdrop-blur-sm border border-indigo-800/50 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5"
                >
                  <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </motion.div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-sm" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Right Side - Interactive Diagram */}
      <div className="lg:col-span-7 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Interactive System Diagram */}
          <div className="relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-md border border-indigo-800/50">
            <div className="aspect-square relative">
              {/* Central Hub */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl" />
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Connection Points */}
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute w-4 h-4"
                  style={{
                    top: `${50 + 40 * Math.sin(angle * Math.PI / 180)}%`,
                    left: `${50 + 40 * Math.cos(angle * Math.PI / 180)}%`,
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="w-full h-full bg-blue-400 rounded-full"
                  />
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 40 * Math.cos(angle * Math.PI / 180)}%`}
                    y2={`${50 + 40 * Math.sin(angle * Math.PI / 180)}%`}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Data Points */}
            {['Pressure', 'Temperature', 'Flow Rate', 'Safety'].map((label, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: `${20 + index * 20}%`,
                  right: '10%',
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="bg-indigo-900/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-blue-400">{label}</p>
                  <p className="text-white font-mono">
                    {Math.floor(Math.random() * 1000)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Fleet?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the future of sustainable transportation with our advanced FCCU solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Product