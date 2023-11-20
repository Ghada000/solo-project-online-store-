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
