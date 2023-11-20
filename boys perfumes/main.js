var array =["https://m.media-amazon.com/images/I/41WiNUKr+HL.jpg","https://bestperfumesfor.com/wp-content/uploads/2020/07/Tous-Kids-Baby-Perfume.png","https://babyjolie.com/cdn/shop/products/henry-perfume-kids-50ml-169oz-254897_grande.jpg?v=1656445244"]
var currentIndex = 0;

$("#felsa").on("click", function () {
    $("#img").attr("src", array[currentIndex]);
    currentIndex = (currentIndex + 1) % array.length;
});




var array2=["Chic baby : 50DT","Tous : 40DT","Henry : 60DT"]


var currentIndex1 = 0;

$('#felsa').on("click", function () {
    $('#phrase').text(array2[currentIndex1]);
    currentIndex1 = (currentIndex1 + 1) % array2.length; // Fix the variable name here
});