const   fps = 60;
const	width = 50;
const	height = 24;
const	squadSize = 15;
const 	GenomeSize = 64;


const 	hp = 40;
const   numberOfCells = 64;
const  	Food = 100;
const 	Poison = 60;
							
const 	SpawnTimer = 1;
let 	FoodSpawnerCounter = 0;
let 	PoisonSpawnerCounter = 0;

let 	generationNumb = 0;

let 	CellsAlive = numberOfCells;
let 	Cells = [];
let 	genome = [];
let 	field;



function setup() {
	frameRate(fps);
	StartSimulation();
	createCanvas(field.getWidth(), field.getHeight());
	CreateHTMLElems();

  		textSize(15);
  		textAlign(CENTER, CENTER);
  		strokeWeight(1);
	
}

async function draw() {

	FoodPoisonSpawner(); // FOOD AND POSION SPAWNER FUNC

	for (var i = 0; i < Cells.length; i++) {
		Cells[i].DoMove();						// Cells Move
	}
	for (var i = 0; i < Cells.length; i++) {
		KillCellsWith0HP(i);		//KILL CELLS WITH 0 HP AND RESTART SIMULATION IF CELLS ALIVE = ALL CELLS / 8
	}
	field.DrawMap();
}




//roflanbot
	/*
		20 - 43
		63 - 46
		45 - 39
		20 - 43
		 .....
	*/
/*
	for (var i = 0; i < Cells.length; i++) {
		Cells[i].genome = [].slice();
	}
*/

/*
5000 generations genome 
[45, 17, 26, 47, 34, 33, 52, 48, 58, 36, 44, 38, 7, 18, 33, 32, 39, 18, 10, 13, 4, 61, 56, 44, 58, 35, 18, 52, 39, 14, 57, 9, 24, 42, 12, 11, 4,
 15, 59, 56, 23, 32, 15, 59, 61, 18, 35, 46, 33, 32, 41, 11, 28, 27, 24, 17, 36, 31, 49, 28, 22, 46, 45, 40]


*/