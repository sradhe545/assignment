export const Direction = {
    NORTH: "NORTH",
    SOUTH: "SOUTH",
    EAST: "EAST",
    WEST: "WEST",
  };
  
  export const Command = {
    MOVE: "MOVE",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    REPORT: "REPORT",
  };
  export const initialState = {
    xPosition: "",
    yPosition: "",
    facing: "",
  };

  export const isValidDirection = (dir) =>{
    return Direction.hasOwnProperty(dir)
  }
  export const isValidPosition = (x, y) => {
    if (x >= 0 && x <= 4 && y >= 0 && y <= 4) {
      return true;
    }
    alert("You are accessing out of Square Board. Please Choose a valid Move");
    return;
  };