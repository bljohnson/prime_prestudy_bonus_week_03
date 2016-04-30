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

alert("Chain of Functions: " + add(subtract(multiply(16))));
