export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > header.clientHeight && scrollTop > lastScrollTop) {
        header.classList.add("_scroll");
      } else {
        header.classList.remove("_scroll");
      }

      if (scrollTop > 0) {
        header.classList.add("_bg");
      } else {
        header.classList.remove("_bg");
      }

      lastScrollTop = scrollTop;
    });
  }
}
