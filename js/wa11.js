const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['wa11_pic1.jpeg', 'wa11_pic2.jpeg', 'wa11_pic3.jpeg', 'wa11_pic4.jpeg', 'wa11_pic5.jpeg']

/* Declaring the alternative text for each image file */
const altText = ['image 1', 'image 2', 'image 3', 'image 4', 'image 5']

/* Looping through images */
let i = 0;
while(i < filenames.length)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {displayedImage = newImage.setAttribute('src', '/img/filenames[i]'); 
    displayedImage = newImage.setAttribute('alt', altText[i]);
    });

    i++
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAnimations('class');

    if(currentClass === 'dark')
    {
        btn.setAttribute('class', 'light');
        btn.textContent = 'light';
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else 
    {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})