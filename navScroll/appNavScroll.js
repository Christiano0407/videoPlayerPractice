console.group("NavScroll");
// <<< Variables >>>
const body = document.body;
//const scrollUp = document.querySelector(`.scroll-up`);

let lastScroll = 0;

// <<< functions and events >>>
window.addEventListener(`scroll`, () => {
  const currentScroll = window.pageXOffset; // pageoffset = scrollY or X =

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove(`scroll-down`);
    body.classList.add(`scroll-up`);
  }
  lastScroll = currentScroll;
});

// <<< Llamado a function / ejecutar >>>

console.groupEnd();
