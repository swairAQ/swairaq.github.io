/*==================== MENU SHOW AND HIDE ====================*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

// Toggle the menu visibility
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close the menu when the close button is clicked
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

/*==================== SCROLL UP BUTTON ====================*/
const scrollUp = document.getElementById('scroll-up');

// Show the scroll-up button when the user scrolls down past 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none';
    }
});

// Scroll to the top when the scroll-up button is clicked
scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

// Highlight the active section link as the user scrolls
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

/*==================== PORTFOLIO SCROLL ====================*/
const portfolioContainer = document.querySelector('.portfolio-container');
const scrollRightButton = document.querySelector('.portfolio-scroll-indicator');
const scrollLeftButton = document.querySelector('.portfolio-scroll-indicator-left');

// Scroll portfolio left or right
scrollRightButton.addEventListener('click', () => {
    portfolioContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

scrollLeftButton.addEventListener('click', () => {
    portfolioContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

// Update indicator visibility based on scroll position and content
portfolioContainer.addEventListener('scroll', () => {
    const maxScrollLeft = portfolioContainer.scrollWidth - portfolioContainer.clientWidth;
    const currentScrollLeft = portfolioContainer.scrollLeft;

    // Show the left scroll indicator when we can scroll left
    if (currentScrollLeft > 0) {
        scrollLeftButton.style.display = 'flex';
    } else {
        scrollLeftButton.style.display = 'none';
    }

    // Show the right scroll indicator when we can scroll right
    if (currentScrollLeft < maxScrollLeft) {
        scrollRightButton.style.display = 'flex';
    } else {
        scrollRightButton.style.display = 'none';
    }
});


let scrollAmount = 0; // Amount to scroll each time
let scrollInterval = 3000; // Time interval for scrolling (in milliseconds)

function autoScroll() {
    let maxScrollLeft = portfolioContainer.scrollWidth - portfolioContainer.clientWidth;

    // Check if we've scrolled to the end of the container, and reset if we have
    if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0;
    }

    // Scroll by the amount and increase the scrollAmount
    portfolioContainer.scrollLeft = scrollAmount;
    scrollAmount += 300; // Adjust the scrolling speed (number of pixels)
}

// Set an interval to automatically scroll
setInterval(autoScroll, scrollInterval);