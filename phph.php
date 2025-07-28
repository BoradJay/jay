    <?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Banker Slider</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="phpc.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&display=swap" rel="stylesheet">

    <!-- Font Awesome (for icons) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </head>
    <body>

    <div class="hero">
    <!-- Navbar -->
    <div class="navbar">
        <div class="logo">Surat City Urban<span> .</span></div>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
        <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
        
    </div>

    <!-- Slides -->
    <div class="slides" id="slides">
        <div class="slide">
        <h1>FINANCING SOLUTIONS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!</p>
        </div>
        <div class="slide">
        <h1>WE SUPPORT YOUR GROWTH</h1>
        <p>Unlock the potential of your business with our financial tools. Trusted by thousands to deliver results and reliability.</p>
        </div>
        <div class="slide">
        <h1>EXPERT ADVICE YOU CAN TRUST</h1>
        <p>Our advisors are here to guide your financial journey. Personalized strategies that work for your goals.</p>
        </div>
    </div>

    <!-- Dots -->
    <div class="carousel-dots">
        <div class="dot active" onclick="moveToSlide(0)"></div>
        <div class="dot" onclick="moveToSlide(1)"></div>
        <div class="dot" onclick="moveToSlide(2)"></div>
    </div>

    <!-- Scroll Icon -->
    <div class="scroll-icon"></div>
    </div>

    <div class="con3"></div>

    <script>
    let currentSlide = 0;
    const slides = document.getElementById('slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = 3;

    function moveToSlide(slideIndex) {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        moveToSlide(currentSlide);
    }

    setInterval(autoSlide, 3000); // Slide every 5 seconds
    </script>

    </body>
    </html>
