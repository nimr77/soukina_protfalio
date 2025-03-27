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
      className="max-w-screen-md "  // Added responsive padding
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } } : { opacity: 0, x: -30 }}
    >
      {/* Mobile Card (Visible on Small Screens) */}
      <motion.div
        className="md:hidden bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-6"
        style={{color: "#000"}}
      >
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <motion.p
                style={{ fontSize: "1rem", lineHeight: "1.5", margin: 0, color: "#000" }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {props.children}
              </motion.p>
            ),
            strong: ({ node, ...props }) => (
              <span style={{ fontWeight: "bold", color: "#000" }} {...props} />
            ),
            em: ({ node, ...props }) => (
              <span style={{ fontStyle: "italic", color: "#000" }} {...props} />
            ),
          }}
        >
          {description}
        </ReactMarkdown>
      </motion.div>

      {/* Desktop Text (Visible on Medium Screens and Up) */}
      <motion.div className="hidden md:block text-left">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <motion.p
                style={{ fontSize: "1.2rem", lineHeight: "1.75", margin: 0, color: "#000" }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {props.children}
              </motion.p>
            ),
            strong: ({ node, ...props }) => (
              <span style={{ fontWeight: "bold", color: "#000" }} {...props} />
            ),
            em: ({ node, ...props }) => (
              <span style={{ fontStyle: "italic", color: "#000" }} {...props} />
            ),
          }}
        >
          {description}
        </ReactMarkdown>
      </motion.div>
    </motion.div>
  );
};

export default ApproachSectionBody;