// this is for the animation that will be happening when the google maps would be loaded

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.transition-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.add('zoom-out');

            // Wait for the transition to finish, then change the page
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // Match this to the CSS transition duration
        });
    });
});