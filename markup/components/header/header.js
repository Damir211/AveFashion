$(window).resize(function() {
    if ($(window).width() < 1024) {
        $('.slidebar__icon').css({'display':'block'});
    }else{
    	$('.slidebar__icon').css({'display':'none'});
    }
});
$(document).ready(function(){
	if ($(window).width() < 1024) {
        $('.slidebar__icon').css({'display':'block'});
    }else{
    	$('.slidebar__icon').css({'display':'none'});
    }
});
