import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "assets/images/iklogo.svg";
import "components/pages/home/home.css";
import "fonts/Satoshi-Black.ttf"

const Home = () => {
  const fullText = "Hi, I'm Ishan Khurram";
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((currentText) => {
        if (currentText.length < fullText.length) {
          return fullText.substring(0, currentText.length + 1);
        }
        clearInterval(interval);
        return currentText;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="home">
      <div className="logo">
        <motion.img
          id="logo"
          src={logo}
          alt="Logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
      <div className="title1">
        <div className="typing-animation">
          {text}
          <span className="blinking-cursor">|</span>
        </div>
      </div>
      <div className="title2">
        <div className="typing-animation">
          {text}
          <span className="blinking-cursor">|</span>
        </div>
      </div>
      <div className="title3">
        <div className="typing-animation">
          {text}
          <span className="blinking-cursor">|</span>
        </div>
      </div>
      <div className="intro">
        <p>I am an aspiring frontend developer with a passion for turning visions into a reality.</p>
      </div>
    </div>
  );
};

export default Home;
