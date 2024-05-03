$(function () {
  let navToggler = $(".navbar-toggler");
  let header = $("header");
  let clicked = true;

  navToggler.click(function () {
    if (clicked) {
      header.css("background-color", "#32383c");
      clicked = false;
    } else {
      header.css("background-color", "transparent");
      clicked = true;
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      header.addClass("fixed-header-style");
    } else {
      header.removeClass("fixed-header-style");
    }
  });

  let headerHeight = header.outerHeight();
  $(".nav-link").click(function (e) {
    e.preventDefault();
    let sectionId = $(this).attr("href");
    $('html,body').animate({
      scrollTop:$(sectionId).offset().top - headerHeight
    },700)
  });

  // Hide the scroll-to-top button initially
  $(".scrollTopBtn").hide();

  // Show the scroll-to-top button and add animation if the user scrolls beyond the height of the home section
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".scrollTopBtn").show().addClass("bounceInUp");
    } else {
      $(".scrollTopBtn").hide().removeClass("bounceInUp");
    }
  });

  // Scroll smoothly to the top when the scroll-to-top button is clicked
  $(".scrollTopBtn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
        margin: 60,
        dots: true,
      },
      760: {
        items: 3,
        margin: 80,
      },
      992: {
        items: 5,
      },
    },
  });

  
});
