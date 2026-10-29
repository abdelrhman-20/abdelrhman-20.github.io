/**
 * Partners Rotation Script
 * Handles infinite rotation of partners with center highlighting
 */

document.addEventListener('DOMContentLoaded', function() {
    const partnersList = document.querySelector('.partners__list');
    const partnersItems = document.querySelectorAll('.partners__item');
    
    if (!partnersList || partnersItems.length === 0) {
        return;
    }
    
    let currentIndex = 0;
    const totalItems = partnersItems.length;
    const rotationInterval = 3000; // 3 seconds per rotation
    
    // Initialize: Set first item as active
    function initializeRotation() {
        partnersItems.forEach((item, index) => {
            item.classList.remove('partners__item--active');
            if (index === 0) {
                item.classList.add('partners__item--active');
            }
        });
    }
    
    // Rotate to next partner
    function rotateToNext() {
        // Remove active class from current item
        partnersItems[currentIndex].classList.remove('partners__item--active');
        
        // Move to next item (loop back to 0 if at end)
        currentIndex = (currentIndex + 1) % totalItems;
        
        // Add active class to new current item
        partnersItems[currentIndex].classList.add('partners__item--active');
    }
    
    // Pause rotation on hover
    function pauseRotation() {
        clearInterval(rotationTimer);
    }
    
    // Resume rotation when mouse leaves
    function resumeRotation() {
        rotationTimer = setInterval(rotateToNext, rotationInterval);
    }
    
    // Initialize the rotation
    initializeRotation();
    
    // Start the rotation timer
    let rotationTimer = setInterval(rotateToNext, rotationInterval);
    
    // Pause on hover
    partnersList.addEventListener('mouseenter', pauseRotation);
    partnersList.addEventListener('mouseleave', resumeRotation);
    
    // Optional: Add click handlers for manual navigation
    partnersItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Pause current rotation
            clearInterval(rotationTimer);
            
            // Remove active class from all items
            partnersItems.forEach(i => i.classList.remove('partners__item--active'));
            
            // Set clicked item as active
            item.classList.add('partners__item--active');
            currentIndex = index;
            
            // Resume rotation after a delay
            setTimeout(() => {
                rotationTimer = setInterval(rotateToNext, rotationInterval);
            }, 2000);
        });
    });
});
