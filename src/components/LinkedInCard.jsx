import { motion } from "framer-motion";
import { LinkedInIcon } from "../lib/icons/LinkedInIcon";

export const LinkedInCard = () => {
  return (
    <motion.a
      href="https://www.linkedin.com/in/brynta2001"
      rel="noreferrer"
      target="_blank"
      whileHover="groupHover"
      variants={{
        groupHover: {
          scale: 0.95,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
      className="rounded-3xl bg-indigo-300 dark:bg-blue-700 flex justify-center items-center col-span-1 relative aspect-square group"
    >
      <div className="h-full w-full flex justify-center items-center">
        <LinkedInIcon />
      </div>
    </motion.a>
  );
};
