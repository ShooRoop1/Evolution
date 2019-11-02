class Cell {
	constructor (hp, x, y, Genome, mutationedCell) {
		this.hp = hp;
 		this.x = x;
 		this.y = y;
 		this.genome = Genome;
 		this.mutationedCell = mutationedCell;

 		this.VisualAngle = 0;

 		this.UnconditionalActionsCounter = 0;
 		this.genomeCounter = 0;

 		map[this.y/squadSize][this.x/squadSize] == 2;
 		this.alive = true;
 		this.DiedByPoison = false;
	}


// ------------------ CORE ---------------------

	DoMove() {
		if (this.hp > 90) this.hp = 90;
		if (this.hp == 0) {
			this.alive = false;
			return;
		}
		if (this.UnconditionalActionsCounter > 10) {
			this.UnconditionalActionsCounter = 0;
			this.hp -= 1;
			return;
		}
		if (this.genomeCounter >= 64) {
			this.genomeCounter = this.genomeCounter - 64;
		}
		let moveNumber = this.genome[this.genomeCounter];
		if (moveNumber <= 7) {
			this.Move(moveNumber);
		} else if (moveNumber <= 15) {
			this.Take(moveNumber);
		} else if (moveNumber <= 23) {
			this.Look(moveNumber);
		} else if (moveNumber <= 31) {
			this.Turn(moveNumber);
		} else if (moveNumber <= 63) {
			this.Skip(moveNumber);
		}
	}

// ------------------ CORE ---------------------


// ------------------ Actions ------------------
	Move(side) {
		this.goTo(side);
	}

	Take(side) {
		this.TakeSome(side - 8);
	}

	Look(side) {
		this.LookAtSide(side - 16)
		this.UnconditionalActionsCounter += 1;
		this.DoMove()
	}

	Turn(side) {
		this.VisualAngle += (side - 24)*45
		if (this.VisualAngle >= 360) this.VisualAngle -= 360;
		this.UnconditionalActionsCounter += 1;
		this.genomeCounter += 1;
		this.DoMove()
	}

	Skip(numb) {
		this.genomeCounter += numb;
		this.UnconditionalActionsCounter += 1;
		this.DoMove();
	}

// ------------------ ------- ------------------

// ------------------ Ahead ---------------

	checkAhead(x, y) {
		if (map[y/squadSize][x/squadSize] === 0) return 'void';
		if (map[y/squadSize][x/squadSize] === 1) return 'wall';
		if (map[y/squadSize][x/squadSize] === 2) return 'cell';
		if (map[y/squadSize][x/squadSize] === 6) return 'poison';
		if (map[y/squadSize][x/squadSize] === 9) return 'food';
	}

// ------------------ ---------- ---------------


// ------------------ Draw ---------------------

	// DrawCell() {
	// 	fill('#9b59b6');
	// 	rect(this.x, this.y, squadSize, squadSize);
	// }

// ------------------ ---- ---------------------


// ------------------ ---- ---------------------
// ------------------ ---- ---------------------
// ------------------ ---- ---------------------
// ------------------ ---- ---------------------
// ------------------ ---- ---------------------
goTo (OriginalSide) {
		this.hp -= 1;

		let side = OriginalSide + (this.VisualAngle / 45);
		if (side >= 8) side -= 8

		if (side == 0) {

				if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x - squadSize;
					this.y = this.y - squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x - squadSize;
					this.y = this.y - squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 1) {

				if (this.checkAhead(this.x, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x;
					this.y = this.y - squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x;
					this.y = this.y - squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 2) {

				if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x + squadSize;
					this.y = this.y - squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x + squadSize;
					this.y = this.y - squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 3) {

				if (this.checkAhead(this.x + squadSize, this.y) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x + squadSize;
					this.y = this.y;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x + squadSize;
					this.y = this.y;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 4) {

				if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x + squadSize;
					this.y = this.y + squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x + squadSize;
					this.y = this.y + squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 5) {

				if (this.checkAhead(this.x, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x ;
					this.y = this.y + squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x ;
					this.y = this.y + squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 6) {

				if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x - squadSize;
					this.y = this.y + squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x - squadSize;
					this.y = this.y + squadSize;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		} else if (side == 7) {

				if (this.checkAhead(this.x - squadSize, this.y) == 'void') {
					this.genomeCounter += 5;
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x - squadSize;
					this.y = this.y;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][this.x/squadSize] = 0;
					this.x = this.x - squadSize;
					this.y = this.y;
					map[this.y/squadSize][this.x/squadSize] = 2;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'poison') {
					this.DiedByPoison = true;
					this.genomeCounter += 1;
					this.hp = 0;
					map[this.y/squadSize][this.x/squadSize] = 6;
				}

		}
}

TakeSome (OriginalSide) {
	this.hp -= 1;

	let side = OriginalSide + (this.VisualAngle / 45);
	if (side > 8) side -= 8

	if (side == 0) {

				if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[(((this.y-squadSize)))/squadSize][(((this.x - squadSize)))/squadSize] = 0;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'poison') {
					this.genomeCounter += 1;
					map[(this.y - squadSize)/squadSize][(this.x - squadSize)/squadSize] = 9;
				}

		} else if (side == 1) {

				if (this.checkAhead(this.x, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[(((this.y - squadSize)))/squadSize][this.x/squadSize] = 0;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'poison') {
					this.genomeCounter += 1;
					map[(this.y - squadSize)/squadSize][this.x/squadSize] = 9;
				}

		} else if (side == 2) {

				if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[((this.y - squadSize))/squadSize][((this.x + squadSize))/squadSize] = 0;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'poison') {
					this.genomeCounter += 1;
					map[(this.y - squadSize)/squadSize][(this.x + squadSize)/squadSize] = 9;
				}

		} else if (side == 3) {

				if (this.checkAhead(this.x + squadSize, this.y) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][(this.x + squadSize)/squadSize] = 0;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'poison') {
					this.genomeCounter += 1;
					map[this.y/squadSize][(this.x + squadSize)/squadSize] = 9;
				}

		} else if (side == 4) {

				if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[(this.y + squadSize)/squadSize][(this.x + squadSize)/squadSize] = 0;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'poison') {
					this.genomeCounter += 1;
					map[(this.y + squadSize)/squadSize][(this.x + squadSize)/squadSize] = 9;
				}

		} else if (side == 5) {

				if (this.checkAhead(this.x, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[(this.y + squadSize)/squadSize][this.x/squadSize] = 0;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'poison') {
					this.genomeCounter += 1;
					map[(this.y + squadSize)/squadSize][this.x/squadSize] = 9;
				}

		} else if (side == 6) {

				if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[(this.y + squadSize)/squadSize][(this.x - squadSize)/squadSize] = 0;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'poison') {
					this.genomeCounter += 1;
					map[(this.y + squadSize)/squadSize][(this.x - squadSize)/squadSize] = 9;
				}

		} else if (side == 7) {

				if (this.checkAhead(this.x - squadSize, this.y) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'food') {
					this.genomeCounter += 4;
					this.hp += 10; // +HP FOR FOOD
					map[this.y/squadSize][(this.x - squadSize)/squadSize] = 0;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'poison') {
					this.genomeCounter += 1;
					map[this.y/squadSize][(this.x - squadSize)/squadSize] = 9;
				}

		}
}

LookAtSide (OriginalSide) {

	let side = OriginalSide + (this.VisualAngle / 45);
	if (side > 8) side -= 8

	if (side == 0) {

				if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x - squadSize, this.y - squadSize) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 1) {

				if (this.checkAhead(this.x, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x, this.y - squadSize) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 2) {

				if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x + squadSize, this.y - squadSize) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 3) {

				if (this.checkAhead(this.x + squadSize, this.y) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x + squadSize, this.y) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 4) {

				if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x + squadSize, this.y + squadSize) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 5) {

				if (this.checkAhead(this.x, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x, this.y + squadSize) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 6) {

				if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x - squadSize, this.y + squadSize) == 'poison') {
					this.genomeCounter += 1;
				}

		} else if (side == 7) {

				if (this.checkAhead(this.x - squadSize, this.y) == 'void') {
					this.genomeCounter += 5;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'wall') {
					this.genomeCounter += 2;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'cell') {
					this.genomeCounter += 3;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'food') {
					this.genomeCounter += 4;
				} else if (this.checkAhead(this.x - squadSize, this.y) == 'poison') {
					this.genomeCounter += 1;
				}

		}
}
// ------------------ ---- ---------------------
// ------------------ ---- ---------------------  //CHANGE KOORDINATS
// ------------------ ---- ---------------------
// ------------------ ---- ---------------------
// ------------------ ---- ---------------------   
}