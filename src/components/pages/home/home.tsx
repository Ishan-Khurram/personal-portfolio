import React from 'react';
import { motion } from "framer-motion"
import logo from 'assets/images/iklogo.svg'
import 'components/pages/home/home.css'

const Home = () => {


  return (
    <div className="home">
      {/* Logo svg */}
      <motion.img id="logo" src={logo} alt="Logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag // Optional: enable dragging
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }} // Optional: constrains dragging
      />
    </div>
  );
};

export default Home;