// src/components/GameBoard.jsx
// This component is responsible for displaying the game board with all the cards.

import React from 'react';
import styled from 'styled-components';
import { useGameLogic } from '../hooks/useGameLogic';
import { Card } from './Card';

// Styled component for the board container
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, ${props => props.cellSize}px); // Grid with 4 columns
  gap: 10px; // Gap between the cards
`;

// The data for the cards (emojis for simplicity)
const cardsData = [
  '🍎', '🍌', '🍇', '🍉',
  '🍎', '🍌', '🍇', '🍉',
];

// The main GameBoard component
export const GameBoard = ({ onGameEnd }) => {
  const { cards, handleCardClick, gameOver, moves, resetGame } = useGameLogic(cardsData);

  return (
    <>
      <BoardContainer cellSize={100}>
        {cards.map((card, index) => (
          <Card
            key={index}
            value={card.value}
            isFlipped={card.isFlipped}
            onClick={() => handleCardClick(index)} // Handle card click events
          />
        ))}
      </BoardContainer>
      {gameOver && ( // Show a message and restart button if the game is over
        <div>
          <h2>You Won!</h2>
          <p>Moves: {moves}</p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </>
  );
};
