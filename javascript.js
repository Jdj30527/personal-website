$(document).ready(function(){
    
    $(".header a").first("a").hide(0).delay(500).fadeIn(400);
    $(".header a").first("a").next("a").hide(0).delay(650).fadeIn(400);
    $(".header a").first("a").next("a").next("a").hide(0).delay(800).fadeIn(400);
    $(".header a").first("a").next("a").next("a").next("a").hide(0).delay(900).fadeIn(400);
    $("#lay9").hide(0).delay(1100).fadeIn(400);
    $("#lay8").hide(0).delay(1200).fadeIn(400);
    $("#lay7").hide(0).delay(1300).fadeIn(400);
    $("#lay6").hide(0).delay(1400).fadeIn(400);
    $("#lay5").hide(0).delay(1500).fadeIn(400);
    $("#lay4").hide(0).delay(1600).fadeIn(400);
    $("#lay3").hide(0).delay(1700).fadeIn(400);
    $("#lay2").hide(0).delay(1800).fadeIn(400);
    $("#lay1").hide(0).delay(1900).fadeIn(1000);
    $(".icon").hide(0).delay(1900).fadeIn(1000);
    
    $(".vt").css("left", $(".about-table").width()/5);
    $(".retreat").css("left", $(".about-table").width()/100);
    
    $(".icon").on('click', function(event) {
        event.preventDefault();
        smoothScroll($("#about"));
    });
    
    function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top - 50
		}, 800);
	};

});

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    
    
});

