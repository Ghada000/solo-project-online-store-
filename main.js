$(document).ready(function() {
    var images = [
        'pic/baby2.webp',
        'https://media.istockphoto.com/id/170455194/photo/babys-feet.jpg?s=612x612&w=0&k=20&c=J80rFoKqgqHOoL4bS0ZXkhkN9StlsLwx4UQf19y8eLs='
        // Add more image URLs as needed
    ];

    var currentImageIndex = 0;

    function preloadImage(url) {
        var img = new Image();
        img.src = url;
    }

    function changeBackground() {
        $('body').css('background-image', 'url(' + images[currentImageIndex] + ')');
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Preload images
    images.forEach(preloadImage);

    // Initial background change
    changeBackground();

    // Change background every 10seconds
    setInterval(changeBackground, 10000);
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID
    var navigateButton = document.getElementById("btn")

    // Add a click event listener to the button
    navigateButton.addEventListener('click', function () {
      // Navigate to another HTML page (replace 'anotherPage.html' with the actual file name)
      window.location.href = 'http://127.0.0.1:5500/pic/second%20page/index2.html#';
    });
  })