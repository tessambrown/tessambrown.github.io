const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['wa11_pic1.jpeg', 'wa11_pic2.jpeg', 'wa11_pic3.jpeg', 'wa11_pic4.jpeg', 'wa11_pic5.jpeg'];

/* Declaring the alternative text for each image file */
const altText = ['image 1', 'image 2', 'image 3', 'image 4', 'image 5'];

/* Looping through images */
for (let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${filenames[i]}`);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `/img/${filenames[i]}`);
        displayedImage.setAttribute('alt', altText[i]);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});