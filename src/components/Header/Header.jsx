import React from "react";
import images from "../../constants/images";
import "./Header.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};
const childVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const Header = () => {
  return (
    <motion.div 
    variants={sectionVariants}
    initial="hidden"
    animate="show"
    className="app-header" id="home">
      <div

        className="header-info"
      >
        <motion.div
          // variants={childVariants}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
          className="sub-heading"
        >
          Jalebi – A Sweet Legacy
          <img src={images.spoon} alt="" />
        </motion.div>
        <motion.h1
          // variants={childVariants}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="headline"
        >
          The Key to Sweet Bliss
        </motion.h1>
        <motion.p
          // variants={childVariants}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="heading-p"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, non
          repudiandae saepe voluptatibus, voluptatem enim ab labore mollitia
          doloremque architecto, voluptas pariatur! At, laborum dolorem ea
          tempore nihil aliquam
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4,bounceDamping:1}}

          whileTap={{scale:0.9}}
          whileHover={{scale:1.1}}
          className="custom__button"
        >
          Explore
        </motion.button>
      </div>
      <motion.div 
       initial={{ opacity: 0, x: 100 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      className="header-img">
        <img src={images.headImg} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Header;
