
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

  window.takeScreenShot = function() {
      html2canvas(document.querySelector(" .vertical-blue")).then(canvas => {
      // document.body.appendChild(canvas);
       var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL();
    link.click();
  });
  }


  let btn_screen = document.querySelector('#screenshot');
  btn_screen.addEventListener('click', window.takeScreenShot);


  });
