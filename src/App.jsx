// src/App.js
// The main App component that manages the state of the game and renders other components.

import React, { useState } from 'react';
import styled from 'styled-components';
import { GameBoard } from './components/GameBoard';
import { StartScreen } from './components/StartScreen';
import { HUD } from './components/HUD';

// Styled component for the main app container
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7; // Light background for the app
`;

function App() {
  // State to track if the game has started
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <AppContainer>
      {!gameStarted ? ( // If the game hasn't started, show the start screen
        <StartScreen onStart={() => setGameStarted(true)} />
      ) : (
        <>
          <HUD moves={0} /> {/* HUD to show the number of moves */}
          <GameBoard /> {/* The game board where the cards are displayed */}
        </>
      )}
    </AppContainer>
  );
}

export default App;
