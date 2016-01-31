function Score( elementId ) {
  var currentScore  = 0;
  var scoreStep     = 10;
  var element = document.getElementById(elementId);

  function setScore() {
    element.innerText = currentScore;
  }

  setScore();

  return {
    reset: function() {
      currentScore = 0;
      setScore();
    },
    set: function() {
      currentScore += scoreStep;
      setScore();
    }
  }
}