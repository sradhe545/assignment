import React, { useState } from "react";
import "./App.css";
import { initialState ,Direction,Command, isValidDirection, isValidPosition} from "./utils";

const App = () => {
  const [placeRobot, setPlaceRobot] = useState("");
  const [commands, setCommands] = useState(initialState);
  const [isRobotPlaced, setIsRobotPlaced] = useState(false);
  const [showOutput,setShowOutPut] =useState(false)
  const moveRobot = () => {
    let { xPosition, yPosition, facing } = commands;
    switch (facing) {
      case Direction.NORTH:
        yPosition = isValidPosition(xPosition, yPosition + 1)
          ? yPosition + 1
          : yPosition;
        break;
      case Direction.SOUTH:
        yPosition = isValidPosition(xPosition, yPosition - 1)
          ? yPosition - 1
          : yPosition;
        break;
      case Direction.EAST:
        xPosition = isValidPosition(xPosition + 1, yPosition)
          ? xPosition + 1
          : xPosition;
        break;
      case Direction.WEST:
        xPosition = isValidPosition(xPosition - 1, yPosition)
          ? xPosition - 1
          : xPosition;
        break;
      default:
        break;
    }
    setCommands({ xPosition: xPosition, yPosition: yPosition, facing: facing });
  };

  const rotateRobot = (direction) => {
    const directions = [
      Direction.NORTH,
      Direction.SOUTH,
      Direction.WEST,
      Direction.EAST,
    ];
    const currentIndex = directions.indexOf(commands.facing);
    const newIndex =
      direction === Command.LEFT
        ? (currentIndex + 3) % 4
        : (currentIndex + 1) % 4;
    const newFacing = directions[newIndex];
    setCommands({ ...commands, facing: newFacing });
  };


  
  
  const handleCommand = () => {
    const [place, position] = placeRobot?.trim()?.split(" ");
    if(position?.length){
      const [x, y, direction] = position.split(",");
      if (place === "PLACE" && isValidPosition(x, y) && isValidDirection(direction)) {
        setCommands({ xPosition: +x, yPosition: +y, facing: direction });
        setIsRobotPlaced(true);
        setPlaceRobot("");
      } else {
        alert("Invalid Input.Please Give correct input");
        return;
      }
    }
    else{
      alert("Invalid Input.Please Give correct input");
    }
    
  };
  
  const handleClick = (action) => {
    switch (action) {
      case Command.MOVE:
        moveRobot();
        break;
      case Command.LEFT:
      case Command.RIGHT:
        rotateRobot(action);
        break;
      case Command.REPORT:
        setShowOutPut(true)
        break;
      default:
        break;
    }
  };

  return (<>
    <h1>

    Simulation of a toy robot moving on a square tabletop of Dimensions 5X5
    </h1>
    <div className="container">
      <div className="movement">
        <h2>Input Terminal</h2>
        <div className="input-wrapper">
          <input
            type="text"
            value={placeRobot}
            onChange={(e) => setPlaceRobot(e.target.value)}
            placeholder="Please Enter the Command to Place the Robot"
          />
          <button onClick={handleCommand} className="place" disabled={!placeRobot.includes('PLACE ')}>
            Place the Robot
          </button>
        </div>
        <div className="buttons">
          <button
            onClick={() => handleClick(Command.MOVE)}
            disabled={!isRobotPlaced}
          >
            Move
          </button>
          <button
            onClick={() => handleClick(Command.LEFT)}
            disabled={!isRobotPlaced}
          >
            Left
          </button>
          <button
            onClick={() => handleClick(Command.RIGHT)}
            disabled={!isRobotPlaced}
          >
            Right
          </button>
          <button
            onClick={() => handleClick(Command.REPORT)}
            disabled={!isRobotPlaced}
          >
            Report
          </button>
        </div>
      </div>
      <div className="movement">
        <h3>Output Terminal</h3>
        <h1>{showOutput ? <h3 >Output <span data-testid="output">{commands.xPosition},{commands.yPosition},{commands.facing}</span></h3>:'' }</h1>
      </div>
     
    </div>
    </>
  );
};

export default App;
