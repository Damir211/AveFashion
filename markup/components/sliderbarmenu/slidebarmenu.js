( function ( $ ) {
    // Create a new instance of Slidebars
    var controller = new slidebars();

    // Initialize Slidebars
    controller.init();

   // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );

    // Right Slidebar controls
    $( '.js-open-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-2' );
    } );

    $( '.js-close-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-2' );
    } );

    $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-2' );
    } ); 

    $('.close__slide').on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-2' );
    } );  

    $(document).ready(function(){
        if ($(window).width() >= 1024){
            event.stopPropagation();
            controller.close( 'slidebar-2' );
        }
    });
    $(window).resize(function() {
        if ($(window).width() >= 1024) {
            event.stopPropagation();
            controller.close( 'slidebar-2' );
        }
    });

} ) ( jQuery );

$(document).ready(function(){
    $('.slide_elem').on('click',function(){
        var curry = $(this);
        if($(this).attr('id')=="slide_open"){
            $('.slide_elem').removeAttr('id');
        }else{ 
            $('.slide_elem').removeAttr('id');
            setTimeout(function () {
                curry.attr('id','slide_open');
            }, 800);   
        }
    });
});