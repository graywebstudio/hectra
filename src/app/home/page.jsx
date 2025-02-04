"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaAtom, FaCog, FaShieldAlt, FaTemperatureLow } from "react-icons/fa";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Revolutionizing Hydrogen Technology - Hectra Engineering</title>
        <meta
          name="description"
          content="Delivering unparalleled performance, safety, and efficiency in hydrogen-powered systems. Explore FCCU by Hectra Engineering LLP for advanced hydrogen control solutions."
        />
        <meta
          name="keywords"
          content="FCCU, Hydrogen Technology, Hectra Engineering, Hydrogen Control Systems, Advanced Control Algorithms, Real-Time Monitoring, Hydrogen Efficiency"
        />
        <meta name="author" content="Hectra Engineering LLP" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Revolutionizing Hydrogen Technology" />
        <meta
          property="og:description"
          content="Delivering unparalleled performance, safety, and efficiency in hydrogen-powered systems."
        />
        <meta
          property="og:image"
          content="/Images/hec2.jpg" 
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Revolutionizing Hydrogen Technology"
        />
        <meta
          property="twitter:description"
          content="Delivering unparalleled performance, safety, and efficiency in hydrogen-powered systems."
        />
        <meta
          property="twitter:image"
          content="/Images/hec2.jpg" 
        />
      </Head>
    <div className=" text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  <Image
    src="/Images/hec2.jpg" 
    alt="Background"
    fill
    priority
    className="object-cover object-center"
  />
  
  {/* Overlay with gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
  
  {/* Animated overlay */}
  <motion.div
    className="absolute inset-0 -z-10"
    animate={{
      background: [
        "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
        "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
      ],
    }}
    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
  />
  
  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        Revolutionizing Hydrogen Technology
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
        Delivering unparalleled performance, safety, and efficiency in hydrogen-powered systems.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors shadow-lg text-white"
        >
          Learn More
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-white rounded-full hover:bg-white/10 transition-colors text-white"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  </div>
      </section>

      {/* About Section */}
      <section className="py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
      className="text-center mb-16"
    >
      <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        What is FCCU?
      </h2>
    </motion.div>

    <div className="grid lg:grid-cols-12 gap-8 items-center">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 relative"
      >
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hec1.jpg"
            alt="FCCU Diagram"
            fill
            className="object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
        </div>
        
        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl"
        >
          <div className="flex gap-8">
            <div>
              <h4 className="text-4xl font-bold text-blue-500">99%</h4>
              <p className="text-gray-600">Efficiency</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-blue-500">24/7</h4>
              <p className="text-gray-600">Monitoring</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 space-y-6"
      >
        <div className="space-y-6">
          <p className="text-xl leading-relaxed text-gray-600">
            FCCU by Hectra Engineering LLP is a cutting-edge control solution for 
            hydrogen-powered applications, designed to ensure optimal performance, 
            reliability, and safety.
          </p>
          
          {/* Feature List */}
          <div className="space-y-4">
            {[
              "Advanced Control Algorithms",
              "Real-time Performance Monitoring",
              "Intelligent Safety Systems",
              "Optimized Energy Management"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pt-6"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
 
  <div className="absolute inset-0 -z-10 opacity-30">
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
    <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
    <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
  </div>

  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        Why Choose FCCU?
      </h2>
      <p className="text-gray-600 text-lg">
        Experience cutting-edge technology with our comprehensive control solutions
      </p>
    </motion.div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: FaAtom,
          title: "Anode Subsystem Control",
          desc: "Efficient hydrogen management with real-time optimization",
          color: "from-blue-500 to-blue-600",
          delay: 0,
        },
        {
          icon: FaCog,
          title: "Cathode Subsystem Control",
          desc: "Optimized oxygen delivery for maximum performance",
          color: "from-purple-500 to-blue-500",
          delay: 0.2,
        },
        {
          icon: FaTemperatureLow,
          title: "Cooling Subsystem Control",
          desc: "Advanced thermal management for optimal efficiency",
          color: "from-blue-500 to-cyan-500",
          delay: 0.4,
        },
        {
          icon: FaShieldAlt,
          title: "Safety & Diagnostics",
          desc: "Comprehensive real-time monitoring and protection",
          color: "from-cyan-500 to-blue-500",
          delay: 0.6,
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: feature.delay, duration: 0.5 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group relative"
        >
          {/* Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-6 
              text-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="text-2xl" />
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {feature.desc}
            </p>

       
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Additional Stats Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 grid md:grid-cols-3 gap-8 text-center"
    >
      {[
        { number: "99%", label: "Efficiency Rate" },
        { number: "24/7", label: "Monitoring" },
        { number: "100+", label: "Installations" },
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
          <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {stat.number}
          </h4>
          <p className="text-gray-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <span className="text-blue-500 font-semibold mb-4 block">
        Sustainable Solutions
      </span>
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Built for a Greener Future
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Our FCCU is designed for a variety of hydrogen-based applications, powering 
        the next generation of sustainable technology.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
      {[
        {
          title: 'Automotive Solutions',
          image: "hec8",
          description: 'Powering the future of clean transportation',
          icon: '🚗',
          color: 'from-blue-500 to-blue-600'
        },
        {
          title: 'Industrial Systems',
          image: 'hec9',
          description: 'Transforming industrial power generation',
          icon: '🏭',
          color: 'from-green-500 to-green-600'
        },
        {
          title: 'Renewable Energy',
          image: 'hec10',
          description: 'Advancing sustainable energy solutions',
          icon: '🌱',
          color: 'from-teal-500 to-teal-600'
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="group relative"
        >
          {/* Card Container */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
         
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={`/images/${item.image}.jpg`}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
      
          
              
              {/* Icon Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <span className="text-2xl">{item.icon}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
              
              {/* Learn More Link */}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-4 inline-flex items-center gap-2 text-blue-500 font-medium"
              >
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom Stats */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 grid md:grid-cols-3 gap-8"
    >
      {[
        { number: "50+", label: "Green Projects" },
        { number: "30%", label: "Carbon Reduction" },
        { number: "100%", label: "Renewable Focus" },
      ].map((stat, index) => (
        <div 
          key={index}
          className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            {stat.number}
          </div>
          <p className="text-gray-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </motion.div>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full 
        hover:shadow-lg transition-all duration-300"
      >
        Explore All Solutions
      </motion.button>
    </motion.div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">

  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
    <motion.div
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
        opacity: [0.3, 0.1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/images/grid-pattern.png')",
        backgroundSize: "30px 30px",
      }}
    />
  </div>

  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
    className="container mx-auto px-4"
  >
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl relative">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
      <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />

      {/* Content */}
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-blue-500 font-semibold">Take the Next Step</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Ready to Revolutionize Your
            <br /> Hydrogen-Powered Systems?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join the future of sustainable energy. Let's discuss how our FCCU can transform your operations.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full 
            hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 
            flex items-center justify-center gap-2 group"
          >
            Contact Us
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full 
            hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Request a Demo
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-100"
        >
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>
      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 Hectra Engineering LLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default HomePage;