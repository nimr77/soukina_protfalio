import { motion, useInView } from 'framer-motion';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ApproachSectionProps {
  description: string;
}

const ApproachSectionBody: React.FC<ApproachSectionProps> = ({ description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="mx-auto text-left py-12"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } } : { opacity: 0, x: -30 }}
    >
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <motion.p
              style={{ fontSize: "1.2rem", lineHeight: "1.75", margin: 0, color: "#000" }} // Ensuring text is black
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {props.children}
            </motion.p>
          ),
          strong: ({ node, ...props }) => (
            <span style={{ fontWeight: "bold", color: "#000" }} {...props} /> // Ensuring strong text is black
          ),
          em: ({ node, ...props }) => (
            <span style={{ fontStyle: "italic", color: "#000" }} {...props} /> // Ensuring italic text is black
          ),
        }}
      >
        {description}
      </ReactMarkdown>
    </motion.div>
  );
};

export default ApproachSectionBody;
