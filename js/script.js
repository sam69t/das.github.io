
window.addEventListener('load', function() {


  // Glider Config
  new Glider(document.querySelector(".vertical-blue-0 .glider"), {
    scrollLock: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: '.vertical-blue-0 .glider-prev',
      next: '.vertical-blue-0 .glider-next'
    }
  });

  new Glider(document.querySelector(".vertical-blue-1 .glider"), {
    scrollLock: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: '.vertical-blue-1 .glider-prev',
      next: '.vertical-blue-1 .glider-next'
    }
  });
  

});
