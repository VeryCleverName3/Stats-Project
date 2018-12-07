//Gui functions. We don't talk about this file.

function barGraph(c1, ctx1, margins){
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

function boxPlot(c, ctx){
  var x = c.width - 10;
  var y = c.height;
  ctx.font = "10px arial";
  ctx.textAlign = "center";
  ctx.lineWidth = "10px";
  ctx.fillStyle = color;
  ctx.strokeRect(minimum(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, 1, y - 20);
  ctx.fillStyle = "black";
  ctx.fillText(minimum(distributionOfMoves), minimum(distributionOfMoves) / maximum(distributionOfMoves) * x, y - 10);
  ctx.fillStyle = color;
  ctx.strokeRect(Q1(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, 1, y - 20);
  ctx.fillStyle = "black";
  ctx.fillText(Q1(distributionOfMoves), Q1(distributionOfMoves) / maximum(distributionOfMoves) * x, y - 10);
  ctx.fillStyle = color;
  ctx.strokeRect(Q3(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, 1, y - 20);
  ctx.fillStyle = "black";
  ctx.fillText(Q3(distributionOfMoves), Q3(distributionOfMoves) / maximum(distributionOfMoves) * x, y - 10);
  ctx.fillStyle = color;
  ctx.strokeRect(maximum(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, 1, y - 20);
  ctx.fillStyle = "black";
  ctx.fillText(maximum(distributionOfMoves), maximum(distributionOfMoves) / maximum(distributionOfMoves) * x, y - 10);
  ctx.fillStyle = color;
  ctx.fillRect(Q1(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, (Q3(distributionOfMoves) - Q1(distributionOfMoves)) / maximum(distributionOfMoves) * x, y - 20);
  ctx.strokeRect(Q1(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, (Q3(distributionOfMoves) - Q1(distributionOfMoves)) / maximum(distributionOfMoves) * x, y - 20);
  ctx.strokeRect(minimum(distributionOfMoves) / maximum(distributionOfMoves) * x, (y - 20) / 2, ((Q1(distributionOfMoves) - minimum(distributionOfMoves)) / maximum(distributionOfMoves)) * x, 1);
  ctx.strokeRect(Q2(distributionOfMoves) / maximum(distributionOfMoves) * x, 0, 1, y - 20);
  ctx.fillStyle = "black";
  ctx.fillText(Q2(distributionOfMoves), Q2(distributionOfMoves) / maximum(distributionOfMoves) * x, y - 10);
  ctx.fillStyle = color;
  ctx.strokeRect(Q3(distributionOfMoves) / maximum(distributionOfMoves) * x, (y - 20) / 2, (maximum(distributionOfMoves) - Q3(distributionOfMoves)) / maximum(distributionOfMoves) * x, 1);
  ctx.font = "20px arial";
  ctx.fillStyle = "black";
  ctx.fillText("Results of Simulation", x / 2, y - 5);
}

function drawStuff(){
  //Write html here
  //I'm so sorry
  document.write(`
    <div class="flex">
      <!-- Summary about bar graph goes here (either above or below this comment)-->
      <canvas id="barGraph">
      </canvas>
    </div>
    <div class="flex">
      <canvas id="boxPlot">
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
  var c2 = document.getElementById("boxPlot");
  var ctx2 = c2.getContext("2d");
  c2.width = window.innerWidth / 3;
  c2.height = c2.width * (1/4);

  //Make bar graph- you can tell I'm a good programmer because I only use global variables. (Arguments are for the weak)
  //nvm have to pass the context and canvas and margins :(
  barGraph(c1, ctx1, margins);

  //Make a box plot (using arguments) D:
  boxPlot(c2, ctx2);

}
