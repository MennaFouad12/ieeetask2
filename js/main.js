$(document).ready(function () {
  $("p").hide();
  
  $(".btn1").click(function () {
    $("button").css("background-image", "none");
    $(".btn1").css({
      "background-image": "linear-gradient(to left, #4dabff 0%, #62ddff 100%)",

    });
    
    $("p").hide();
    $(".p1").show();
    
  });
  $(".btn2").click(function () {
    $("button").css("background-image", "none");
    $(".btn2").css({
      "background-image": "linear-gradient(to left, #4dabff 0%, #62ddff 100%)",
    });
    $("p").hide();
    $(".p2").show();
    
  });
  $(".btn3").click(function () {
    $("button").css("background-image", "none");
    
    $(".btn3").css({
      "background-image": "linear-gradient(to left, #4dabff 0%, #62ddff 100%)",
    });
    $("p").hide();
    $(".p3").show();
    
  });
  $(".btn4").click(function () {
    $("button").css("background-image", "none");
   
    $(".btn4").css({
      "background-image": "linear-gradient(to left, #4dabff 0%, #62ddff 100%)",
    });
    $("p").hide();
    $(".p4").show();
  });
});
