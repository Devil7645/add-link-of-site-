document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    const toggleButton = document.querySelector('.toggle-button');
    const projectImage = document.querySelector('.project-image');
 
<button onclick="window.location.href='https://example.com'">Open</button>

   
<form action="https://example.com" method="get">
    <button type="submit">Open</button>
</form>

	
    if (!toggleButton || !projectImage) {
        console.error('Could not find toggle button or project image');
    } else {
        console.log('Toggle button and project image found');
        
        toggleButton.addEventListener('click', function() {
            console.log('Toggle button clicked');
            projectImage.classList.toggle('toggled-image');
        });
    }
});
