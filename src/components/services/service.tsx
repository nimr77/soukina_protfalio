import React from 'react';
import SpotlightCard from '../SpotlightCard/SpotlightCard';

interface Props {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    keywords: string;
    color: string;
  };
  id: string;
}


const ServiceCard: React.FC<Props> = ({ service, id }) => {
  return (
  //   <motion.div
  //     id={id}
  //     className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 ease-in"
  //     viewport={{ once: true }}
  //   >
  //     <div className="flex items-center mb-4">
  //       <i className={`fa-solid ${service.icon} text-2xl mr-3`} style={{ color: '#DC3544' }}></i>
  //       <h3 className="text-xl  font-bold text-gray-800">{service.title}</h3>
  //     </div>
  //     <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
  //   </motion.div>
  // );
    <SpotlightCard
    className=' bg-white rounded-xl border border-gray-200 p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 ease-in'
           multiSpotlight
        glowEffect
        gradientColor={service.color}
    children = {
      <div className="">
        <div className="flex items-center mb-4">
          <i className={`fa-solid ${service.icon} text-2xl mr-3`} style={{ color: '#DC3544' }}></i>
          <h3 className="text-xl  font-bold text-gray-800">{service.title}</h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
      </div>
    }
    
    ></SpotlightCard>
  );
};
export default ServiceCard;