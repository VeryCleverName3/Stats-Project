function drawStuff(){
  //Write html here
  //I'm so sorry
  document.write(`
    <div class="flex">
      <!-- Summary about bar graph goes here (either above or below this comment)-->
      <canvas id="barGraph">
      </canvas>
    </div>
  `);
  var margins = 16;

  //get canvases & contexts
  var c1 = document.getElementById("barGraph");
  var ctx1 = c1.getContext("2d");
  c1.width = window.innerWidth / 3 + (window.innerWidth / margins);
  c1.height = c1.width * (3/4);
  x1 = c1.width - (window.innerWidth / margins);
  y1 = c1.height - ((window.innerWidth / margins) * (3/4));

  //Make bar graph
  var biggestNum = 0;
  for(var i = 0; i < distributionOfMoves.length; i++){
    if(distributionOfMoves[i] >= biggestNum) biggestNum = distributionOfMoves[i];
  }
  ctx1.textAlign = "center";
  ctx1.font = "10px arial";
  for(var i = 0; i < distributionOfMoves.length; i++){
    ctx1.fillStyle = color;
    ctx1.fillRect(x1 * (i/distributionOfMoves.length) + (window.innerWidth / margins), y1 - (distributionOfMoves[i] / biggestNum * y1 * (2/3)) - (window.innerHeight / margins), x1 / (distributionOfMoves.length * 3), distributionOfMoves[i] / biggestNum * y1 * (2/3));
    ctx1.fillStyle = "black";
    ctx1.strokeRect(x1 * (i/distributionOfMoves.length)+ (window.innerWidth / margins), y1 - (distributionOfMoves[i] / biggestNum * y1 * (2/3)) - (window.innerHeight / margins), x1 / (distributionOfMoves.length * 3), distributionOfMoves[i] / biggestNum * y1 * (2/3));
    if(i % 2 == 0) ctx1.fillText(i + 2, x1 * (i/distributionOfMoves.length)+ (window.innerWidth / margins) + ((x1 / (distributionOfMoves.length * 3)) / 2), y1 - (distributionOfMoves[i] / biggestNum * y1 * (2/3)) - (window.innerHeight / margins) + distributionOfMoves[i] / biggestNum * y1 * (2/3) + 10);
  }
    ctx1.fillText(100 * biggestNum / numTrials + "%", window.innerWidth / (margins * 1.5), y1 * (1/3)  - (window.innerHeight / margins));
    ctx1.fillText("0%", window.innerWidth / (margins * 1.5), (y1 - (distributionOfMoves[0] / biggestNum * y1 * (2/3)) - (window.innerHeight / margins)) + (y1 * (2/3)));
    ctx1.font = "20px arial";
    ctx1.fillText("Number of Moves", x1 / 2 + (window.innerWidth / margins), y1);
    ctx1.fillText("Percent", (window.innerWidth / margins) / 2, y1 / 2 - 20);
    ctx1.fillText("of", (window.innerWidth / margins) / 2, y1 / 2)
    ctx1.fillText("Times", (window.innerWidth / margins) / 2, y1 / 2 + 20);;
    ctx1.fillText("Board Game Simulation Results", x1 / 2 + (window.innerWidth / margins), c1.height - 10);
}
