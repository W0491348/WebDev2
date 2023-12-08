document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenuButton.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});