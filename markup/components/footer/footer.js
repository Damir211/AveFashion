$(document).ready(function(){
	$('.footer-head').on('click',function(){
		var cur = $(this);
		if(cur.parent().attr('id')=='block_open'){
			$('.footer-head').parent().removeAttr('id');
		}else{
		if ($(window).width() < 1024){
			$('.footer-head').parent().removeAttr('id');
			setTimeout(function () {
			cur.parent().attr('id','block_open');
			}, 800); 
			}
		}
	});
});
$(window).resize(function() {
	if ($(window).width() >= 1024) {
		$('.footer-head').parent().removeAttr('id');
	}
});