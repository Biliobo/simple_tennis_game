
// function isCross( coordA, coordB ) {
  
//   // Координаты точки A
//   var Ax1 = coordA[0][0];
//   var Ay1 = coordA[0][1];
//   var Ax2 = coordA[1][0];
//   var Ay2 = coordA[1][1];
  
//   // Координаты точки B
//   var Bx1 = coordB[0][0];
//   var By1 = coordB[0][1];
//   var Bx2 = coordB[1][0];
//   var By2 = coordB[1][1];

//   // Определяем вершины
//   var maxAx = Math.max( Ax1, Ax2 );
//   var minAx = Math.min( Ax1, Ax2 );
//   var maxAy = Math.max( Ay1, Ay2 );
//   var minAy = Math.min( Ay1, Ay2 );

//   var maxBx = Math.max( Bx1, Bx2 );
//   var minBx = Math.min( Bx1, Bx2 );
//   var maxBy = Math.max( By1, By2 );
//   var minBy = Math.min( By1, By2 );

//   // Линии имеют одну общую вершину
//   if ( minAx >  ) {
//     return true;
//   }

// }

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
    console.log(ballCoordCenterY, racket.offsetLeft, racket.clientWidth);
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