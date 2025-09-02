export default function burger() {
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");
  const burgerWrapper = document.querySelector("#burger-wrapper");
  const burger = document.querySelector("#burger");
  const overlay = document.querySelector("#burger-overlay");

  if (burgerWrapper) {
    overlay.addEventListener("click", handlerBurgerClose);

    burgerOpen.addEventListener("click", (e) => {
      e.stopPropagation();
      handlerBurgerOpen();
    });
    burgerClose.addEventListener("click", (e) => {
      e.stopPropagation();
      handlerBurgerClose();
    });

    function handlerBurgerClose() {
      burgerWrapper.classList.remove("_open");
      overlay.classList.remove("_active")
      document.body.classList.remove("body-hidden");
    }

    function handlerBurgerOpen() {
      burgerWrapper.classList.add("_open");
      overlay.classList.add("_active")
      document.body.classList.add("body-hidden");
    }

    function updateHeightBurger() {
      burgerWrapper.style.maxHeight = `${window.visualViewport.height}px`;
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }
}
