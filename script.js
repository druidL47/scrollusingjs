window.addEventListener("scroll", () => {
  const targetY = window.pageYOffset;
  if (targetY > 100) {
    document.querySelector(".nav").style.animationName = "background1";
  } else if (targetY < 100) {
    document.querySelector(".nav").style.animationName = "background2";
  }
});
