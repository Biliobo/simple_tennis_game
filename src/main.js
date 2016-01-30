
// Получаем елементы
window.onload = function() {
  var ball    = new Ball('ball');
  var racket  = new Racket('racket');
  var score   = new Score('score');
  
  var ballAngle     = getRandomAngle();

  var boxElement    = document.getElementById('box');
  var racketElement = racket.getElement();
  var scoreElement  = document.getElementById('score');
  var ballElement   = ball.getElement();
  
  var startButton = document.getElementById('start');
  var pauseButton = document.getElementById('pause');
  
  var gameIntervalId = null;
  var isPaused = false;
  
  
  // Управление ракеткой
  document.addEventListener('keydown', function(event) {
    switch ( event.keyCode ) {
      case 37:
        racket.moveToLeft();
        break;
      case 39:
        racket.moveToRight();
        break;
    }
  });


  startButton.addEventListener('click', function(event) {
    score.reset();
    ball.reset();
    ballAngle = getRandomAngle();
    if ( gameIntervalId ) {
      clearInterval(gameIntervalId);
    }
    gameIntervalId = beginGame();
  });

  pauseButton.addEventListener('click', function(event) {
     console.log('pause');
  });

  function beginGame() {
    return setInterval(function() {
      var crossWall;
      // Переместили мяч и получили его координаты
      var ballCoordinates = ball.move(ballAngle);
      // Проверяем стену соприкосновения
      if (isRacketCrossed(ballCoordinates, boxElement, racketElement, ballElement)) {
        crossWall = 'bottom'; 
        score.set();
      } else {
        crossWall = getCrossWall(ballCoordinates, boxElement);
        if (crossWall === 'bottom') {
          score.reset();
          alert("Game over!");
          clearInterval(gameIntervalId);
          return;            
        }
      }
      ballAngle = getReflectionAngle(ballAngle, crossWall); 
    }, 1);
  }
}