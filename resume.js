$(document).ready(function() {
    $(".right-nav a").first("a").next("a").next("a").next("a").hide(0).delay(300).fadeIn(400);
    $(".right-nav a").first("a").next("a").next("a").hide(0).delay(450).fadeIn(400);
    $(".right-nav a").first("a").next("a").hide(0).delay(600).fadeIn(400);
    $(".right-nav a").first("a").hide(0).delay(750).fadeIn(400);
        
    var contentSection = $('.section-nav');
	var navigation = $('.right-nav');
    
    navigation.on('click', 'a', function(event){
		event.preventDefault(); //prevents previous event
		smoothScroll($(this.hash));
	});
    
    $(window).on('scroll', function(){
		updateNav();
	});
    updateNav();
    
    function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top - 50
		}, 800);
	};
    
    function updateNav(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			var navigationMatch = $('nav a[href="#' + sectionName + '"]');
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
				{
					navigationMatch.addClass('active-section');
				}
			else {
				navigationMatch.removeClass('active-section');
			}
		});
	};
});