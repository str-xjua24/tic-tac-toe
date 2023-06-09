const gameData = () => {
  const board = [
    "", "", "",
    "", "", "",
    "", "", "",
  ];
  
  const getBoard = () => {
    return board;
  }

  const getCell = (index) => {
    return board[index];
  }

  const setCell = (index, value) => {
    board[index] = value;
  }

  const playerOne = player('0');
  const playerTwo = player('1');

  return { getBoard, getCell, setCell, playerOne, playerTwo};
}

const player = (sign) => {
  const playerSign = sign;

  const getPlayerSign = () => {
    return playerSign;
  }

  return { getPlayerSign };
}

const renderGame = () => {
  let player = 'zero';
  const gameboard = document.getElementById("gameboard");

  for (let i = 0; i < 9; i++) {
    const cellEle = document.createElement('div');
    cellEle.classList.add('cell');
    cellEle.setAttribute('id', i);
    gameboard.appendChild(cellEle);

    cellEle.addEventListener('click', (e) => {
      console.log(e.target.id);
      const move = document.createElement('div');

      if (player === 'zero') {
        move.classList.add('zero');
        player = 'one';
      } else {
        move.classList.add('one');
        player = 'zero';
      }
      e.target.appendChild(move);
    });
  }

  const playerMove = () => {

  }
  
  const checkWins = () => {
  
  }
}

const gameController = (() => {
  const game = gameData();
  console.log(game);

  renderGame();

})();
