function getCrossWall( ballCoord, box ) {

  if ( ballCoord[0] <= 0 ) {
    return 'top';
  }
  if ( ballCoord[1] >= box.clientWidth ) {
    return 'right'
  }
  if ( ballCoord[2] >= box.clientHeight ) {
    return 'bottom';
  }
  if ( ballCoord[3] <= 0 ) {
    return 'left';
  }
  return null;
}

function getReflectionAngle( angle, wall ) {
  switch (wall) {
    case 'top':
      return angle + 90;
    case 'right':
      return angle * -1;
    case 'bottom':
      return angle - 90;
    case 'left':
      return angle * -1;
  }
  return angle;
}

function isRacketCrossed( ballCoord, box, racket, ball ) {
  if ( ballCoord[2] < ( box.clientHeight - racket.clientHeight ) ) {
    return false;
  }
  var ballCoordCenterY = ballCoord[3] + (ball.clientWidth / 2);
  if ( ballCoordCenterY >= racket.offsetLeft && ballCoordCenterY <= racket.offsetLeft + racket.clientWidth ) {
    return true;
  }
  return false;
}

function getRandomAngle() {
  var multiplier = 1; 
  if ( Math.random() < 0.5 ) {
    multiplier = -1;
  }
  return Math.floor(Math.random() * (60 - 25 + 1) + 25) * multiplier; 
}