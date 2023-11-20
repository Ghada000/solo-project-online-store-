var array = ["https://babybeauandbelle.com/cdn/shop/files/Booties-Lola-Baby_3281_480x480.jpg?v=1689804828", "https://cdn.fcglcdn.com/brainbees/images/products/300x364/13972138a.webp", "https://i.etsystatic.com/31556734/r/il/fe5281/4318014251/il_600x600.4318014251_go91.jpg"];
var currentIndex = 0;

$("#felsa").on("click", function () {
    $("#img").attr("src", array[currentIndex]);
    currentIndex = (currentIndex + 1) % array.length;
});

var array2 = ["Booties , price : 15DT", "Sunglasses ,price : 20DT", "Hair ties , price : 10DT"];
var currentIndex1 = 0;

$('#felsa').on("click", function () {
    $('#phrase').text(array2[currentIndex1]);
    currentIndex1 = (currentIndex1 + 1) % array2.length; 
});