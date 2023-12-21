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


