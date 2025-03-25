import { motion } from 'framer-motion';
import React from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  keywords: string;
  color: string;
}

interface Props {
  services: Service[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of each service card
      delayChildren: 0.3, // Delay before the children animations start
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Services: React.FC<Props> = ({ services }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={containerVariants}      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          variants={itemVariants}
        //   className="overflow-hidden" // Add overflow-hidden to the card container
        >
          <ServiceCard service={service} id={`service-${service.id}`} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Services;
