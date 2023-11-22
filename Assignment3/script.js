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

// Attach the adjustImageSize function to the window resize event
window.addEventListener('resize', adjustImageSize);

// Call the function initially to set the initial image sizes
adjustImageSize();

     // Function to create a 2x2 tile
     function createTile(imageSrc, altText, title, description) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        const square1 = createSquare(imageSrc[0], altText[0], title[0], description[0]);
        const square2 = createSquare(imageSrc[1], altText[1], title[1], description[1]);
        const square3 = createSquare(imageSrc[2], altText[2], title[2], description[2]);
        const square4 = createSquare(imageSrc[3], altText[3], title[3], description[3]);

        tile.appendChild(square1);
        tile.appendChild(square2);
        tile.appendChild(square3);
        tile.appendChild(square4);

        document.body.appendChild(tile);
    }

    // Function to create a square with the provided content
    function createSquare(imageSrc, altText, title, description) {
        const square = document.createElement('div');
        square.className = 'square';

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = altText;

        const textOverlay = document.createElement('div');
        textOverlay.className = 'text-overlay';
        textOverlay.innerHTML = `${title}<br><span>${description}</span>`;

        square.appendChild(img);
        square.appendChild(textOverlay);

        return square;
    }

    // Content for the tiles
    const tile1Content = {
        imageSrc: ['1.png', '2.png', '3.png', '4.png'],
        altText: ['Mac', 'iPad', 'iPhone', 'Watch'],
        title: ['Mac', 'iPad', 'iPhone', 'Watch'],
        description: [
            'Our most powerful pro lineup ever. Ready for your best work ever.',
            'Like a computer. Unlike any computer.',
            'Just the right amount of everything.',
            "You've never seen a watch like this."
        ]
    };

    // Create the 2x2 tile
    createTile(
        tile1Content.imageSrc,
        tile1Content.altText,
        tile1Content.title,
        tile1Content.description
    );