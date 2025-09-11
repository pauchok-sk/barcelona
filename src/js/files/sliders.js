export default function sliders() {
  const introSlider = document.querySelector(".intro__slider");

  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 8000,
      },
    });
  }

  const portfolioSlider = document.querySelector(".s-portfolio__slider");

  if (portfolioSlider) {
    const swiper = new Swiper(portfolioSlider, {
      speed: 800,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-portfolio .slider-nav__btn._prev",
        nextEl: ".s-portfolio .slider-nav__btn._next",
      },
    });
  }

  const reviewsSlider = document.querySelector(".s-reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 800,
      spaceBetween: 15,
      autoplay: {
        delay: 3200,
      },
      navigation: {
        prevEl: ".s-reviews .slider-arrow._prev",
        nextEl: ".s-reviews .slider-arrow._next",
      },
    });
  }

  const formatSlider = document.querySelector(".s-format__slider");

  if (formatSlider) {
    const swiper = new Swiper(formatSlider, {
      speed: 800,
      spaceBetween: 10,
      slidesPerView: 1,
      autoplay: {
        delay: 3200,
      },
      navigation: {
        prevEl: ".s-format .slider-nav__btn._prev",
        nextEl: ".s-format .slider-nav__btn._next",
      },
      breakpoints: {
        992: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        576: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
      },
    });
  }
}
