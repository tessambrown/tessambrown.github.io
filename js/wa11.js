const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['wa11_pic1.jpeg', 'wa11_pic2.jpeg', 'wa11_pic3.jpeg', 'wa11_pic4.jpeg', 'wa11_pic5.jpeg'];

/* Declaring the alternative text for each image file */
const altText = ['image 1', 'image 2', 'image 3', 'image 4', 'image 5'];

/* Applying styles via JavaScript */
displayedImage.style.width = '100%';
displayedImage.style.height = 'auto';
displayedImage.style.maxHeight = '400px'; /* Adjust as needed */

thumbBar.style.display = 'flex';
thumbBar.style.flexWrap = 'wrap';
thumbBar.style.gap = '10px';
thumbBar.style.justifyContent = 'center';

/* Looping through images */
for (let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${filenames[i]}`);
    newImage.setAttribute('alt', altText[i]);

    /* Applying styles to thumbnail images */
    newImage.style.width = '100px'; /* Adjust as needed */
    newImage.style.height = 'auto';
    newImage.style.cursor = 'pointer';
    newImage.style.transition = 'transform 0.2s';

    newImage.addEventListener('mouseenter', () => {
        newImage.style.transform = 'scale(1.1)';
    });

    newImage.addEventListener('mouseleave', () => {
        newImage.style.transform = 'scale(1)';
    });

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
