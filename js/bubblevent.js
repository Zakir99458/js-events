document.getElementById('second-item').addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Second li Clicekd");
})

document.getElementById('section-container').addEventListener("click", function(event){
    console.log("section li Clicekd");
})
document.getElementById('third-item').addEventListener("click", function(event){
    console.log("third-item li Clicekd");
})