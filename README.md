# Tic Tac Toe

A browser-based Tic Tac Toe game built with HTML, CSS, and JavaScript. The game allows a player to compete against a simple computer opponent that makes random valid moves.

## Features

* Player vs Computer gameplay
* Random-move AI opponent
* Winner detection
* Tie detection
* Reset and New Game functionality
* Disabled occupied cells to prevent overwriting moves
* Responsive user interface

## Technologies Used

* HTML
* CSS
* JavaScript

## How to Run

1. Clone this repository
2. Open `index.html` in your browser

## Game Logic

* The player plays as **O**
* The computer plays as **X**
* The computer selects a random available cell after the player's turn
* Winning combinations are checked after each move
* The game detects ties when all cells are occupied without a winner

## What I Learned

* DOM manipulation using `querySelectorAll`
* Event handling with `addEventListener`
* Managing game state using variables
* Working with NodeLists and loops
* Creating reusable functions
* Implementing a simple AI using random move generation
* Preventing invalid moves by checking cell occupancy
* Using `while` loops for retry logic
* Understanding variable scope and function execution flow
* Debugging edge cases such as:

  * Infinite loops
  * Tie conditions
  * Winner detection
  * Turn management
  * Computer move validation

## Future Improvements

* Smarter AI that can block player wins
* Score tracking
* Two-player mode
* Difficulty levels
* Dark mode
* Unbeatable AI using the Minimax algorithm

## Author

**Divy**
