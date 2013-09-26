describe("playZeeTacToe", function() {
  it("shows the #zee_tac_toe div", function() {
    var zeeTacToeDiv = document.createElement('div');
    zeeTacToeDiv.classList.add('hidden');
    zeeTacToeDiv.id='zee_tac_toe';

    document.body.appendChild(zeeTacToeDiv);

    playZeeTacToe();

    document.getElementById('zee_tac_toe').remove();

    expect(zeeTacToeDiv.classList.contains("hidden")).toBeFalsy();
  });


  xit("binds click handlers to the squares", function() {
  });

});

