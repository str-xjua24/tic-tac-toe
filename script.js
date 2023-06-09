// Game board data and player initialization
const gameData = () => {
  const board = [
    "", "", "",
    "", "", "",
    "", "", "",
  ];

  const winningSolutions = [];
  
  const getBoard = () => {
    return board;
  }

  const getCell = (index) => {
    return board[index];
  }

  const setCell = (index, value) => {
    board[index] = value;
  }

  const playerOne = player('Player 1', '0');
  const playerTwo = player('Player 2', '1');

  return { getBoard, getCell, setCell, playerOne, playerTwo};
}

// Player data
const player = (name, sign) => {
  const playerSign = sign;
  const playerName = name;

  const getPlayerSign = () => {
    return playerSign;
  }

  const getPlayerName = () => {
    return playerName;
  }

  return { getPlayerName, getPlayerSign };
}

// Renders board to the DOM
const renderGame = (game) => {
  let player = game.playerOne.getPlayerSign();
  const board = game.getBoard();
  const gameboard = document.getElementById("gameboard");

  const checkWins = () => {
    
  }

  // Fills gameboard cell according to player's turn
  const playerMove = (e) => {
    let index = e.target.id;
    console.log("Cell " + index + " is filled");
    const move = document.createElement('div');

    if (player === '0') {
      move.classList.add('zero');
      board[Number(index)] = '0';
      player = '1';
    } else {
      move.classList.add('one');
      board[Number(index)] = '1';
      player = '0';
    }
    e.target.appendChild(move);
    console.log(board);
  }

  for (let i = 0; i < 9; i++) {
    const cellEle = document.createElement('div');
    cellEle.classList.add('cell');
    cellEle.setAttribute('id', i);
    gameboard.appendChild(cellEle);

    cellEle.addEventListener('click', playerMove, { once: true });
  }
}

// Initializes game data, renders board, starts game
const gameController = (() => {
  const game = gameData();

  renderGame(game);

})();
