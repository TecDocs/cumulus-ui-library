import { useColorMode } from '@docusaurus/theme-common';
import './CloudStyles.css';

const CloudChecklist = ({ items = [] }) => {
  const { colorMode } = useColorMode();
  return (
    <ul className={`cloud-checklist ${colorMode}`}>
      {items.map((item, i) => (
        <li key={i}>
          ✅ <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CloudChecklist;
