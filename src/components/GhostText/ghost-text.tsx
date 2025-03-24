import { cn } from "@/src/utils/animation";
import { motion } from "framer-motion";

interface GhostTextProps {
  text: string;
  className?: string;
  duration?: number;
  wordDelay?: number;
  textColor?: string;
  blurColor?: string;
  blurRadius?: number;
  fontSize?: number;
  fontWeight?: number | string;
  sequential?: boolean; // Added sequential prop
}

export function GhostText({
  text,
  className,
  duration = 0.8, // Adjusted duration for smoother effect
  wordDelay = 0.1, // Adjusted word delay for smoother effect
  textColor,
  blurColor,
  blurRadius = 40, // Adjusted blur radius for smoother effect
  fontSize = 400,
  fontWeight = 700,
  sequential = true, // Default to sequential
}: GhostTextProps) {
  const words = text.split(" ");

  return (
    <p
      className={cn("text-center", className)}
      style={{
        fontSize: `${fontSize}%`,
        fontWeight,
        color: textColor,
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            ["--blur-color" as string]: "rgb(var(--text-color))",
          }}
          className="mx-1 inline-block text-transparent [--text-color:15_23_42] dark:[--text-color:255_255_255]"
          initial={{ opacity: 0, textShadow: `0 0 ${blurRadius}px ${blurColor || "var(--blur-color)"}` }}
          animate={{
            opacity: 1,
            textShadow: `0 0 0px ${blurColor || "var(--blur-color)"}`,
          }}
          transition={{
            duration,
            ease: "easeInOut", // Using easeInOut for a smoother transition
            delay: sequential ? index * wordDelay : 0, // Apply sequential delay if enabled
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}