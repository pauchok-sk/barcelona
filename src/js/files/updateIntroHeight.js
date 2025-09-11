export default function updateIntroHeight() {
  const intro = document.querySelector(".intro");

  if (intro) {
    function update() {
      intro.style.minHeight = `${window.visualViewport.height}px`;
    }
  
    // window.visualViewport.addEventListener("resize", update);
    // window.visualViewport.addEventListener("scroll", update);
    update();
  }
}
