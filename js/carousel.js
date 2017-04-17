(function( $ ) {
// $(document).ready(function() {
    
$.fn.carousel = function(){
    console.log("start");
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 125;

    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
// });
}
}( jQuery ));
// 
// 
// (function( $ ) {
 
//     $.fn.showLinkLocation = function() {
 
//         this.filter( "a" ).each(function() {
//             var link = $( this );
//             link.append( " (" + link.attr( "href" ) + ")" );
//         });
 
//         return this;
 
//     };
 
// }( jQuery ));

$(document).ready(function() {
	$(".carousel").carousel();
});