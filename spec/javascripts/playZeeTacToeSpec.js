describe("playZeeTacToe", function() {
  var zeeTacToeDiv, square;
  beforeEach(function() {
    zeeTacToeDiv = document.createElement('div');
    zeeTacToeDiv.classList.add('hidden');
    zeeTacToeDiv.id='zee_tac_toe';

    square = document.createElement('div');
    square.classList.add('square');
    zeeTacToeDiv.appendChild(square);

    document.body.appendChild(zeeTacToeDiv);

  });
  afterEach(function() {
    document.getElementById('zee_tac_toe').remove();
  });

  it("shows the #zee_tac_toe div", function() {
    playZeeTacToe();

    expect(zeeTacToeDiv.classList.contains("hidden")).toBeFalsy();
  });

  it('marks square with "X" when clicked for the first time', function() {
    playZeeTacToe();

    square.dispatchEvent(new Event('click'));

    expect(square.classList.contains('player_x')).toBeTruthy();
  });

  it('marks square with "Z" when clicked for the second time', function() {
    playZeeTacToe();

    square.dispatchEvent(new Event('click'));
    square.dispatchEvent(new Event('click'));

    expect(square.classList.contains('player_z')).toBeTruthy();

  });

});

