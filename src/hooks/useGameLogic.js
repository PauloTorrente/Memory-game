// src/hooks/useGameLogic.js
// This hook manages the game logic such as flipping cards and checking for matches.

import { useState, useEffect } from 'react';

export const useGameLogic = (cardsData) => {
  // State to hold all the cards
  const [cards, setCards] = useState([]);
  
  // State to track currently flipped cards
  const [flippedCards, setFlippedCards] = useState([]);
  
  // State to track matched cards
  const [matchedCards, setMatchedCards] = useState([]);
  
  // State to track the number of moves
  const [moves, setMoves] = useState(0);
  
  // State to track if the game is over
  const [gameOver, setGameOver] = useState(false);

  // Shuffle and initialize cards when the game starts
  useEffect(() => {
    const shuffledCards = cardsData
      .map(value => ({ value, sort: Math.random() })) // Adding a random sort value to each card
      .sort((a, b) => a.sort - b.sort) // Sorting cards randomly
      .map(({ value }) => ({ value, isFlipped: false })); // Initialize cards with flipped state as false
    
    setCards(shuffledCards); // Setting the shuffled cards to state
  }, [cardsData]);

  // Function to handle card clicks
  const handleCardClick = (index) => {
    // Prevent actions if more than two cards are flipped or if the card is already matched
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    const newCards = [...cards];
    newCards[index].isFlipped = true; // Flip the clicked card
    setCards(newCards);
    setFlippedCards(newFlippedCards);

    // Check if two cards are flipped
    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      // Check if the two flipped cards match
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
        setFlippedCards([]);
        
        // If all cards are matched, set the game as over
        if (matchedCards.length + 2 === cards.length) {
          setGameOver(true);
        }
      } else {
        // If the cards don't match, flip them back after a short delay
        setTimeout(() => {
          newCards[firstIndex].isFlipped = false;
          newCards[secondIndex].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(moves + 1); // Increment the move count
    }
  };

  return {
    cards,
    handleCardClick,
    gameOver,
    moves,
    resetGame: () => window.location.reload(), // Simple reset for restarting the game
  };
};
