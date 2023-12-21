function createBkRedColor(){
    document.body.style.backgroundColor = "red";
}

// for Blue-button
function createBkBlueColor(){
    document.body.style.backgroundColor = 'blue';
}
const blueButton = document.getElementById('blue-button');
// Set the name of the function
blueButton.onclick = createBkBlueColor;

// for Green button with annonymous function
const greenButton = document.getElementById('green-button');
greenButton.onclick = function (){
    document.body.style.backgroundColor = 'green';
}
console.log(greenButton);

// pink-button
function createBkPinkColor(){
    document.body.style.backgroundColor = 'pink';
}
const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener("click", createBkPinkColor);

console.log(pinkButton);

// black-button
const blackButton = document.getElementById('black-button');
blackButton.addEventListener("click", function(){
    document.body.style.backgroundColor = 'black';
});

// orange-button
document.getElementById("orange-button").addEventListener("click", function(){
    document.body.style.backgroundColor = 'orange';
})
