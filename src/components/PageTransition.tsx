/* eslint-disable no-inline-styles/no-inline-styles */
import { motion } from "framer-motion";
import React from "react";
import type { Variants } from "framer-motion";

const variants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.35, ease: "easeInOut" }}
    style={{ height: "100%" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
