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



