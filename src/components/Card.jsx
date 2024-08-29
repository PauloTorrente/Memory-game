// src/components/Card.jsx
// This component represents a single card in the game.

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

// Styled component for the card container
const CardContainer = styled(motion.div)`
  width: ${theme.sizes.cellSize}px;
  height: ${theme.sizes.cellSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isFlipped }) => (isFlipped ? theme.colors.cardFront : theme.colors.cardBack)};
  color: ${({ isFlipped }) => (isFlipped ? theme.colors.cardText : theme.colors.secondary)};
  font-size: 2em;
  border-radius: 10px;
  cursor: pointer;
`;

// Card component that receives props for value, flip state, and click handler
export const Card = ({ value, isFlipped, onClick }) => {
  return (
    <CardContainer
      isFlipped={isFlipped} // Apply styles based on flip state
      whileTap={{ scale: 0.95 }} // Apply a tap animation
      onClick={onClick} // Handle click events
    >
      {isFlipped ? value : '?'} {/* Show the value if flipped, otherwise show '?' */}
    </CardContainer>
  );
};
