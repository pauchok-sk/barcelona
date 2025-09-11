export default function mediaScroll() {
  const wrapper = document.querySelector(".s-media__gallery-wrapper");

  if (wrapper) {
    const btnNext = document.querySelector(".s-media .slider-nav__btn._next");
    const btnPrev = document.querySelector(".s-media .slider-nav__btn._prev");

    btnNext.addEventListener("click", scrollEnd);
    btnPrev.addEventListener("click", scrollStart);

    let index = 0;

    function scrollEnd() {
      index = index === 2 ? 0 : index + 1;
      let scroll = index * 310;

      wrapper.scrollTo({
        left: scroll,
        behavior: "smooth",
      });
    }
    function scrollStart() {
      index = index === 0 ? 2 : index - 1;
      let scroll = index * 310;

      wrapper.scrollTo({
        left: scroll,
        behavior: "smooth",
      });
    }
  }
}
