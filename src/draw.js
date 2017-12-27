const drawGrids=function(numberOfRows,numberOfCols) {
  let grid=document.getElementById("grid");
  for (var i = 0; i < numberOfRows; i++) {
    let row=document.createElement("tr");
    for (var j = 0; j < numberOfCols; j++) {
      let col=document.createElement("td");
      col.id=`${j}_${i}`;
      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}

const clearPreviousGame = function(){
  let grid=document.getElementById("grid");
  let resultDiv = document.getElementById('result');
  grid.innerHTML = "";
  resultDiv.innerHTML = "";
}

const paintCell=function(pos,color) {
  let cell=document.getElementById(pos.getCoord().join("_"));
  if(cell)
    cell.className=color;
}

const paintBody=function(pos) {
  paintCell(pos,"snake");
}

const paintHead=function(pos) {
  paintCell(pos,"snake_head");
}

const unpaintSnake=function(pos) {
  paintCell(pos,"");
}

const drawSnake=function(snake) {
  snake.getBody().forEach(function(pos){
    paintBody(pos);
  });
  paintHead(snake.getHead());
}

const drawFood=function(food) {
  paintCell(food,"food");
}

const putRestartButton = function(){
  let resultDiv = document.getElementById('result');
  let restartButton = document.createElement('button');
  restartButton.id = "restart_button";
  restartButton.innerText = "Play Again";
  restartButton.onclick = restartGame;

  let resultText = document.createElement('span');
  resultText.innerText = "Game Over";

  resultDiv.appendChild(resultText);
  resultDiv.appendChild(restartButton);
}