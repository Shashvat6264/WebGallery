var items = document.getElementsByClassName("item");

for (var i=0;i<items.length;i++){
    var item = items[i];
    var img = item.getElementsByTagName("img")[0];
    var overlay = item.getElementsByClassName("overlay")[0];
    var height = img.offsetHeight + "px";
    var width = img.offsetWidth + "px";
    overlay.style.height = height;
    overlay.style.width = width;
}

$(document).ready(function(){
    $(".item").hover(function(){
        $(this).children(".overlay").css("opacity","1");
        $(this).children("img").css("filter","blur(5px)");
        $(this).children("img").css("transform", "scale(1.1)");
    },
    function(){
        $(this).children(".overlay").css("opacity","0");
        $(this).children("img").css("filter","blur(0px)");
        $(this).children("img").css("transform", "scale(1)");
    });
});