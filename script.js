function add (x) {
	x += 11;
	return x;
};
function subtract (x) {
	x -= 3;
	return x;
};
function multiply (x) {
	x *= 22;
	return x;
};

console.log(add(subtract(multiply(16))));
