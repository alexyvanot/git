const readlineSync = require("readline-sync");

/**
* Function square() can draw a cross by asking to the user !
* You have to choose which of for cycle or while cycle you want to use to draw.
*
* @return undefinded
*/
function crossPattern(type) {
	let i = 0;
	let j = 0;
	let size = readlineSync.question('Size: ')
	size = Number(size);
	if(type === 'for') {
		console.log('Drawing the cross with the FOR cycle.');
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
		console.log('Drawing the cross with the WHILE cycle.');
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

/**
* Function square() can draw a cube by asking to the user !
* You have to choose which of for cycle or while cycle you want to use to draw.
*
* @return undefinded
*/
function square(type) {
	let i = 0;
	let j = 0;
	let size = readlineSync.question('Size: ')
	size = Number(size);
	if(type !== 'while' && type !== 'for') {
		if(type === undefined) {
			throw "Function square() has to get a parameter (usage: 'for' or 'while') !";
		}
		throw "Function square() has a wrong parameter ! (usage: 'for' or 'while')";
	}
	if(type === 'for') {
		console.log('Drawing the unfilled square with the FOR cycle.');
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
		console.log('Drawing the unfilled square with the WHILE cycle.');
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

/**
* isPrimeNumber() will return a boolean that shows to you if a number is prime.
* This function is taking number as parameter. If there is no params, it will
* ask the user to choose a number to check.
*
* @return boolean
*/
function isPrimeNumber(num) {
	if(num === undefined) {
		num = readlineSync.question('Choose a positive integer: ');
		num = Number(num);
	}
	let isPrime = true;

	if(num <= 1) {
		throw "Chosen number isn't greater than/equal to 1 !";
	}

	for(let i = 2; i <= num; i++) {
		if(num / 2 % i === 0) {
			isPrime = false; // isn't prime number
			break;
		}
	}

	if(isPrime) {
		console.log(num + " is prime");
	} else {
		console.log(num + " isn't prime");
	}
	return isPrime;
}

/**
* isSumNull() will add all numbers and if it's equal to 0, that will return a
* boolean.
*
* @return boolean
*/
function isSumNull() {
	let somme = 0;
	let tab = [1, 2, 3, 4, -10];
	let i;

	for(tab of tab) {
		 somme += tab;
	}

	if(somme === 0) {
		return true;
	} else {
		return false;
	}
}


isSumNull();
isPrimeNumber();
crossPattern('for');
crossPattern('while');
square('for');
square('while');
