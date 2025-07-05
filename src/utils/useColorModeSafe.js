// src/utils/useColorModeSafe.js
import { useColorMode } from '@docusaurus/theme-common';

export function useColorModeSafe() {
  try {
    return useColorMode();
  } catch {
    return { colorMode: 'light' }; // fallback in Storybook
  }
}
