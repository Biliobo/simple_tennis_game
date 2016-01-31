function Ball( elementId, stepCount ) {
  stepCount = stepCount || 1;

  var element = document.getElementById(elementId);

  function getCenter() {
    return [
      element.offsetTop   + element.clientHeight / 2,
      element.offsetLeft  + element.clientWidth  / 2
    ]
  }

  function step( angle ) {
    var coordinates = getCenter();
    var x = coordinates[0] + ( stepCount * Math.cos( angle * Math.PI / 180 ) );
    var y = coordinates[1] + ( stepCount * Math.sin( angle * Math.PI / 180 ) );
    return [x,y];
  }

  function getCoorDinates() {
    return [
      element.offsetTop,
      element.offsetLeft  + element.clientWidth,
      element.offsetTop   + element.clientHeight,
      element.offsetLeft
    ]
  }

  return {
    reset: function () {
      element.style.top = '50px';
      element.style.left = '275px';
    },
    getElement: function () {
      return element;
    },
    move: function ( angle ) {
      var currentCenter = getCenter();
      var newCenter = step( angle );
      element.style.top   = (element.offsetTop  + (newCenter[0] - currentCenter[0])) + 'px';
      element.style.left  = (element.offsetLeft + (newCenter[1] - currentCenter[1])) + 'px';
      return getCoorDinates();
    },
    hide: function () {

    }
  }
}