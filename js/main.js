$(document).ready(function() {
    // /test browser
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
        // At least Safari 3+: "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
        // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
        // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
        // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    // test if iPod, iPad, iPhone (no css fixed position support)
        //if true
            //hero background-attachment set to scroll
    if (navigator.userAgent.match(/(iPod|iPad|iPhone)/) || isSafari === true) {
        $('.hero').css({"background-attachment":"initial"});
        $('.hero-mobile').css({"background-attachment":"initial"});
    }

    //activate sticky header
    $(".sticky-header").sticky({topSpacing:0});





    //homepage image effect on hover fade in and fade out
    $('.image-holder').hover(
        function(){
                $(this).find('.caption').fadeIn(300);
        },  function(){
                $(this).find('.caption').fadeOut(300);
        }
    );

    //project image effect on hover fade in and fade out
    $('.project-image-holder').hover(
        function(){
                $(this).find('.project-caption').fadeIn(300);
        },  function(){
                $(this).find('.project-caption').fadeOut(300);
        }
    );




    //parallax effect on homepage
    (function(){

        var parallax = document.querySelectorAll(".hero"),
            speed = -0.2;

        window.onscroll = function(){
            [].slice.call(parallax).forEach(function(el,i){

                var windowYOffset = window.pageYOffset,
                    elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

                el.style.backgroundPosition = elBackgrounPos;

            });
        };

    })();





    // hero heart beating mobile
    function pulseMobile() {
        $('.heart-mobile').animate({
            opacity: 0.2
        }, 300,     function() {
            $('.heart-mobile').animate({
            opacity: 1
        }, 1200,    function() {
            pulseMobile();
            });
        }); 
    };
    pulseMobile();
               
    // hero heart beating desktop
    function pulse() {
        $('.heart').animate({
            opacity: 0.2
        }, 300,     function() {
            $('.heart').animate({
            opacity: 1
        }, 1200,    function() {
            pulse();
            });
        }); 
    };
    pulse();


    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    //scroll back-to-top button on click
    //after initial scroll
    var amountScrolled = 300;
    //show button
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
                $('a.back-to-top').fadeIn('slow');
        } else {
                $('a.back-to-top').fadeOut('slow');
        }
    });
    //scroll to tpo on click
    $('a.back-to-top').click(function() {
        $('html, body').animate({
                scrollTop: 0
        }, 700);
        return false;
    });


    //skills graph colors when visible in viewport
    //function determine if in viewport
    $.fn.inView = function(){
        var rect = this[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };


    //call function to determine if div is visible
    $(window).on('scroll',function(){
        //need this to get rid of ugly js console error when not on the homepage
        if (document.getElementById('progress-fill-container')) {
            if( $('.progress-fill').inView() ) {
                //if visible color the graph
                $('.progress-fill span').each(function(){
                    var percent = $(this).html();
                    $(this).parent().stop().animate(  //!!stop() is important for android mobile
                        {width: percent},'slow'  //use percentage in html to color span
                    );
                });
            }
        }

    });
});



                    






