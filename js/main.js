function myFunction() {
  document.querySelector(".preloader").style.display = "none";
}
new WOW().init(),
  window.addEventListener("scroll", function () {
    document
      .querySelector(".navbar")
      .classList.toggle("sticky", 100 < window.scrollY);
  });
var backToTop = document.querySelector(".backToTop");
window.addEventListener("scroll", function () {
  backToTop.classList.toggle("sticky", 800 < window.scrollY);
}),
  backToTop.addEventListener("click", function () {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
  }),
  $(".brand-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: !0,
    autoplaySpeed: 2e3,
    infinite: !0,
    dots: !1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
  $(".latest-news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: !0,
    autoplaySpeed: 2e3,
    infinite: !0,
    dots: !1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
  $("[data-rel^=lightcase]").lightcase({ maxWidth: 1100, maxHeight: 800 }),
  $(".owl-carousel").owlCarousel({
    loop: !0,
    center: !0,
    margin: 10,
    autoplay: !1,
    autoplayTimeout: 2e3,
    nav: !1,
    dots: !0,
    responsive: { 0: { items: 1 }, 600: { items: 3 }, 992: { items: 5 } },
  });
var testimonial_content = $(".testimonial-content");
testimonial_content.owlCarousel({
  loop: !0,
  center: !0,
  margin: 10,
  nav: !1,
  dots: !1,
  mouseDrag: !1,
  touchDrag: !1,
  autoplayTimeout: 4e3,
  smartSpeed: 600,
  responsive: { 0: { items: 1 }, 992: { items: 1 }, 1e3: { items: 1 } },
});
var testimonial_img = $(".testimonial-img");
testimonial_img.owlCarousel({
  loop: !0,
  center: !0,
  margin: 10,
  nav: !1,
  dots: !1,
  mouseDrag: !1,
  touchDrag: !1,
  autoplayTimeout: 4e3,
  smartSpeed: 600,
  responsive: { 0: { items: 1 }, 992: { items: 3 }, 1e3: { items: 3 } },
}),
  $(".review_next").on("click", function () {
    testimonial_content.trigger("next.owl.carousel");
  }),
  $(".review_pre").on("click", function () {
    testimonial_content.trigger("prev.owl.carousel");
  }),
  $(".review_next").on("click", function () {
    testimonial_img.trigger("next.owl.carousel");
  }),
  $(".review_pre").on("click", function () {
    testimonial_img.trigger("prev.owl.carousel");
  });
