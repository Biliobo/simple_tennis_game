/**
* Объект для работы с жизнями
*/
function Level( levelId ) {

  var maxLevelCount = 5;
  var currentLevel;

  var element = document.getElementById(levelId);

  function update() {
    element.innerText = currentLevel;
  }

  function init() {
    currentLevel = maxLevelCount;
    update();
  }

  init();

  return {
    reset: function() {
      currentLevel = maxLevelCount;
      update();
      return currentLevel;
    },
    set: function() {
      if ( currentLevel > 0 ) {
        currentLevel--;
      }
      update();
      return currentLevel;
    }
  }

}