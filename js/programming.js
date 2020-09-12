// ======================================
// JavaScript specific to programming.html page
// ======================================

// Get access to the element having 
// "main-carousal" class
let mainCarousel = document.querySelector('.main-carousel');

// Create a new Flickity object and
// pass the mainCarousal element
let flkty = new Flickity(mainCarousel, {
    // Align cells to left
    cellAlign: 'left',
    // Fill the cells
    contain: true,
    // Enable free scroll
    freeScroll: false
});

// ======================================
// END OF FILE
// ======================================