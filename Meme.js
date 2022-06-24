const imgContainer = document.getElementById('container');
const image = document.getElementById('image')
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
let submit = document.querySelector('button[type=submit]');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    
    //Wrap div around image and append both to container div
    let div = document.createElement('div');
    let newImg = document.createElement('img');
    newImg.setAttribute('id','newImg')
    newImg.src = image.value;
    imgContainer.appendChild(div);
    div.appendChild(newImg);
    div.setAttribute('id','divImg')
    
    
    
    //Add top text
    let newTop = document.createElement('div')
    newTop.setAttribute('id','newTop');
    newTop.innerText = topText.value
    imgContainer.lastElementChild.appendChild(newTop);

    //Add bottom Text
    let newBottom = document.createElement('div')
    newBottom.setAttribute('id','newBottom');
    newBottom.innerText = bottomText.value
    imgContainer.lastElementChild.appendChild(newBottom);

    //Add hover-delete to new image
    div.addEventListener('click',function() {
        imgContainer.removeChild(div);
    })
    image.value = '';
    topText.value = '';
    bottomText.value = '';


    
})