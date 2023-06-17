// Game board data and player initialization
const boardData = () => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const winningSolutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getWinningSolutions = () => {
    return winningSolutions;
  };

  const getCell = (index) => {
    return board[index];
  };

  const setCell = (index, value) => {
    board[index] = value;
  };

  const playerOne = player("Player 1", "0");
  const playerTwo = player("Player 2", "1");

  return {
    getCell,
    setCell,
    playerOne,
    playerTwo,
    getWinningSolutions,
  };
};

// Player data
const player = (name, sign) => {
  const playerSign = sign;
  const playerName = name;

  const getPlayerSign = () => {
    return playerSign;
  };

  const getPlayerName = () => {
    return playerName;
  };

  return { getPlayerName, getPlayerSign };
};

const checkWins = () => {
  const winningSol = game.getWinningSolutions();
};

// Renders board to the DOM
const renderGame = (game) => {
  let player = game.playerOne.getPlayerSign();

  const gameboard = document.getElementById("gameboard");
  const playerDisplay = document.getElementById("current-player");

  playerDisplay.textContent = game.playerOne.getPlayerName();

  // Fills gameboard cell according to player's turn
  const handleCell = (e) => {
    let currentIndex = e.target.id;
    const moveSign = document.createElement("div");

    if (player === "0") {
      moveSign.classList.add("zero");
      game.setCell(Number(currentIndex), "0");
      player = "1";
      playerDisplay.textContent = game.playerTwo.getPlayerName();
    } else {
      moveSign.classList.add("one");
      game.setCell(Number(currentIndex), "1");
      player = "0";
      playerDisplay.textContent = game.playerOne.getPlayerName();
    }

    e.target.appendChild(moveSign);
    console.log("Cell " + currentIndex + " is filled");
  };

  for (let i = 0; i < 9; i++) {
    const cellEle = document.createElement("div");

    cellEle.classList.add("cell");
    cellEle.setAttribute("id", i);

    gameboard.appendChild(cellEle);

    cellEle.addEventListener("click", handleCell, { once: true });
  }
};

// Initializes game data and renders board
const gameController = (() => {
  const game = boardData();

  renderGame(game);
})();
