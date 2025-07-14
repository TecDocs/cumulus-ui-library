import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/** ===========================
 * 🌩️ CONFIGURABLE BASE VALUES
 * =========================== */
const BASE_FONT_SIZE = 13;              // 🔤 Font size inside cloud text
const BASE_FONT_WEIGHT = 500;           // 🔠 Font weight of cloud text
const BASE_TEXT_PADDING = 3;            // 📏 Padding inside the cloud text
const BASE_LINE_HEIGHT = 1.7;           // 📐 Line height multiplier
const BASE_CLOUD_WIDTH = 240;           // ☁️ Default cloud width
const BASE_CLOUD_HEIGHT = 200;          // ☁️ Default cloud height
const CLOUD_VERTICAL_OFFSET = 12;       // ⬆️ Space between word and cloud
const TEXT_VERTICAL_POSITION = 100;     // 📦 Vertical position of text inside cloud
const DEBUG_MODE = false;                // 🛠️ Toggle borders and debug visuals

/**
 * ☁️ StretchCloud SVG Component
 * - A balanced SVG cloud
 * - Includes center line for alignment debugging
 */
const StretchCloud = ({ width = BASE_CLOUD_WIDTH, height = BASE_CLOUD_HEIGHT }) => (
  <motion.svg
    width={width}
    height={height}
    viewBox="0 0 300 200"
    preserveAspectRatio="none"
    style={{ display: 'block' }}
  >
    {/* ☁️ Cloud Shape */}
    <path
      fill="#ffffff"
      stroke="#000000"
      strokeWidth={2}
      d="
        M75,150 
        C60,120 90,100 110,120 
        C110,90 150,90 150,120 
        C150,90 190,90 190,120 
        C210,100 240,120 225,150 
        C245,160 245,180 210,185 
        C190,200 160,190 150,180 
        C140,190 110,200 90,185 
        C60,180 55,160 75,150 
        Z"
    />
    {/* 🔴 Center Line for Debug */}
    {DEBUG_MODE && (
      <motion.line
        x1="150"
        y1="0"
        x2="150"
        y2="200"
        stroke="red"
        strokeWidth="1"
      />
    )}
  </motion.svg>
);

/**
 * 🧠 HoverWordCloudRow Component
 * - Displays hoverable words with floating cloud descriptions
 */
export default function HoverWordCloudRow() {
  const [hoverMeta, setHoverMeta] = useState({ word: null, x: 0 });
  const containerRef = useRef(null); // 📦 Reference to outer container
  const [containerLeft, setContainerLeft] = useState(0); // 📏 X-offset of container

  const words = ['APIs', 'scale', 'beautifully', 'serverless', 'today'];

  // 💬 Get description sentence per word
  const getSentence = (word) => {
    switch (word) {
      case 'APIs': return 'APIs enable fast, reliable communication between systems.';
      case 'scale': return 'Scalable infrastructure supports millions of users effortlessly.';
      case 'beautifully': return 'Beautifully designed components enhance user experience.';
      case 'serverless': return 'Serverless functions reduce operational overhead.';
      case 'today': return 'Start building production-ready apps today with ease.';
      default: return '';
    }
  };

  // 🧮 Calculate container's left offset on mount
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerLeft(rect.left);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '280px',
        paddingTop: '400px',
        background: 'linear-gradient(to bottom, #f0f7ff, #e3f2fd)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontSize: `${BASE_FONT_SIZE}px`,
          fontWeight: BASE_FONT_WEIGHT,
          fontFamily: 'sans-serif',
          display: 'inline-block',
          position: 'relative',
        }}
      >
        {words.map((word, index) => {
          const isActive = hoverMeta.word === word;
          const sentence = getSentence(word);
          const sentenceLength = sentence.length;

          // 📐 Estimate cloud size based on sentence length
          const estimatedTextWidth = sentenceLength * (BASE_FONT_SIZE * 0.6) + BASE_TEXT_PADDING * 2;
          const estimatedTextHeight = BASE_FONT_SIZE * BASE_LINE_HEIGHT + BASE_TEXT_PADDING * 2;
          const cloudWidth = Math.max(BASE_CLOUD_WIDTH, estimatedTextWidth + 40);
          const cloudHeight = Math.max(BASE_CLOUD_HEIGHT, estimatedTextHeight + 40);

          return (
            <span
              key={index}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const relativeX = centerX - containerLeft; // 🎯 Position relative to parent container
                setHoverMeta({ word, x: relativeX });
              }}
              onMouseLeave={() => setHoverMeta({ word: null, x: 0 })}
              style={{
                margin: '0 10px',
                color: '#1976d2',
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-block',
                padding: '2px 6px',
                border: DEBUG_MODE ? '1px dashed red' : 'none',
              }}
            >
              {word}

              {/* ☁️ Cloud appears on hover */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    bottom: `100%`,
                    left: `${hoverMeta.x - 700}px`, // 🎯 Adjust cloud horizontal position here
                    transform: `translateX(-50%) translateY(-${CLOUD_VERTICAL_OFFSET}px)`,
                    width: `${cloudWidth}px`,
                    height: `${cloudHeight}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 5,
                    pointerEvents: 'none',
                  }}
                >
                  {/* 🌥️ Cloud SVG */}
                  <StretchCloud width={cloudWidth} height={cloudHeight} />

                  {/* 📃 Cloud Text */}
                  <div
                    style={{
                      position: 'absolute',
                      top: `${TEXT_VERTICAL_POSITION}px`,
                      left: '50%',
                      top: '60%',
                      transform: 'translateX(-50%)',
                      fontSize: `${BASE_FONT_SIZE}px`,
                      fontWeight: BASE_FONT_WEIGHT,
                      fontFamily: 'monospace',
                      padding: `${BASE_TEXT_PADDING}px`,
                      backgroundColor: 'transparent',
                      color: '#111111',
                      borderRadius: '6px',
                      maxWidth: `${cloudWidth - 60}px`,
                      lineHeight: BASE_LINE_HEIGHT,
                      textAlign: 'center',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                    }}
                  >
                    {sentence}
                  </div>

                  {/* 🔻 Cloud Tail */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0',
                      height: '0',
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      borderTop: '10px solid #ffffff',
                      zIndex: 4,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0',
                      height: '0',
                      borderLeft: '11px solid transparent',
                      borderRight: '11px solid transparent',
                      borderTop: '11px solid #000000',
                      zIndex: 3,
                    }}
                  />
                </motion.div>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
