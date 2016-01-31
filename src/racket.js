function Racket( racketId, step ) {

  var element = document.getElementById(racketId);
  var moveStep  = step || 50;

  var fieldWidth = element.offsetParent.clientWidth;

  function update() {
    element.innerText = currentLevel;
  }

  function getCoordinates() {
      return [
        [ element.offsetTop, element.offsetLeft ],
        [ element.offsetTop, (element.offsetLeft + element.clientWidth) ]
      ];
  }

  function move( relativeMove ) {
    element.style.left = (element.offsetLeft + relativeMove) + 'px';
  }

  function canMoveLeft() {
    if ( element.offsetLeft <= 0 ) {
      return false;
    }
    return true;
  }

  function canMoveRight() {
    if ( element.offsetLeft >= (fieldWidth - element.clientWidth) ) {
      return false;
    }
    return true;
  }

  return {
    getElement: function () {
      return element;
    },
    moveToLeft: function() {
      if ( canMoveLeft() ) {
        move( moveStep * -1 );
      }
      return getCoordinates();
    },
    moveToRight: function() {
      if ( canMoveRight() ) {
        move( moveStep );
      }
      return getCoordinates();
    }
  }

}