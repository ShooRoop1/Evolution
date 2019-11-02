let map =
[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];


// 0 - Void    1 - Wall    2 - Cell    6 - Poison    9 - Food

let ClearMap = () => {
	for (var i = 0; i < map.length; i++) {
			for (var j = 0; j < map[i].length; j++) {
				if ((map[i][j] == 2)||(map[i][j] == 6)||(map[i][j] == 9)) {
					map[i][j] = 0;
				} 
			}
	}

}
let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


let pickLocation = () => {
	let x = map[0].length;
	let y = map.length;
	while (true) {
		let SpawnX = getRandomInt(0, x);
		let SpawnY = getRandomInt(0, y);

		if (map[SpawnY][SpawnX] === 0) {
			return [SpawnX*squadSize, SpawnY*squadSize];
		}
	}
}

let deleteElem = (arr , value) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == value) 
      {
       arr.splice(i, 1);
       deleteElem(arr, value);
      }
    }
}

let makeNextGeneration = (PrevGeneration) => {
	let FutureGeneration = []
	for (var i = 0; i < PrevGeneration.length; i++) {
		for (var j = 0; j < 8; j++) {
			let SpawnCrd = pickLocation();
			if ((j != 7)) {
				map[SpawnCrd[1]/squadSize][SpawnCrd[0]/squadSize] = 2;
				FutureGeneration.push(new Cell(hp, SpawnCrd[0], SpawnCrd[1], (PrevGeneration[i].genome).slice()));
			} else {
				numbOfChanges = getRandomInt(1, 3);
				let NewGenome = ChangeGenome((PrevGeneration[i].genome).slice(), numbOfChanges);
				map[SpawnCrd[1]/squadSize][SpawnCrd[0]/squadSize] = 2;
				FutureGeneration.push(new Cell(hp, SpawnCrd[0], SpawnCrd[1], NewGenome.slice(), true));
			}	
		}
	}
	// for (var i = 0; i < FutureGeneration.length; i++) {
	// 	console.log(FutureGeneration[i].genome);
	// }
	CellsAlive = numberOfCells;
	return FutureGeneration;
}

let ChangeGenome = (genome, numb) => {
	let NewGenome = genome.slice();
	for (var i = 0; i < 1; i++) {
		gen = getRandomInt (0, genome.length);
		newGen = getRandomInt(0, 64);

		NewGenome[gen] = newGen;
	}
	return NewGenome;

}

let WriteGenome = (Cells) => {
	for (var i = 0; i < Cells.length; i++) {
		console.log(Cells[i].genome);
	}
}

let StartSimulation = () => {
	field = new Field(width*squadSize, height*squadSize, Food, Poison);
	for (var i = 0; i < numberOfCells; i++) {
		genome = [];
		while (genome.length != GenomeSize) {
			genome.push(getRandomInt(0, GenomeSize));
		}
		let SpawnCrd = pickLocation();
		map[SpawnCrd[1]/squadSize][SpawnCrd[0]/squadSize] = 2;
		Cells.push(new Cell(hp, SpawnCrd[0], SpawnCrd[1], genome.slice()));
	}
}

let CreateHTMLElems = () => {
	document.body.style.backgroundColor = '#7F8C8D';
	document.getElementById('defaultCanvas0').style.display = 'block';
	document.getElementById('defaultCanvas0').style.margin = '0% auto 0% auto';
	let generation = document.createElement('h2');
		generation.id = 'generation';
		generation.style.color = 'red';
		generation.style.textAlign = 'center';
		generation.innerHTML = 'Generation number: ';

	let fpsWORD = document.createElement('h4');
		fpsWORD.style.textAlign = 'center';
		fpsWORD.style.margin = '0';
		fpsWORD.innerHTML = 'FPS';

	let fps = document.createElement('input');
		fps.className = 'fps';
		fps.type = 'range';
		fps.min = '1';
		fps.max = 60;
		value = fps;
		fps.style.display = 'block';
		fps.style.margin = '0% auto 0% auto';
		fps.addEventListener('change', () => {
			frameRate(+document.querySelector('.fps').value);
		});

	let InfoBlock = document.createElement('div');

		InfoBlock.style.margin = '0% auto 0% auto';

		InfoBlock.appendChild(generation);
		InfoBlock.appendChild(fpsWORD);
		InfoBlock.appendChild(fps);

	document.body.appendChild(InfoBlock);
}

let FoodPoisonSpawner = () => {
	FoodSpawnerCounter += 1;
	PoisonSpawnerCounter += 1;
	if (FoodSpawnerCounter == SpawnTimer) {
		let Location = pickLocation();
		map[Location[1]/squadSize][Location[0]/squadSize] = 9;
		FoodSpawnerCounter = 0;
	}
	if (PoisonSpawnerCounter == SpawnTimer) {
		let Location = pickLocation();
		map[Location[1]/squadSize][Location[0]/squadSize] = 6;
		PoisonSpawnerCounter = 0;
	}
}

let KillCellsWith0HP = (i) => {
	if (Cells[i].alive == false) {
			CellsAlive -= 1;
			if (!Cells[i].DiedByPoison) {
				map[Cells[i].y/squadSize][Cells[i].x/squadSize] = 0;
			}
			Cells.splice(i, 1);
			field.DrawMap();
			if (CellsAlive == numberOfCells/8) {
				RestartSimulation();
				return;
			}
		}
}

let RestartSimulation = () => {
				ClearMap();
				field = new Field(width*squadSize, height*squadSize, Food, Poison);
				// console.log('Последний выживший геном:');
				// WriteGenome(Cells);
				// console.log('--------------------------');
				Cells = makeNextGeneration(Cells).slice();
				// console.log('Новое поколение:');
				// WriteGenome(Cells);
				// console.log('--------------------------');
				generationNumb += 1;
				document.getElementById('generation').innerHTML = ('Generation number:' + String(generationNumb));
}