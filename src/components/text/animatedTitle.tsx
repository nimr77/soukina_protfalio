
import { motion } from 'framer-motion';


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

export default function AnimatedTitle({
  title,
}: {
  title: string;
}) {
  return (
  <motion.h2
          className="text-5xl text-gray-700 font-bold text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            {title}
  </motion.h2>
  );
}