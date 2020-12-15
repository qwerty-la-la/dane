let modal = document.querySelector('.modal'),
    btn = document.querySelector('.btn-modal'),
    close = document.querySelector('.close');
    
    btn.onclick = function() {
        modal.style.display = 'block';
    }
    close.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = 'none';
        }
    }


    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
          items: 3,
          margin: 10,
          loop: true,
          nav: true
        });
      });


