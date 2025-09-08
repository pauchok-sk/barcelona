export default function mediaScroll() {
  const wrapper = document.querySelector(".s-media__gallery-wrapper");

  if (wrapper) {
    const btnNext = document.querySelector(".s-media .slider-nav__btn._next");
    const btnPrev = document.querySelector(".s-media .slider-nav__btn._prev");

    btnNext.addEventListener("click", scrollEnd);
    btnPrev.addEventListener("click", scrollStart);

    function scrollEnd() {
      wrapper.scrollTo({
        left: wrapper.scrollWidth - wrapper.clientWidth, 
        behavior: "smooth",
      });
    }
    function scrollStart() {
      wrapper.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
