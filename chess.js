
function Board() {
	this.squares = new Array();
}
Board.letters = new Array("A","B","C","D","E","F","G","H");
Board.drawBoard = function() {
	console.log(document.styleSheets[0].cssRules[1]);
	var letters = Board.letters;
	var board = new Board();
	var rows = 10;
	var columns = 10;
	var boardElement = document.getElementById("board");
	for (i=rows; i > 0; i--){
		var row = document.createElement("tr");
		row.setAttribute("id", (i-1));
		for (ii=0; ii < columns; ii++){
			var outerColumn = (i == 1 || i == 10);
			var outerRow = (ii == 0 || ii == 9);
			var outer = (outerColumn || outerRow);
			var cell;
			if (outer){
				cell = document.createElement("td");
				cell.setAttribute("class",  "outer");
				cell.innerHTML = (outerColumn && !outerRow) ? letters[ii -1] : (outerRow && !outerColumn) ?  i  -1:"";
			} else {
				var square = new Square(i-1, ii);
				cell = square.element;
				board.squares.push(square);
			}
			row.appendChild(cell);
		}
		boardElement.appendChild(row);
	}
}

function Square(rank, file){
	var letters = Board.letters;
	this.rank = rank;
	this.file = file;
	this.element = document.createElement("td");
	this.letter = letters[file-1];
	this.element.setAttribute("class", ((rank + file) % 2 == 0 ? "dark" : "light"));
	this.element.setAttribute("id", this.rank + this.letter);
	this.piece = this.getStartingPiece();
}

Square.prototype.getStartingPiece = function(){
	var rank = this.rank;
	var file = this.file;
	var type = (rank == 1 || rank == 8) ? (file == 1 || file ==  8) ? "rook" : (file == 2 || file == 7) ? "knight" : (file == 3 || file == 6) ? "bishop" : (file == 4) ? "queen" : (file == 5) ? "king" : null : (rank == 2 || rank == 7) ?  "pawn":  null;
	var color  = (rank == 1 || rank == 2) ? "white" : (rank ==  7 || rank == 8) ? "black" : null;
	if (type && color)
		return new Piece(color, type, this);
	else
		return null;
}

function Piece(color, type, square){
	this.color = color;
	this.type = type;
	this.square = square;
	this.element = document.createElement("div");
	this.element.setAttribute("class", color + type);
	this.element.setAttribute("id", this.square.rank + this.square.letter);
	var image = document.createElement("img");
	image.setAttribute("src", "images/" + type + ".png");
	this.element.appendChild(image);
	square.element.appendChild(this.element);
}

Piece.prototype.move = function(square){
	this.square = square;
}