var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var name = prompt('Enter your name.'); //prompt brings dialog box
	localStorage.setItem('name', name); //localStorage stores data in the browser
	myHeading.textContent = 'Welcome, ' + name;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}