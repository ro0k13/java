const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images =["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {

    
        console.log(image);
    
        let randomIndex= Math.floor(Math.random() * images.length);
        console.log(randomIndex);
        image.style.backgroundColor = images[randomIndex]; 


    image.src = "images/" + images[randomIndex]
}






