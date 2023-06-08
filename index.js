// INITIAL IMPLEMENTATION
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
// 	alert("I got clicked!");
// }

// ADVANCED IMPLEMENTATION

//get number drum buttons
var buttons = document.querySelectorAll(".drum").length;

//loop through the list/array of buttons and add event listener to each of 'em that listens to a click
//BUTTON PRESS
for (var i = 0; i < buttons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}
//adding listener to key presses on keyboard
// document.addEventListener("keydown", function (event) {
// 	if (event.key == "w") {
// 		var audio = new Audio("sounds/tom-1.mp3");
// 		audio.play();
// 	}
// });

//KEYBOARD KEYS PRESS
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			var audio = new Audio("sounds/tom-1.mp3");
			audio.play();
			break;
		case "a":
			var audio = new Audio("sounds/tom-2.mp3");
			audio.play();
			break;
		case "s":
			var audio = new Audio("sounds/tom-3.mp3");
			audio.play();
			break;
		case "d":
			var audio = new Audio("sounds/tom-4.mp3");
			audio.play();
			break;
		case "j":
			var audio = new Audio("sounds/snare.mp3");
			audio.play();
			break;
		case "k":
			var audio = new Audio("sounds/crash.mp3");
			audio.play();
			break;
		case "l":
			var audio = new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;

		default:
			console.log(buttonInnerHTML);
			break;
	}
}

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}
