const numberOfImages = 14;

const imageContainer = document.querySelector('.image-container');

for (let i = 1; i <= numberOfImages; i++) {
    const image = document.createElement('img');
    image.src = `${i}.png`;
    image.alt = `Image ${i}`;
    if (i === 1) {
        image.classList.add('first-image'); // Add 'first-image' class to the first image
    }
    image.addEventListener('click', () => {
        image.classList.toggle('clicked'); // Toggle 'clicked' class on image click
    });
    imageContainer.appendChild(image);
}
