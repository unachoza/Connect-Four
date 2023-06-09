// create connect four

//make board

// let column = 7;
// let row = 6;

// let board = Array.from({ length: row }, () => Array.from({ length: column }, () => ""));
// let myGrid = [...Array(6)].map((e) => Array(6));

// add eventlisteners to game rows
const addRowEventListeners = () => {
  for (let i = 0; i <= 6; i++) {
    let currentRowId = `row${i}`;
    const row = document.getElementById(`${currentRowId}`);
    row.addEventListener("click", () => {
      handlePlayerMove("red", row);
    });
  }
};

//how can player make a move to
window.onload = () => {
  setTimeout(() => {
    addRowEventListeners();
  }, 100);
};

//create token
const createToken = (locationElementId) => {
  // create a new div element
  const newToken = document.createElement("div");
  newToken.classList.add("circle");
  locationElementId.appendChild(newToken);
  return newToken;
};

const handlePlayerMove = (player, locationElementId) => {
  createToken(locationElementId).classList.add(player);
};

//check win conditions

const doesRowHaveConnection = (row) => {
  console.log(`let's check this ${row}`);
  let connection = [];
  for (let i = 0; i < row.length - 1; i++) {
    //check if slot empty
    if (row[i] == "") return;
    // start checking prev with current
    if (connection.length === 0) {
      connection.push(row[i]);
      console.log("connection starts over", { connection });
    }
    let current = connection[connection.length - 1];
    let next = row[i + 1];
    console.log({ current }, { next });
    if (current != next) {
      console.log("not the same; empty connection array");
      connection = [];
    } else {
      connection.push(current);
      console.log({ connection }, connection.length, "length");
    }
    if (connection.length === 4) {
      console.log("you connected 4");
      return true;
    }
    // break
  }
  console.log("done checking");
  return false;
};

const doesColumnHaveConnection = (grid) => {
  console.log(`let's check this column ${grid}`);
  let connection = [];
  for (let i = grid.length; i < row - 1; i--) {
    //check if slot empty
    if (grid[i][0] == "") return;
    // add first coin to connection array
    if (connection.length === 0) {
      connection.push(grid[i][0]);
      console.log("connection starts over", { connection });
    }
    //first coin in connection array
    let current = connection[connection.length - 1];
    // next coin to check
    let next = grid[i + 1][0];
    if (next != current) {
      console.log("not the same; empty connection array");
      connection = [];
    } else {
      connection.push(current);
      console.log("now connection is", { connection }, connection.length, "length");
    }
    if (connection.length === 4) {
      console.log("you connected 4");
      return true;
    }
  }
  console.log("done checking");
  return false;
};

//seven lists of 6 items each
let board2 = [
  ["o", "o", "x", "x", "o", "o", "x"],
  ["o", "o", "x", "o", "o", "o", "x"],
  ["o", "x", "x", "o", "o", "o", "x"],
  ["x", "x", "o", "o", "o", "x", "o"],
  ["x", "o", "o", "o", "o", "x", "o"],
  ["x", "o", "x", "x", "x", "x", "o"],
];

let col = 7;
let row = 6;

row = 2;
col = 0;
grid[row + 1][col + 1];

const traverseDiagonal = (grid, row, col) => {
  let connection = [];
  while (row > 0 && col < 7) {
    console.log({ row }, { col });
    if (grid[row][col] == "") {
      console.log("empty slot; restart connection array");
      connection = [];
    }
    if (connection.length === 0) {
      connection.push(grid[row][col]);
      console.log("connection starts over", { connection });
    }
    let current = grid[row][col];
    let next = grid[row - 1][col + 1];
    console.log({ current }, { next });
    if (current != next) {
      console.log("not the same; empty connection array");
      connection = [];
    } else {
      connection.push(grid[row][col]);
      console.log(`add${grid[row][col]} to connection`, { connection });
    }
    if (connection.length === 4) {
      console.log("you connected 4");
      return true;
    }
    row--, col++;
  }
  console.log("end");
};

const doesBoardHaveWinner = (board2, rowStart, colStart) => {
  doesRowHaveConnection();
  doesColumnHaveConnection();
  traverseDiagonal();
  console.log("we checked everything");
};

let board1 = [
  ["o", "", "", "", "", "", ""],
  ["o", "", "", "", "", "", ""],
  ["o", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", ""],
];

//board[row][col]
const playGame = (user, col, board) => {
  //check boared availability
  //how many empty slots in x column,
  const bottomOfColumn = grid.length;
  if (board[col][board.height - 1] !== "") {
    console.log(`no spaces availabe in column ${col}`);
    return false;
  }
  //start at bottom of board
  for (let i = board.height - 1; i > board.height; i--) {
    if (board[col][i] === "") {
      board[col][i] = user;
    }
  }
  //check if any new connections made
  doesBoardHaveWinner(board2, rowStart, colStart);
  //return new board to have access to updated global variable
  return board;
};
//more refactor // need to start from the bottom of grid /reverse order the array

//check diagnol

//remember the board
//disable stuff
//performance
//memory
//UI
