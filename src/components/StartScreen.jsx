// src/components/StartScreen.jsx
// This component displays the start screen before the game begins.

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled component for the start screen container
const StartContainer = styled.div`
  text-align: center;
`;

// Styled component for the start button
const StartButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; // Darken button on hover
  }
`;

// StartScreen component that shows the start button
export const StartScreen = ({ onStart }) => {
  return (
    <StartContainer>
      <h1>MemoryMatch</h1> {/* Title of the game */}
      <StartButton
        whileHover={{ scale: 1.1 }} // Animation on hover
        whileTap={{ scale: 0.9 }} // Animation on tap
        onClick={onStart} // Handle click event to start the game
      >
        Start Game
      </StartButton>
    </StartContainer>
  );
};
