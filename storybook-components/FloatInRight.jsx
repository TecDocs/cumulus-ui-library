import React from 'react';
import { motion } from 'framer-motion';

const FloatInRight = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
      className="floatInBox floatInRight"
    >
      {children}
    </motion.div>
  );
};

export default FloatInRight;
