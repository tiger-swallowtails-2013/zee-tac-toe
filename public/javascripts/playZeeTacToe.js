function playZeeTacToe() {
  var clickCount = 0;
  var gameBoardElement = document.getElementById('zee_tac_toe');
  showElement(gameBoardElement);
  var squares = document.getElementsByClassName('square');

  squares[0].addEventListener('click', function() {
    var playerClass = clickCount == 0 ? 'player_x' : 'player_z'
    addClass(squares[0], playerClass);
    clickCount++;
  });

}

function addClass(element, cssClass) {
  element.classList.add(cssClass);
}
function showElement(element) {
  element.classList.remove('hidden');
}
