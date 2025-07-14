import { useColorMode } from '@docusaurus/theme-common';
import './CloudStyles.css';

const CloudFigure = ({ imageSrc, caption }) => {
  const { colorMode } = useColorMode();
  return (
    <div className={`cloud-figure ${colorMode}`}>
      <img src={imageSrc} alt={caption} className="figure-image" />
      <p className="figure-caption">{caption}</p>
    </div>
  );
};

export default CloudFigure;
