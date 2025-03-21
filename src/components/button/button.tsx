
import { motion } from 'framer-motion';

import type { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  label?: string;
  variant?: 'primary' | 'secondary';
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

export const ButtonCTA: FC<ButtonProps> = ({
  href,
  label = "Schedule a Free Call Today!",
  variant = 'primary',
  className,
  ...props
}) => {
  const baseClasses = "inline-block font-bold py-3 px-8 rounded-md shadow-lg";
  const variantClasses = variant === 'primary' ? 'bg-red-700 text-white' : 'bg-white text-red-700';
  const buttonClasses = `${baseClasses} ${variantClasses} ${className || ''}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        {label}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...(props as any)}
    >
      {label}
    </motion.button>
  );
};