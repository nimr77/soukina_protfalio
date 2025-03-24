// HeroSectionMobile.tsx (or .jsx)
import { motion } from 'framer-motion';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GhostText } from '../GhostText/ghost-text'; // Adjust path if needed

interface HeroSectionMobileProps {
    title: string;
    description: string;
    button: {
        label: string;
        link: string;
    };
    imagePath: string;
}

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.3,
        },
    },
};

const textVariants = {
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

const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
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

const HeroSectionMobile: React.FC<HeroSectionMobileProps> = ({ title, description, button, imagePath }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Image (Centered and Big) */}
            <img
                src={imagePath}
                alt="Hero Background"
                className="absolute inset-0 object-cover -z-10 w-full h-full object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Mobile Card */}
            <motion.div
                className="p-6 rounded-lg bg-black/50 backdrop-blur-lg shadow-lg text-center w-full max-w-md mt-48"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <GhostText
                    text={title}
                    className="text-2xl font-bold text-white mb-4 leading-tight block"
              
                    blurRadius={100}
                    fontSize={200}
                    sequential={true}
                />
                <motion.p
                    className="text-base text-white mb-6 leading-relaxed"
                    variants={textVariants}
                >
                    <ReactMarkdown>{description}</ReactMarkdown>
                </motion.p>
                <motion.a
                    href={button.link}
                    className="inline-block bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:bg-red-800"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    {button.label || "Schedule a Free Call Today!"}
                </motion.a>
            </motion.div>
        </div>
    );
};

export default HeroSectionMobile;