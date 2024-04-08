import React from 'react';
import { motion } from 'framer-motion';
import "components/navbar/navbar.css"

const Navbar: React.FC = () => {
  // Define the animation for the scrolling effect
  const scrollEffect = {
    scale: 1.05, // Optional: scale up a bit on hover
    transition: {
      repeat: Infinity,
      reverse: Infinity,
      duration: 0.5,
      ease: "linear"
    },
    animate: {
      y: [-10, 10], // Move the text up and down
    }
  };

  return (
    <div className="navbar">
      {["Home", "About", "Portfolio", "Contact"].map((item, index) => (
        <motion.div
          key={index}
          className="nav-item"
          whileHover={scrollEffect}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;