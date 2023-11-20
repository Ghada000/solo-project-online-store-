var array =["https://rukminim2.flixcart.com/image/612/612/kmjhw280/car-seat/c/e/w/jack-n-jill-grand-isofix-convertible-baby-car-seat-for-kids-of-0-original-imagfff8qzmtuczz.jpeg?q=70","https://rukminim2.flixcart.com/image/612/612/xif0q/car-seat/8/i/e/comfy-baby-car-seat-black-6-18307-baby-car-seats-luvlap-original-imagzdngf6bg2zzp.jpeg?q=70"]
currentIndex = 0

$("#felsa").on("click",function(){
    $(".img").attr("src",array[currentIndex])
    currentIndex=(currentIndex+1)%array.length
})

 var array2=["price : 300DT" ,"price : 400DT"]
 currentIndex1=0
$('#felsa').on("click",function(){
    $('#phrase').text(array2[currentIndex1])
    currentIndex1=(currentIndex1+1)%array.length
})
