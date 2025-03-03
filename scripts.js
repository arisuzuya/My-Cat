// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Get all preview images
    const previewImages = document.querySelectorAll('.previewImg');
    
    // Add event listeners to each preview image
    previewImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            upDate(this);
        });
        
        image.addEventListener('mouseout', function() {
            undo();
        });
        
        // For keyboard accessibility
        image.addEventListener('focus', function() {
            upDate(this);
        });
        
        image.addEventListener('blur', function() {
            undo();
        });
    });
});

/**
 * Updates the main display when hovering over a thumbnail
 * @param {HTMLElement} previewPic - The image being hovered over
 */
function upDate(previewPic) {
    // For debugging - check if the function is being called
    console.log('upDate function triggered');
    
    // Log information about the image for debugging
    console.log('Image source:', previewPic.src);
    console.log('Image alt text:', previewPic.alt);
    
    // Get the main display element
    const imageDiv = document.getElementById('image');
    
    // Update the text to show the alt text of the preview image
    imageDiv.textContent = previewPic.alt;
    
    // Update the background image to the source of the preview image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

/**
 * Resets the main display when the mouse leaves a thumbnail
 */
function undo() {
    // For debugging - check if the function is being called
    console.log('undo function triggered');
    
    // Get the main display element
    const imageDiv = document.getElementById('image');
    
    // Reset the background image to nothing
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the default message
    imageDiv.textContent = "Hover over an image below to display here.";
}
