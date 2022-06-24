const imageURL = document.getElementById('URL');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const memeContainer = document.getElementById('memeContainer');
const formSubmit = document.querySelector('button[type=submit');

formSubmit.addEventListener('click',function(e){
    e.preventDefault();
    
    //Add image to memeContainer
    let image = document.createElement('img');
    image.src = imageURL.value;
    image.setAttribute('id','newImg')
    memeContainer.appendChild(image);
})

