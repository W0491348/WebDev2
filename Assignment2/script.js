document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var hiddenContent = document.getElementById('hiddenContent');

    toggleButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the hidden content
        hiddenContent.classList.toggle('hidden');
    });
});