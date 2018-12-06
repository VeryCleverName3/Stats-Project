//Create array for board position and number of moves
var distributionOfMoves = [];

//create variables
var board = [0, 0, 0, -3, 0];

//get user input
var numTrials;
while(isNaN(numTrials) || numTrials <= 0){
  numTrials = 1 * prompt("Please enter a number of trials: ", "500");
}

//Simulate trials
for(var i = 0; i < numTrials; i++){
  var position = 0;
  var numMoves = 0;
  while(position < 4){
    position += Math.floor(Math.random() * 2 + 1);
    position += board[position];
    numMoves++;
  }
  if(isNaN(distributionOfMoves[numMoves - 2])) distributionOfMoves[numMoves - 2] = 0;
  distributionOfMoves[numMoves - 2]++;
}

//Change undefineds to 0s
for(var i = 0; i < distributionOfMoves.length; i++){
  if(distributionOfMoves[i] == undefined){
    distributionOfMoves[i] = 0;
  }
}

//draw stuff
drawStuff();
