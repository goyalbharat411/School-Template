(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.admission-open').addClass('admission-bg-change');
        } 
        else {
            $('.admission-open').removeClass('admission-bg-change');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 15,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:3
            },
            1024:{
                items:4
            },
        }
    });

    //Gallery carousel
    const imageGrid = document.querySelector(".image-grid");
    const links = imageGrid.querySelectorAll("a");
    const imgs = imageGrid.querySelectorAll("img");
    const lightboxModal = document.getElementById("lightbox-modal");
    const bsModal = new bootstrap.Modal(lightboxModal);
    const modalBody = document.querySelector(".modal-body .container-fluid");

    for (const link of links) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const currentImg = link.querySelector("img");
        const lightboxCarousel = document.getElementById("lightboxCarousel");
        if (lightboxCarousel) {
        const parentCol = link.parentElement.parentElement;
        const index = [...parentCol.parentElement.children].indexOf(parentCol);
        const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
        bsCarousel.to(index);
        } else {
        createCarousel(currentImg);
        }
        bsModal.show();
    });
    }

    function createCarousel(img) {
    const markup = `
        <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-inner">
            ${createSlides(img)}
        </div> 
        <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        `;

    modalBody.innerHTML = markup;
    }

    function createSlides(img) {
    let markup = "";
    const currentImgSrc = img.getAttribute("src");

    for (const img of imgs) {
        const imgSrc = img.getAttribute("src");
        const imgAlt = img.getAttribute("alt");
        // const imgCaption = img.getAttribute("data-caption");

        markup += `
        <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
        <img src=${imgSrc} alt=${imgAlt}>
        </div>
        `;
    }

    return markup;
    }

    function createCaption(caption) {
    return `<div class="carousel-caption">
        <p class="m-0">${caption}</p>
        </div>`;
    }
    
})(jQuery);

