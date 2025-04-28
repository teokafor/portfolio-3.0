const carousels = document.querySelectorAll('div[id*="carousel-"]');

for (let [ind, carousel] of carousels.entries()) {
    const images = Array.from(carousel.children);
    images.forEach( (image) => image.classList.add('hidden'));

    
    // Show first image
    images[0].classList.remove('hidden');
    images[0].classList.add('active');

    const nextButton = document.querySelector(`div[id*="carousel-${ind}"]`).parentElement.children[0].children[1];
    const prevButton = document.querySelector(`div[id*="carousel-${ind}"]`).parentElement.children[0].children[0];
    
    let currentSlideIndex = 0;
    
    nextButton.addEventListener('click', () => {
        images[currentSlideIndex].classList.add('hidden');
        images[currentSlideIndex].classList.remove('active');
        currentSlideIndex+=1;
        moveCarousel();
    });
    prevButton.addEventListener('click', () => {
        images[currentSlideIndex].classList.add('hidden');
        images[currentSlideIndex].classList.remove('active');
        currentSlideIndex-=1;
        moveCarousel();
    });
    
    function moveCarousel() {
        if (currentSlideIndex == images.length) currentSlideIndex = 0;
        else if (currentSlideIndex == -1) currentSlideIndex = images.length - 1;
        
        images[currentSlideIndex].classList.add('active');
        images[currentSlideIndex].classList.remove('hidden');
    }
}