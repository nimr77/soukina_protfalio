import { motion } from 'framer-motion';
import React from 'react';
import AnimatedTitle from '../text/animatedTitle';

interface Qualification {
  text: string;
  icon: string;
}

interface MyJourneySection {
  title: string;
  description: string;
  qualifications: {
    column1: Qualification[];
    column2: Qualification[];
  };
}

interface Props {
  myJourneySection: MyJourneySection;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 1.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MyJourney: React.FC<Props> = ({ myJourneySection }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 items-start flex flex-col">
  

              <AnimatedTitle title={myJourneySection.title} >

              </AnimatedTitle>  
        
        <motion.p
          className="text-gray-700  mb-12 leading-relaxed text-lg"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {myJourneySection.description}
        </motion.p>

        {/* <GhostText
        text={myJourneySection.description}
        className="text-gray-700  mb-12 leading-relaxed text-lg"
          duration={10}
          wordDelay={0.1}
          blurRadius={100}
          fontSize={300}
          sequential={true}
        ></GhostText> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {myJourneySection.qualifications.column1.map((qualification, index) => (
              <motion.div
                key={index}
                className="flex items-center text-lg"
                variants={itemVariants}
              >
                <i className="fas fa-check-circle text-primary mr-2" style={{ color: "#DC3544" }} />
                <span className="text-gray-800">{qualification.text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {myJourneySection.qualifications.column2.map((qualification, index) => (
              <motion.div
                key={index}
                className="flex items-center text-lg"
                variants={itemVariants}
              >
                <i className="fas fa-check-circle text-primary mr-2" style={{ color: "#DC3544" }} />
                <span className="text-gray-800">{qualification.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;