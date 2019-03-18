$(function() {
 $(".productviewtovar__slider").owlCarousel({
 	items:1,
 	smartSpeed:1000,
 	dots:false
 });
});

var $easyzoom = $('.easyzoom').easyZoom();

$(".slider-next").click(function(){
	$(".productviewtovar__slider").trigger("next.owl.carousel");
});
$(".slider-prev").click(function(){
	$(".productviewtovar__slider").trigger("prev.owl.carousel");
});

$('.qty_plus').on('click',function(){
	var val = $(this).parent().children('.input_qty').val();
	val=Number(val);
	val=val+1;
	$(this).parent().children('.input_qty').val(val);
});
$('.qty_minus').on('click',function(){
	var val = $(this).parent().children('.input_qty').val();
	val=Number(val);
	val=val-1;
	if(val>0){
	$(this).parent().children('.input_qty').val(val);
	}
});