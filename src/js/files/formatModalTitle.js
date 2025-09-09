export default function formatModalTitle() {
  const buttons = document.querySelectorAll('[data-format-title]');

  if (buttons.length) {
    const input = document.querySelector("#format-input");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.dataset.formatTitle;

        input.value = value;
      })
    })
  }
}