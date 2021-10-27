
$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });