// src/components/HUD.jsx
// This component shows the heads-up display (HUD) with game stats.

import React from 'react';
import styled from 'styled-components';

// Styled component for the HUD container
const HUDContainer = styled.div`
  margin: 20px;
  text-align: center;
`;

// HUD component that shows the number of moves
export const HUD = ({ moves }) => {
  return (
    <HUDContainer>
      <p>Moves: {moves}</p> {/* Display the number of moves */}
    </HUDContainer>
  );
};
