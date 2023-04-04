// create connect four

//make board

let column = 7;
let row = 6;

let board = Array.from({ length: row }, () => Array.from({ length: column }, () => ""));
let myGrid = [...Array(6)].map((e) => Array(6));

//check win conditions

let checkARow = (row) => {
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

let checkAColumn = (grid) => {
  console.log(`let's check this column ${grid}`);
  let connection = [];
  for (let i = 0; i < row - 1; i++) {
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

let checkDiagonal = (grid) => {
  console.log(`let's check this column ${grid}`);
  let connection = [];
  for (let i = 0; i < 11; i++) {
    //check if slot is empty
    //don't think it applies to diagonal; or like how to include /optimize?
    if (grid[i][0] == "") return;
    // add first coin to connection array
    if (connection.length === 0) {
      connection.push(grid[i][i]);
      console.log("connection starts over", { connection });
    }
    let current = connection[connection.length - 1];
    let next;
  }
};

//array [row][column]

let board1 = [
  ["o", "", "", "", "", "", ""],
  ["o", "", "", "", "", "", ""],
  ["o", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", ""],
];

//more refactor // need to start from the bottom of grid /reverse order the array

//check diagnol
//make github
//how can player make a move to
//remember the board
//disable stuff
//performance
//memory
//UI
