import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const RhythmSpacingWaves = ({ tokens, irregularToken, caption }) => {
  const { colorMode } = useColorMode();

  const waveColor = colorMode === 'dark' ? '#00ffff' : '#222';
  const irregularColor = colorMode === 'dark' ? '#ff00ff' : '#cc0000';
  const textColor = colorMode === 'dark' ? '#ffffff' : '#000000';

  const horizontalGap = 140; // increased spacing between waves
  const wavePath = (x, height = 40, width = 100) =>
    `M${x},60 Q${x + width / 2},${60 - height} ${x + width},60`;

  return (
    <div style={{ textAlign: 'center', padding: '2rem 1rem', color: textColor }}>
      <svg viewBox={`0 0 ${horizontalGap * (tokens.length + 1)} 120`} width="100%" height="120">
        {tokens.map((token, index) => {
          const x = index * horizontalGap;
          return (
            <g key={index}>
              <path
                d={wavePath(x)}
                fill="transparent"
                stroke={waveColor}
                strokeWidth="3"
              />
              <text
                x={x + 50}
                y={100}
                textAnchor="middle"
                fill={textColor}
                fontSize="14"
                fontFamily="monospace"
              >
                {token}
              </text>
            </g>
          );
        })}

        {/* Irregular wave */}
        <g>
          <path
            d={wavePath(tokens.length * horizontalGap, 70)}
            fill="transparent"
            stroke={irregularColor}
            strokeWidth="4"
            strokeDasharray="6 3"
          />
          <text
            x={tokens.length * horizontalGap + 50}
            y={100}
            textAnchor="middle"
            fill={irregularColor}
            fontSize="14"
            fontFamily="monospace"
          >
            {irregularToken}
          </text>
        </g>
      </svg>

      <p style={{ fontStyle: 'italic', marginTop: '1rem', color: textColor }}>
        {caption}
      </p>
    </div>
  );
};

export default RhythmSpacingWaves;
