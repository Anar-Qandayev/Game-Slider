let main = document.querySelector(".game-zone");
let move = document.querySelector(".snake");
let ball = document.querySelector(".fa-solid");
let count=document.querySelector(".count")

let topPosSnake = 0;
let leftPosSnake = 0;
let topPosBall = 100;
let leftPosBall = 100;

let mainHeight = main.offsetHeight - 3;
let mainWidth = main.offsetWidth - 3;
let moveHeight = move.offsetHeight;
let moveWidth = move.offsetWidth;

document.body.addEventListener("keyup", (e) => {
  console.log(e.which);
  if (e.which == 39 && leftPosSnake < mainHeight - moveHeight) {
    leftPosSnake += 20;
    move.style.transform = "rotate(0deg)";
    for (let i = 0; i <= 5; i++) {
      if (topPosSnake + leftPosSnake == topPosBall + leftPosBall) {
        ball.style.visibility = "hidden";
      }
      if (ball.style.visibility == "hidden") {
        count.innerHTML = 1;
        topPosBall = 50;
        ball.style.visibility = "visible";
      }
    }
  }
  if (e.which == 37 && leftPosSnake > 0) {
    leftPosSnake -= 20;
    move.style.transform = "rotate(180deg)";
    move.style.transform = "scale(-1,1)";
  }
  if (e.which == 40 && topPosSnake < mainWidth - moveWidth) {
    topPosSnake += 20;
    move.style.transform = "rotate(90deg)";
  }
  if (e.which == 38 && topPosSnake > 0) {
    topPosSnake -= 20;
    move.style.transform = "rotate(270deg)";
  }
  move.style.left = leftPosSnake + "px";
  move.style.top = topPosSnake + "px";
  ball.style.left = leftPosBall + "px";
  ball.style.top = topPosBall + "px";
});
