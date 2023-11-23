document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var hiddenContent = document.getElementById('hiddenContent');

    toggleButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the hidden content
        hiddenContent.classList.toggle('hidden');
    });
});


function adjustImageSize() {
    const logoImage = document.getElementById('logo');
    const mainImage = document.getElementById('mainImage');
    const splashImage = document.getElementById('splashImage');

    const windowWidth = window.innerWidth;

    // Adjust image size based on window width
    if (windowWidth < 600) {
        logoImage.style.width = '50px';
        mainImage.style.width = '80%';
        splashImage.style.width = '80%';
    } else {
        logoImage.style.width = '100px';
        mainImage.style.width = '100%';
        splashImage.style.width = '90%';
    }
}

