let redSlider = document.getElementById("redSlider");
let greenSlider = document.getElementById("greenSlider");
let blueSlider = document.getElementById("blueSlider");

let redValueSpan = document.getElementById("redValue");
let greenValueSpan = document.getElementById("greenValue");
let blueValueSpan = document.getElementById("blueValue");

let colorBox = document.getElementById("color-box");
let copyButton = document.getElementById("copyButton");
let inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

copyButton.addEventListener("click", copyRGBValue);

function updateColor() {
	let redValue = redSlider.value;
	let greenValue = greenSlider.value;
	let blueValue = blueSlider.value;

	//console.log(redValue, greenValue, blueValue);

	let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

	//console.log(rgbColor);

	colorBox.style.backgroundColor = rgbColor;

	redValueSpan.textContent = redValue;
	greenValueSpan.textContent = greenValue;
	blueValueSpan.textContent = blueValue;

	inputTypeRGBValue.value = rgbColor;
}

updateColor();

function copyRGBValue() {
	let redValue = redSlider.value;
	let greenValue = greenSlider.value;
	let blueValue = blueSlider.value;

	let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

	navigator.clipboard.writeText(rgbColor)
		.then(() => {
			alert("RGB value copied to clipboard");
		})
		.catch((error) => {
			console.error("Copy failed!", error);
		});
}

copyRGBValue();