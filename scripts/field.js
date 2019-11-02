class Field {
	constructor (width, height, food, poison) {
		this.FoodNumb = food;
		this.PoisonNumb = poison; 
		this.width = width;
		this.height = height;

		for (var i = 0; i < this.FoodNumb; i++) {
			this.Location = pickLocation();
			map[this.Location[1]/squadSize][this.Location[0]/squadSize] = 9;
			this.Location = pickLocation();
			map[this.Location[1]/squadSize][this.Location[0]/squadSize] = 6;
		}
	}
	getWidth() {
		return this.width;
	}
	getHeight() {
		return this.height;
	}

	DrawMap() {
		background('#7f8c8d');
		for (var i = 0; i < map.length; i++) {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] === 1) {
					fill('#34495E');
					rect(j*squadSize, i*squadSize, squadSize, squadSize);
				} else if (map[i][j] === 6) {
					fill('#e74c3c');
					rect(j*squadSize, i*squadSize, squadSize, squadSize);
				} else if (map[i][j] === 9) {
					fill('#2ecc71');
					rect(j*squadSize, i*squadSize, squadSize, squadSize);
				} else if (map[i][j] === 2) {
					fill('#9b59b6');
					rect(j*squadSize, i*squadSize, squadSize, squadSize);
				}
			}
		}
		fill(0);
		for (var i = 0; i < Cells.length; i++) {
			text(String(Cells[i].hp), Cells[i].x + squadSize/2, Cells[i].y + (squadSize/2 + 2));
		}
	}
}