// preloader
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});

// team - owl carousel
$(document).ready(function() {
    $('.team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }

    });
});

// skills progress bar
$(document).ready(function() {

    $('.progress-elements').waypoint(function() {

        $('.progress-bar').each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

// services tabs: jquery responsive tabs plugin
$(document).ready(function() {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });

});

// portfolio item filters isotope plugin

$(window).on('load', function() {
    // // init Isotope
    //    var $grid = $('.isotope-container').isotope({
    //    // options
    //    });
    //    // filter items on button click
    //    $('.filters-btn').on( 'click', 'button', function() {
    //        var filterValue = $(this).attr('data-filter');
    //        $grid.isotope({ filter: filterValue });
    //    });
    //    $('.filters-btn').on( 'click', 'button', function() {
    //        $(this).addClass('active').siblings().removeClass('active');
    // });

    //initialize isotope
    $('.isotope-container').isotope({
        //options
    });
    // filter items on button click
    $('.filters-btn').on('click', 'button', function() {
        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $('.isotope-container').isotope({
            filter: filterValue
        });

        // active button
        $('.filters-btn').find('.active').removeClass('active');
        $(this).addClass('active');
    });

});


// portfolio items: magnific popup plugin
$(document).ready(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

});

// testimonial: owl carousel plugin
$(document).ready(function() {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });

});

// stats: counter up plugin
$(document).ready(function() {
    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

// clients: owl carousel plugin
$(document).ready(function() {
    $('.clients-list').owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

});

// render google map using javascript

$(window).on('load', function() {
    // Map Variable
    const adressString = 'Los Angeles, CA 589 USA';
    const myLatlng = { lat: 34.052240, lng: -118.243340 };

    // Render google map
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng,
    });
    // Marker
    const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to See Address",
    });
    // Info Window
    const infowindow = new google.maps.InfoWindow({
        content: adressString,
    });
    // show info window when user click marker
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

});

// Navbar Navigation: Show and Hide White Navigation

$(document).ready(function() {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function() {
        // show/hide nav on page load
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // show White nav
            $('nav').addClass('white-nav-top');
            // show back to top button
            // $('#back-to-top').fadeIn();

        } else {
            // Hide White Nav
            $('nav').removeClass('white-nav-top');
            // hide back to top button
            // $('#back-to-top').fadeOut();
        }
    }
});


// smooth scrolling

// $(document).ready(function() {

// });

// wow animation
$(document).ready(function() {
	new WOW().init();
});

$(window).on('load', function() {
	
});