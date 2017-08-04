play();
function play()
 {
   
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
              //  cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
                console.log(indicator);
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        parent =document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
      //  startNewGame();||
    }
