import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FloatInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FloatInWhenVisible;
