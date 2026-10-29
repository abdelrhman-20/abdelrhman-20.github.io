function animateRowLeft(row, originalLogoCount) {
    const logoWidth = 280;
    const logoSetWidth = originalLogoCount * logoWidth;
    let position = 0;
    
    function animate() {
        position -= 0.5; // Move 0.5px left per frame for smooth animation
        
        // Reset position when reaching -9000px
        if (position <= -9000) {
            position = 0;
        }
        
        row.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}

function animateRowRight(row, originalLogoCount) {
    const logoWidth = 280;
    const logoSetWidth = originalLogoCount * logoWidth;
    let position = 9000;
    
    function animate() {
        position -= 0.5; // Move 0.5px left per frame for smooth animation
        
        // Reset position when reaching 0px
        if (position <= 0) {
            position = 9000;
        }
        
        row.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}   