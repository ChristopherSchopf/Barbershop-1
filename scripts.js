// Select the first li element (with the id 'logo-li')
const logoLi = document.getElementById('logo-li');

// Add a scroll event listener
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down at least 100px (you can adjust this value)
    if (window.scrollY > 150) {
        // Hide the first li
        logoLi.style.display = 'none';
    } else {
        // Show the first li when scrolling back up
        logoLi.style.display = 'block';
    }
});
