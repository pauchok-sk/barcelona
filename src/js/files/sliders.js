export default function sliders() {
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
}
