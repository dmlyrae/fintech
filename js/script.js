import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

const documentSlider = new Swiper('.documents-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    watchOverflow: false,
    width: 900,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },
    slidesPerView: 1,
    autoHeight: true,
    breakpoints: {
        320: {
          width: 300,
          slidesPerView: 1,
          spaceBetween: 20
        },
        720: {
          width: 600,
          slidesPerView: 2,
          spaceBetween: 30
        },
        1040: {
            width: 900,
            slidesPerView: 3,
            spaceBetween: 40
        }
      },
  });

  const menuButton = document.querySelector('.mobile-menu');
  const mobileMenu = document.querySelector('.mobile-menu-block');
  const main = document.querySelector('.main');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const lanSpan = document.querySelectorAll('.change-lan');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
  });
  main.addEventListener('click', (e)=> {
    let target = e.target;
    mobileMenu.classList.remove('active');
    menuButton.classList.remove('active');
  });
  mobileLinks.forEach((a) => {
    a.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuButton.classList.remove('active');
    })
  })
  lanSpan.forEach( (span) => {
    span.addEventListener('click', () => {
      lanSpan.forEach( (s) => {
        s.classList.toggle('active');
      });
    });
  });

