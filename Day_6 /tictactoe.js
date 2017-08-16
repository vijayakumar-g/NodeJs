  var squares = [],
        EMPTY = "\xA0",
        score,
        moves,
        turn = "X",
        oldOnload,
        /*A winner can determined by
    checking whether players have covered any
    of the eight three-row  combinations */

        wins = [7, 56, 448, 73, 146, 292, 273, 84],

/*creates the score board and its makes x turn */
    startNewGame = function () {
        var i;

        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    },

    /* Returns whether the given score is a winning score.*/
    win = function (score) {
        var i;
        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

/*it checks for the players turn and changes the X / 0 for players and system turns*/
    set = function () {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 9) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    },

/*it attaches the board to the display using html tags,appends every thing to the
parent node and  initiates the player to play the game*/
    play = function () {
        var board = document.createElement("table"),
            indicator = 1,
            i, j,
            row, cell,
            parent;
        board.border = 1;
        for (i = 0; i < 3; i += 1) {
            row = document.createElement("tr");
            board.appendChild(row);
            for (j = 0; j < 3; j += 1) {
                cell = document.createElement("td");
                cell.width = cell.height = 50;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }
    parent = document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
        startNewGame();
    };
