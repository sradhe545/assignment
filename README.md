# Assignment

Simulation of a toy robot moving on a square tabletop, of 5X5 dimensions.

## To start Locally

Clone this Project and Execute the Following Command

`npm i`
`npm start`

### Test Data

1.

```
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

2.

```
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
```

3.

```
PLACE 4,4,NORTH
LEFT
LEFT
REPORT
Output: 4,4,NORTH
```

4.

```
PLACE 3,2,EAST
LEFT
MOVE
MOVE
REPORT
Output: 1,2,WEST
```

5.

```
PLACE 0,0,EAST
RIGHT
MOVE
RIGHT
REPORT
Output: 0,1,SOUTH
```

6.

```
PLACE 4,4,NORTH
LEFT
REPORT
Output: 0,0,EAST
```
