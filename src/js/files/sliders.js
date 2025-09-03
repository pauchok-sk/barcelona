export default function sliders() {
  const portfolioSlider = document.querySelector(".s-portfolio__slider");

  if (portfolioSlider) {
    const swiper = new Swiper(portfolioSlider, {
      speed: 800,
      slidesPerView: "auto",
      // autoplay: {
      //   delay: 3500,
      // },
      navigation: {
        prevEl: ".s-portfolio .slider-nav__btn._prev",
        nextEl: ".s-portfolio .slider-nav__btn._next"
      }
    })
  }
}