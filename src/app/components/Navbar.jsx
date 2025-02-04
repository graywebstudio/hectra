"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items array
  const menuItems = [
   
    { name: "About", path: "/about" },
    { name: "Products", path: "/product" },
    
    { name: "Contact", path: "/contactus" },
  ];

  // Framer Motion variants
  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-6">
        <nav className="flex items-center justify-between h-8 sm:h-12">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-xl sm:text-2xl font-extrabold ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              HECTRA
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-2">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                onHoverStart={() => setActiveItem(item.name)}
                onHoverEnd={() => setActiveItem(null)}
                className="relative"
              >
                <Link href={item.path}>
                  <span
                    className={`px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
                {activeItem === item.name && (
                  <motion.div
                    layoutId="bubble"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isScrolled ? "bg-blue-50" : "bg-white/10"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
          
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                }`}
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                }`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                }`}
              />
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          className="lg:hidden overflow-hidden"
        >
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-b-2xl shadow-lg">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block"
              >
                <Link
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
           
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;