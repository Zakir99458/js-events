document.getElementById('delete-btn').addEventListener('click', function(){
    console.log("dele");
    const secret_info = document.getElementById('secret-info');
    console.log(secret_info);
    secret_info.style.display = 'none';

});

// Delete confirm after getting message in the text box
document.getElementById('delete-confirm').addEventListener("keyup", function(event){
    console.log(event.target.value);
    if(event.target.value == 'delete'){
        document.getElementById('delete-btn').removeAttribute('disabled');
    }
    else
        document.getElementById('delete-btn').setAttribute('disabled', true);

})