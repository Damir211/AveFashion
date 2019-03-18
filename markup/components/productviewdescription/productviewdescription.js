$(document).ready(function(){
	$('.menu-item').on('click',function(){
		$('.menu-item').removeClass('active-item-menu');
		$(this).addClass('active-item-menu');
		var num = $(this).attr('data-item');
		num = Number(num);
		$('.productviewdescription__content').hide();
		$('.productviewdescription__content').eq(num).show();
	});
});