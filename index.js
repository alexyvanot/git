const readlineSync = require("readline-sync");

function crossPattern(type) {
	let i = 0;
	let j = 0;
	let size = readlineSync.question('Taille: ')
	size = Number(size);
	if(type === 'for') {
		console.log('Affichage de la croix par la boucle FOR.');
		for(i = 0; i <= size; i++) {
			for(j = 0; j <= size; j++) {
				if (i === j || i + j === size) {
					process.stdout.write("*");
				} else {
					process.stdout.write(".");
				}
			}
			console.log("");
		}
	} else if(type === 'while') {
		console.log('Affichage de la croix par la boucle WHILE.');
		while(i <= size) {
			while(j <= size) {
				if (i === j || i + j === size) {
					process.stdout.write("*");
				} else {
					process.stdout.write(".");
				}
				j++;
			}
			console.log("");
			i++;
			j = 0;
		}
	}
}

function square(type) {
	let i = 0;
	let j = 0;
	let size = readlineSync.question('Taille: ')
	size = Number(size);
	if(type === 'for') {
		console.log('Affichage du carré vide par la boucle FOR.');
		for(i = 0; i <= size; i++) {
			for(j = 0; j <= size; j++) {
				if (j === 0 || i === 0 || j === size || i === size) {
					process.stdout.write("*");
				} else {
					process.stdout.write(".");
				}
			}
			console.log("");
		}
	} else if(type === 'while') {
		console.log('Affichage du carré vide par la boucle WHILE.');
		while(i <= size) {
			while(j <= size) {
				if (j === 0 || i === 0 || j === size || i === size) {
					process.stdout.write("*");
				} else {
					process.stdout.write(".");
				}
				j++;
			}
			console.log("");
			i++;
			j = 0;
		}
	}
}

function isPrimeNumber(num) {
	if(num === undefined) {
		num = readlineSync.question('Choisir un nombre entier: ');
		num = Number(num);
	}
	let isPrime = true;

	if(num <= 1) {
		console.log("Le nombre choisi doit être supérieur ou égal à un.");
		return;
	}

	for(let i = 2; i <= num; i++) {
		if(num / 2 % i === 0) {
			isPrime = false; // isn't prime number
			break;
		}
	}

	if(isPrime) {
		console.log(num + " est premier.");
	} else {
		console.log(num + " n'est pas premier.");
	}
	return isPrime;
}

function isNull() {
	let somme = 0;
	let tab = [1, 2, 3, 4, -10];
	let i;

	for(tab of tab) {
		 somme += tab;
	}

	if(somme === 0) {
		console.log("lala");
		return true;
	} else {
		console.log("loloooo");
		return false;
	}
}

/*
isNull();
isPrimeNumber();
crossPattern('for');
crossPattern('while');
square('for');
square('while');
*/
