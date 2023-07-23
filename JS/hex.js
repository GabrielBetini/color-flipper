const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.getElementById('btn');
const color = document.getElementById('color');

button.addEventListener('click', function () {
	let hexFinal = '#';
	for (let i = 1; hexFinal.length < 7; i++) {
		let x = Math.floor(Math.random() * hex.length);
		hexFinal += String(hex[x]);
	}
	color.textContent = hexFinal;
	color.style.color = hexFinal;
	document.body.style.backgroundColor = hexFinal;
});
