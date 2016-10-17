$(document).foundation()


$(document).foundation()
    //header transition
$(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".nav, .brand").css("background-color", "#ffffff"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".nav, .brand").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});



//slider


$(document).ready(function () {


    $('#leftNav').click(moveSlideLeft).click(setMarginWidth);
    $('#rightNav').click(moveSlideRight).click(setMarginWidth);


    var slidePosition = 0;

    function setMarginWidth() {
        var slideHolderMargin = -100 * slidePosition;
        $('.slide-holder').css("margin-left", slideHolderMargin + '%');
    }

    function moveSlideRight() {
        if (slidePosition == 1) {
            slidePosition = 0
        } else {
            slidePosition++;
        }
    }

    function moveSlideLeft() {
        if (slidePosition == 0) {
            slidePosition = 1
        } else {
            slidePosition = slidePosition - 1;
        }
    }



});


$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


