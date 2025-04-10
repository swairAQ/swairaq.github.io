document.addEventListener('DOMContentLoaded', function() {
    // Get all floating images
    const floatingImages = document.querySelectorAll('.float-img');
    
    // Add click event listener to each image
    floatingImages.forEach(img => {
        img.addEventListener('click', function() {
            // Check if this image is already expanded
            const isExpanded = this.classList.contains('expanded');
            
            // First, collapse all images
            floatingImages.forEach(otherImg => {
                otherImg.classList.remove('expanded');
            });
            
            // If the clicked image wasn't expanded, expand it
            if (!isExpanded) {
                this.classList.add('expanded');
                
                // Set a timeout to automatically collapse the image after 3 seconds
                setTimeout(() => {
                    this.classList.remove('expanded');
                    // Add the viewed class after collapsing
                    this.classList.add('viewed');
                }, 3000);
            }
        });
    });
    
    // Add click event listener to document to collapse images when clicking outside
    document.addEventListener('click', function(event) {
        // Check if the click was outside any floating image
        if (!event.target.classList.contains('float-img')) {
            floatingImages.forEach(img => {
                img.classList.remove('expanded');
            });
        }
    });
}); 