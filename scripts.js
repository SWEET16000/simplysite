document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function(e) {
        navList.classList.toggle('nav-active');
        e.stopPropagation(); // Stop the event from bubbling up
    });

    document.addEventListener('click', function() {
        if (navList.classList.contains('nav-active')) {
            navList.classList.remove('nav-active');
        }
    });

    navList.addEventListener('click', function(e) {
        e.stopPropagation(); // Stop the event from bubbling up
    });
});
