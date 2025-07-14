import { useColorMode } from '@docusaurus/theme-common';
import './CloudStyles.css';

const CloudNoteBox = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <div className={`cloud-note ${colorMode}`}>
      {children}
    </div>
  );
};

export default CloudNoteBox;
