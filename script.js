let currentSlideIndex = { readify: 0, theragames: 0, artlib: 0, newproject: 0 };

function openModal(modalName) {
    document.getElementById(modalName + 'Modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    currentSlideIndex[modalName] = 0;
    showSlide(modalName, 0);
}

function closeModal(modalName) {
    document.getElementById(modalName + 'Modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function moveSlide(modalName, direction) {
    const carousel = document.getElementById(modalName + 'Carousel');
    const totalSlides = carousel.children.length;

    currentSlideIndex[modalName] += direction;

    if (currentSlideIndex[modalName] < 0) {
        currentSlideIndex[modalName] = totalSlides - 1;
    } else if (currentSlideIndex[modalName] >= totalSlides) {
        currentSlideIndex[modalName] = 0;
    }

    showSlide(modalName, currentSlideIndex[modalName]);
}

function currentSlide(modalName, index) {
    currentSlideIndex[modalName] = index;
    showSlide(modalName, index);
}

function showSlide(modalName, index) {
    const carousel = document.getElementById(modalName + 'Carousel');
    const dots = document.getElementById(modalName + 'Dots').children;

    carousel.style.transform = `translateX(-${index * 100}%)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}