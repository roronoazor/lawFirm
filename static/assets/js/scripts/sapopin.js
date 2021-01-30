// FUNCTION PREPARES AND EXECURES POPINS
// Customize the animation as follows:
// first, you want to give each element a custom data-attribute data-sapopin. You can define 
//   the direction with by setting the attribute to left or right, or none, which would be
//   from the bottom by default.
// second is the amount of pixels to be scrolled in, i.e. how much the element travels.
// third is the starting-opacity (Do you want it to fade in as well?)
// fourth is the speed in seconds.
function saPopIn($pix, $op, $speed){
    var $vh = "innerHeight" in window 
           ? window.innerHeight
           : document.documentElement.offsetHeight; 
    
    // array to hold each element   
    $el = $($("[data-sapopin]"));  
    
    // function gets the document ready, i.e. offsets all boxes we are addresssing
    var readyDocuemnt = function(){
        // checks for the directional indicator and adds styles accordingly
        for (i = 0 ; i < $el.length ; i++){

            // this makes sure we apply the pop-in styles only to elements that are not alrady 
            //  in view, i.e. elements who's offset().top, its position from the top, is
            //  bigger than the height of the current window.
            if (  ($($el[i])).offset().top > $vh  ){

                if ($($el[i]).attr("data-sapopin") === "right"){
                    $($el[i]).css("transform", "translate3D("+ -$pix+"px, 0px, 0px)");         
                }
                else if ($($el[i]).attr("data-sapopin") === "left"){
                    $($el[i]).css("transform", "translate3D("+$pix+"px, 0px, 0px)");        
                }
                else{
                    $($el[i]).css("transform", "translate3D(0px, "+$pix+"px, 0px)");  
                }   
                // adds other styles needed
                $($el[i]).css("opacity", $op);
                $($el[i]).css("transition", "all " +$speed+"s");
            }
        }
    }
    // executes the function from above.
    readyDocuemnt();
    // when the window scrolls
    $(window).scroll( function(){
        // position scrolled from the top
        var $wp = $(window).scrollTop();
        // if the scrollposition is zero pixels from the top, (re)-ready the docuemnt
        if ($wp === 0){
            readyDocuemnt();   
        }
        // current height of view (distance from top to bottom of browser windwo)
        var $vh = "innerHeight" in window 
           ? window.innerHeight
           : document.documentElement.offsetHeight; 
        // for each element, make the pop-in happen
        for (i = 0 ; i < $el.length ; i++){
            if ( $wp > $($el[i]).offset().top-$vh ){
                $($el[i]).css("transform", "translate3D(0px, 0px, 0px)");  
                $($el[i]).css("opacity", "1");
            }
        }   
    });
}

$(function(){saPopIn(50, 0.1, 0.3);});