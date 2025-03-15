import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    keywords: string;
  };
  id: string;
}


const ServiceCard: React.FC<Props> = ({ service, id }) => {
  return (
    <motion.div
      id={id}
      className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl transition-all duration-300"
      viewport={{ once: true }} // Only animate once when in viewport
    >
      <div className="flex items-center mb-4">
        <i className="fa-solid fa-rocket text-2xl mr-3" style={{ color: '#DC3544' }}></i>
        <h3 className="text-xl  font-bold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>    </motion.div>
  );
};

export default ServiceCard;