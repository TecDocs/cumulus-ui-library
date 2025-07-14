import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

const FloatingHeader = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`floating-header ${colorMode}`}
    >
      {children}
    </motion.h2>
  );
};

export default FloatingHeader;
