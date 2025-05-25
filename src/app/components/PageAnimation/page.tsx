"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 40, // lebih jauh sedikit biar lebih terasa transisinya
    scale: 0.98, // tambahkan sedikit zoom out
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1], // cubic-bezier lebih halus
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1], // easing keluar lebih kalem
    },
  },
};

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
