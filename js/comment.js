//  for Post comments
document.getElementById('submit-comment').addEventListener('click', function(){
    // console.log("Clicked");
    const commentContains = document.getElementById('new-comment');
    // console.log(commentContains.value);
    const userInputText =  commentContains.value;

    const p = document.createElement('p');
    p.innerText = userInputText;
    console.log(p);

    const commentContainers = document.getElementById('comment-containers');
    commentContainers.appendChild(p);
})


