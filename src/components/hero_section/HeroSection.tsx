import { motion } from 'framer-motion';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GhostText } from '../GhostText/ghost-text';

interface HeroSection {
  title: string;
  description: string;
  button: {
    label: string;
    link: string;
  };
  imagePath: string;
}

interface Props {
  heroSection: HeroSection;
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // Start from below the fold
  visible: {
    opacity: 1,
    y: 0, // End at its original position
    transition: {
      duration: 1, // Smooth transition duration
      ease: "easeOut", // Smooth easing effect
      staggerChildren: 0.3, // Stagger the child elements for a dynamic feel
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 }, // Start from below
  visible: {
    opacity: 1,
    y: 0, // Move to its final position
    transition: {
      duration: 0.8, // Smooth animation duration
      ease: "easeOut", // Smooth easing
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 }, // Start below
  visible: {
    opacity: 1,
    y: 0, // End at the original button position
    transition: {
      duration: 0.8, // Same duration for smoothness
      ease: "easeOut", // Smooth easing effect
    },
  },
  
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const HeroSection: React.FC<Props> = ({ heroSection }) => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-start bg-cover bg-center"
      // style={{ backgroundImage: `url('${heroSection.imagePath}')` }}
    >
      <img
              src={heroSection.imagePath}
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
      
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <motion.div
        className="container text-left relative z-10 px-8 md:px-60 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          variants={textVariants}
        >
        {heroSection.title}
        </motion.h1> */}

        <GhostText text={heroSection.title} className="text-xl md:text-xl font-bold text-white mb-4 leading-tigh text-start"           duration={10}
          wordDelay={0.1}
          blurRadius={100}
          fontSize={300}
          sequential={true}/>
        <motion.p
          className="text-lg md:text-xl text-white mb-8 leading-relaxed"
          variants={textVariants}
        >
          <ReactMarkdown>{heroSection.description}</ReactMarkdown>        
          </motion.p>
        <motion.a
          href={heroSection.button.link}
          className="inline-block bg-primary bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg "
          variants={buttonVariants}
        >
          {heroSection.button.label || "Schedule a Free Call Today!"}
        </motion.a>
      </motion.div>
    </section>
  );
};
export default HeroSection;
