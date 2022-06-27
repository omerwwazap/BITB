jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");

    /*
        Wow
    */
    new WOW().init();

    /*
        Countdown initializer
        Check later: 
        https://stackoverflow.com/questions/13412153/countdown-timer-that-doesnt-reset-when-you-refresh-the-page
        http://keith-wood.name/countdown.html
    */
    var now = new Date();
    var countTo = 30 * 24 * 60 * 60 * 1000 + now.valueOf();
    $('.timer').countdown(countTo, function(event) {
        $(this).find('.days').text(event.offset.totalDays);
        $(this).find('.hours').text(event.offset.hours);
        $(this).find('.minutes').text(event.offset.minutes);
        $(this).find('.seconds').text(event.offset.seconds);
    });

});

var minimize = document.getElementById("minimize");
var square = document.getElementById("square");
var exit = document.getElementById("exit");
var titleBar = document.getElementById("title-bar");

////////////////// Hover listeners //////////////////
// Check if the dark-mode Media-Query matches
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    minimize.addEventListener('mouseover', function handleMouseOver() {
        minimize.style.backgroundColor = '#272727';
        minimize.style.cursor = 'context-menu';
    });

    minimize.addEventListener('mouseout', function handleMouseOut() {
        minimize.style.backgroundColor = 'black';
        minimize.style.cursor = 'default';
    });

    square.addEventListener('mouseover', function handleMouseOver() {
        square.style.backgroundColor = '#272727';
        square.style.cursor = 'context-menu';
    });

    square.addEventListener('mouseout', function handleMouseOut() {
        square.style.backgroundColor = 'black';
        square.style.cursor = 'default';
    });

    exit.addEventListener('mouseover', function handleMouseOver() {
        exit.style.backgroundColor = 'red';
        exit.style.cursor = 'context-menu';
    });

    exit.addEventListener('mouseout', function handleMouseOut() {
        exit.style.backgroundColor = 'black';
        exit.style.cursor = 'default';
    });

    titleBar.addEventListener('mouseover', function handleMouseOver() {
        titleBar.style.cursor = 'context-menu';
    });

    titleBar.addEventListener('mouseout', function handleMouseOver() {
        titleBar.style.cursor = 'default';
    });
} else {
    minimize.addEventListener('mouseover', function handleMouseOver() {
        minimize.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
        minimize.style.cursor = 'context-menu';
    });

    minimize.addEventListener('mouseout', function handleMouseOut() {
        minimize.style.backgroundColor = '#d6dae0';
        minimize.style.cursor = 'default';
    });

    square.addEventListener('mouseover', function handleMouseOver() {
        square.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
        square.style.cursor = 'context-menu';
    });

    square.addEventListener('mouseout', function handleMouseOut() {
        square.style.backgroundColor = '#d6dae0';
        square.style.cursor = 'default';
    });

    exit.addEventListener('mouseover', function handleMouseOver() {
        exit.style.backgroundColor = '#E81123';
        exit.style.cursor = 'context-menu';
    });

    exit.addEventListener('mouseout', function handleMouseOut() {
        exit.style.backgroundColor = '#d6dae0';
        exit.style.cursor = 'default';
    });

    titleBar.addEventListener('mouseover', function handleMouseOver() {
        titleBar.style.cursor = 'context-menu';
    });

    titleBar.addEventListener('mouseout', function handleMouseOver() {
        titleBar.style.cursor = 'default';
    });
}


//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window');
var title = $('#title-bar');

title.on('mousedown', function(e) {
    var dr = $(draggable).addClass("drag");
    height = dr.outerHeight();
    width = dr.outerWidth();
    ypos = dr.offset().top + height - e.pageY,
        xpos = dr.offset().left + width - e.pageX;
    $(document.body).on('mousemove', function(e) {
        var itop = e.pageY + ypos - height;
        var ileft = e.pageX + xpos - width;
        if (dr.hasClass("drag")) {
            dr.offset({ top: itop, left: ileft });
        }
    }).on('mouseup', function(e) {
        dr.removeClass("drag");
    });
});
//////////////// Make window draggable end ////////////////


////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function() {
    $("#window").css("display", "none");
});

// _ button functionality - > Curently acts as an X(exit) button
$("#minimize").click(function() {
    $("#window").css("display", "none");
});

// Maximize button functionality
$("#square").click(enlarge);

function enlarge() {
    if (square.classList.contains("enlarged")) {
        $("#window").css("width", "40%");
        $("#title-bar-width").css('width', '100%').css('width', '+=2px');
        $("#content").css("width", "100%");
        $("#square").removeClass("enlarged");
    } else {
        $("#window").css("width", "70%");
        $("#title-bar-width").css('width', '100%').css('width', '+=2px');
        $("#content").css("width", "100%");
        $("#square").addClass("enlarged");
    }
}


//// Pop-up appear on click with delay ////
$("#clickme").click(function() {
    $("#window").fadeIn(300);
});