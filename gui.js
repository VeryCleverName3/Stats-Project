function drawStuff(){
  //Write html here
  document.write("
  <canvas id="barGraph">
  </canvas>
  ");
  
  //get canvases & contexts
  var c1 = document.getElementById("barGraph");
  var ctx1 = c1.getContext("2d");
  c1.width = window.innerWidth / 2;
  c1.height = c1.width * (3/4);
  x1 = c1.width;
  y1 = c1.height;

  //Make bar graph
  var biggestNum = 0;
  for(var i = 0; i < distributionOfMoves.length; i++){
    if(distributionOfMoves[i] >= biggestNum) biggestNum = distributionOfMoves[i];
  }
  for(var i = 0; i < distributionOfMoves.length; i++){
    ctx1.fillStyle = "#9bfbff";
    ctx1.fillRect(x1 * (i/distributionOfMoves.length), y1 - (distributionOfMoves[i] / biggestNum * y1 * (2/3)), x1 / (distributionOfMoves.length * 3), distributionOfMoves[i] / biggestNum * y1 * (2/3));
    ctx1.fillStyle = "black";
    ctx1.strokeRect(x1 * (i/distributionOfMoves.length), y1 - (distributionOfMoves[i] / biggestNum * y1 * (2/3)), x1 / (distributionOfMoves.length * 3), distributionOfMoves[i] / biggestNum * y1 * (2/3));
  }
}
