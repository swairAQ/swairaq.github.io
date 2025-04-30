// Cache DOM elements
const floatingImages = document.querySelectorAll('.float-img');
let activeImage = null;

// Optimized click handler
function handleImageClick(img) {
    if (activeImage === img) {
        img.classList.remove('expanded');
        activeImage = null;
        return;
    }
    
    if (activeImage) {
        activeImage.classList.remove('expanded');
    }
    
    img.classList.add('expanded');
    activeImage = img;
}

// Initialize event listeners
function initFloatingImages() {
    floatingImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            handleImageClick(this);
        });
    });

    document.addEventListener('click', function() {
        if (activeImage) {
            activeImage.classList.remove('expanded');
            activeImage = null;
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingImages);
} else {
    initFloatingImages();
} 