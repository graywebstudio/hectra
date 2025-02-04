'use client'

import { motion } from 'framer-motion'
import { 
  FaLeaf, 
  FaLightbulb, 
  FaHandshake, 
  FaStar,
  FaArrowRight ,
  FaBolt,
  FaGlobe
} from 'react-icons/fa'

const Aboutus = () => {
    
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <StorySection />
      <ImpactSection />
      <CtaSection />
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <img
          src="./Images/hec12.jpg"
          alt="Hydrogen Technology"
          className="w-full h-full  object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pioneering the Future of Hydrogen Technology
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            At Hectra Engineering LLP, we're dedicated to revolutionizing sustainable 
            energy with cutting-edge control solutions and unparalleled expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 group"
          >
            Learn More About Our Vision
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Hectra Engineering LLP, our mission is to empower industries worldwide 
              by delivering innovative hydrogen management systems that prioritize 
              efficiency, reliability, and safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a global leader in hydrogen-powered technologies by combining 
              advanced engineering, innovation, and environmental stewardship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ValuesSection = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-3xl text-blue-600" />,
      title: "Innovation",
      description: "Constantly pushing the boundaries of technology."
    },
    {
      icon: <FaLeaf className="text-3xl text-blue-600" />,
      title: "Sustainability",
      description: "Building solutions that preserve our planet."
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: "Integrity",
      description: "Operating with transparency and trust."
    },
    {
      icon: <FaStar className="text-3xl text-blue-600" />,
      title: "Excellence",
      description: "Delivering superior quality in every project."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">What Drives Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core values shape everything we do at Hectra Engineering LLP.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ... Continue with other sections
const StorySection = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              The Hectra Journey
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed">
                Founded with a passion for engineering excellence, Hectra Engineering LLP 
                has grown into a trusted name in hydrogen technology. From our first 
                hydrogen management solution to our latest innovations in FCCU, we've 
                always been committed to advancing sustainable energy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
  const ImpactSection = () => {
    const impactStats = [
        {
          value: "50K+",
          label: "Tons of CO2 Emissions Reduced",
          icon: <FaLeaf className="text-green-400 text-4xl mb-4" />
        },
        {
          value: "100+",
          label: "Clean Energy Projects Delivered",
          icon: <FaBolt className="text-yellow-400 text-4xl mb-4" />
        },
        {
          value: "30+",
          label: "Countries Impacted",
          icon: <FaGlobe className="text-blue-400 text-4xl mb-4" />
        }
      ]
    
    return (
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Commitment to a Greener Tomorrow
            </h2>
            <p className="text-xl text-blue-200">
              Making a measurable impact on the environment
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  const CtaSection = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the sustainable energy revolution
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium"
              >
                Explore Our Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
export default Aboutus