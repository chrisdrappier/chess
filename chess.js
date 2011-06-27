function Board() {
	this.files = 8;
	this.ranks = 8;
}
Board.prototype.getCells = function() {
	for (rank=0; rank < this.ranks; rank++){
		txt += "<tr id=\"" + (this.ranks - rank)  + "\">" ;
		
		for (file=0; file < this.files; file++){
			var letters = new Array("A","B","C","D","E","F","G","H");
			txt += "<td id=\"" +  letters[file] +  (this.ranks - rank) + "\"></td>";
		}
		txt += "</tr>"; 
	}
	return txt;
}
