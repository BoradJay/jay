// Colorlib Banker Template JavaScript

(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#ftco-loader').length > 0) {
            $('#ftco-loader').removeClass('show');
        }
    });

    // Navbar
    var navbar = function() {
        if ($('#ftco-navbar').length) {
            $("#ftco-navbar").on('click', '.navbar-nav a', function(e) {
                var anchor = $(this);
                $('html, body').animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                e.preventDefault();
            });
        }

        // Navbar scroll
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled');
                }
            }
        });
    };
    navbar();

    // Navbar toggler for mobile
    $('.navbar-toggler').on('click', function() {
        var target = $(this).attr('data-target');
        $(target).toggleClass('show');
    });

    // Smooth scroll for anchor links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    // Dropdown menu
    $('.dropdown-toggle').dropdown();

    // Animation on scroll
    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function() {
                    $('body .ftco-animate.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeInUp') {
                                el.addClass('fadeInUp ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '95%' });
    };
    contentWayPoint();

    // Hero carousel or slider
    $('.hero-wrap').carousel({
        interval: 5000,
        pause: 'hover'
    });

    // Gallery filter (if needed)
    if ($('.gallery-filters').length > 0) {
        $('.filter-btn').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');

            if (filterValue == 'all') {
                $('.gallery-item').show();
            } else {
                $('.gallery-item').hide();
                $('.gallery-item[data-category="' + filterValue + '"]').show();
            }
        });
    }

    // Tab content
    $('#v-pills-tab a').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Bootstrap accordion for FAQ
    $('.accordion .card-header button').on('click', function() {
        var target = $(this).attr('data-target');
        var isCollapsed = $(target).hasClass('show');

        $('.accordion .collapse').removeClass('show');
        if (!isCollapsed) {
            $(target).addClass('show');
        }
    });

    // Testimonial carousel
    if ($('.carousel-testimony').length > 0) {
        $('.carousel-testimony').owlCarousel({
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: false,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    // Form validation and submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('input[placeholder="Your Name"]').val();
        var email = $('input[placeholder="Your Email"]').val();
        var subject = $('input[placeholder="Subject"]').val();
        var message = $('textarea[placeholder="Message"]').val();

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Simulate form submission
        alert('Thank you! Your message has been sent successfully.');
        this.reset();
    });

    // Newsletter form
    $('.subscribe-form').on('submit', function(e) {
        e.preventDefault();
        
        var email = $(this).find('input[type="text"]').val();
        
        if (!email) {
            alert('Please enter your email address');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });

    // Email validation function
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Pricing card interactions
    $('.pricing-entry .btn').on('click', function(e) {
        e.preventDefault();
        var planName = $(this).closest('.pricing-entry').find('h3').text();
        alert('You selected the ' + planName + ' plan. Redirecting to payment...');
    });

    // Service card learn more
    $('.services .btn, .learn-more').on('click', function(e) {
        e.preventDefault();
        var serviceName = $(this).closest('.services, .step-card').find('h3').text();
        alert('Learn more about ' + serviceName + '. Feature coming soon!');
    });

    // Counter animation
    var counter = function() {
        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                $('.number').each(function() {
                    var $this = $(this),
                        num = $this.data('number');
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });
            }
        }, { offset: '95%' });
    };
    counter();

    // Background image function
    var bgImage = function() {
        $('.bg-image').each(function() {
            var $this = $(this),
                image = $this.data('bg-image');
            $this.css('background-image', 'url(' + image + ')');
        });
    };
    bgImage();

    // Initialize everything when document is ready
    $(document).ready(function() {
        
        // Add animation classes to elements
        $('.ftco-animate').each(function() {
            $(this).attr('data-animate-effect', 'fadeInUp');
        });

        // Trigger animations for elements in viewport
        $('.ftco-animate').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                $(this).addClass('ftco-animated fadeInUp');
            }
        });

        // Active navigation highlight
        $(window).on('scroll', function() {
            var scrollPos = $(document).scrollTop();
            $('.navbar-nav a').each(function() {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position() && refElement.position().top <= scrollPos + 80 && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav li').removeClass("active");
                    currLink.parent().addClass("active");
                } else {
                    currLink.parent().removeClass("active");
                }
            });
        });

        // Social media links
        $('.ftco-footer-social a').on('click', function(e) {
            e.preventDefault();
            var platform = $(this).find('span').attr('class').replace('icon-', '');
            alert('Redirecting to our ' + platform + ' page...');
        });

        // Blog read more
        $('.blog-entry .btn').on('click', function(e) {
            e.preventDefault();
            var blogTitle = $(this).closest('.blog-entry').find('h3 a').text();
            alert('Opening blog post: "' + blogTitle + '". Feature coming soon!');
        });

        console.log('Colorlib Banker template initialized successfully!');
    });

})(jQuery);

// Fallback for if jQuery is not loaded
if (typeof jQuery === 'undefined') {
    console.log('jQuery not loaded, using vanilla JavaScript fallbacks...');
    
    document.addEventListener('DOMContentLoaded', function() {
        
        // Mobile menu toggle
        const navToggler = document.querySelector('.navbar-toggler');
        const navCollapse = document.querySelector('.navbar-collapse');
        
        if (navToggler && navCollapse) {
            navToggler.addEventListener('click', function() {
                navCollapse.classList.toggle('show');
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Simple accordion for FAQ
        document.querySelectorAll('.card-header button').forEach(button => {
            button.addEventListener('click', function() {
                const target = document.querySelector(this.getAttribute('data-target'));
                const isOpen = target.classList.contains('show');
                
                // Close all other accordions
                document.querySelectorAll('.collapse').forEach(collapse => {
                    collapse.classList.remove('show');
                });
                
                // Toggle current accordion
                if (!isOpen) {
                    target.classList.add('show');
                }
            });
        });

        // Form submissions
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you! Your message has been sent successfully.');
                this.reset();
            });
        }

        const subscribeForm = document.querySelector('.subscribe-form');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            });
        }

        // Add basic animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ftco-animated');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.ftco-animate').forEach(el => {
            observer.observe(el);
        });

        console.log('Vanilla JavaScript fallbacks initialized!');
    });
}