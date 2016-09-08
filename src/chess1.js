function Board() {
	this.squares = new Array();
	this.pieces = new Array();
}

Board.letters = new Array("A","B","C","D","E","F","G","H");
Board.drawBoard = function () {
	var letters = Board.letters;
	var board = new Board();
	board.turn = "white";
	document.board = board;
	var rows = 10;
	var columns = 10;
	var boardElement = document.getElementById("board");
	boardElement.parentNode.setAttribute("float", "left");
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
				cell.innerHTML = (outerColumn && !outerRow) ? letters[ii-1] : (outerRow && !outerColumn) ?  i-1:"";
			} else {
				var square = new Square(i-1, ii);
				cell = square.element;
				board.squares.push(square);
				square.board = board;
				board.pieces.push(square.piece);
			}
			row.appendChild(cell);
		}
		boardElement.appendChild(row);
	}
}

function Square(rank, file){
	var letters = Board.letters;
	var self = this;
	this.rank = rank;
	this.file = file;
	this.element = document.createElement("td");
	this.letter = letters[file-1];
	this.element.setAttribute("class", ((rank + file) % 2 == 0 ? "dark" : "light"));
	this.element.setAttribute("id", this.letter + this.rank);
	this.piece = this.getStartingPiece();
	this.element.addEventListener("click", function(){move(self)}, false);
}

Square.prototype.getStartingPiece = function(){
	var self = this;
	var rank = this.rank;
	var file = this.file;
	var type = (rank == 1 || rank == 8) ? (file == 1 || file ==  8) ? "rook" : (file == 2 || file == 7) ? "knight" : (file == 3 || file == 6) ? "bishop" : (file == 4) ? "queen" : (file == 5) ? "king" : null : (rank == 2 || rank == 7) ?  "pawn":  null;
	var color = (rank == 1 || rank == 2) ? "white" : (rank ==  7 || rank == 8) ? "black" : null;
	if (type && color)
		return new Piece(color, type, self);
	else
		return null;
}

function Piece(color, type, square){
	var self = this;
	this.color = color;
	this.type = type;
	this.square = square;
	this.element = document.createElement("div");
	this.element.setAttribute("class", color + type);
	this.element.setAttribute("id", this.square.rank + this.square.letter);
	var image = document.createElement("img");
	image.setAttribute("src", "images/" + color + type + ".png");
	image.setAttribute("width", "50px");
	image.setAttribute("height", "50px");
	this.element.appendChild(image);
	square.element.appendChild(this.element);
}

Piece.prototype.move = function(square){
	this.square = square;

	this.square.piece = this;
	var node = square.element;
	while (node.hasChildNodes()) {
		var fChild = node.firstChild;
		var capturedPiece = fChild.piece;
		node.removeChild(fChild);

		document.getElementById("captured" + capturedPiece.color).appendChild(fChild);
	}
	node.appendChild(this.element);
	document.board.currentPiece = null;
	document.board.turn = (document.board.turn == "white") ? "black" : "white";
	document.getElementById("turn").innerHTML += document.board.turn + "<br />";

}

function move(square){
	var board = document.board;
	if (board.currentPiece == null) {
		if (square.piece != null){
			if (square.piece.color == board.turn){
				board.currentPiece = square.piece;
			}
		}
	} else {
		if (board.currentPiece.square != square){
			board.currentPiece.move(square);
		}
	}
}

class NewBoard {

	toString() {
		return "new board!"
	}
}

module.exports = NewBoard
