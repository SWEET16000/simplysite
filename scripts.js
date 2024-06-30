document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const socialIcons = document.querySelectorAll('.social-icons img, .social-media img');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('nav-active');
    });

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.src = this.getAttribute('data-light');
        });
        icon.addEventListener('mouseout', function() {
            this.src = this.getAttribute('data-dark');
        });
    });
});
