var owl = $('#owl-carousels');
var team = $('#team-carousel');
owl.owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  nav: true,
});

team.owlCarousel({
  loop:true,
  autoplay:true,
  items:3,
  nav:true,
  dots:true,
  center:true,
  margin:10,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
  responsive:{
    0 : {
      items:1,
    },
    480 : {
      items:1,
    },
    768 : {
      items:3,
    }
  }
});
