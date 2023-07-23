const colors = ['green', 'blue', 'rgba(53, 176, 247, 0.9)', 'white', '#334522'];
const button = document.getElementById('btn');
const color = document.getElementById('color');

button.addEventListener('click', function () {
	const randomNumber = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
	color.style.color = colors[randomNumber];
});
