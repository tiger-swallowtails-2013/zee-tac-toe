function playZeeTacToe(eventListeners) {
  var gameBoardElement = document.getElementById('zee_tac_toe');
  showElement(gameBoardElement);
}

function showElement(element) {
  element.classList.remove('hidden');
}
