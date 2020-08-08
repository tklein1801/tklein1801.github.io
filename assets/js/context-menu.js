const contextMenu = document.getElementById("context-menu");
const width = contextMenu.offsetWidth,
  height = contextMenu.offsetHeight;
contextMenu.classList.remove("show"); // make context-menu invisible
let shown = false;
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  if (shown == false) {
    const padding = 10;
    let x = event.clientX,
      y = event.clientY;

    if (x < padding) x = padding; // prevent overflowing on x
    let maxX = window.innerWidth - width - padding;
    if (x > maxX) x = maxX;

    if (y < padding) y = padding; // prevent oferlow on y
    let maxY = window.innerHeight - height - padding;
    if (y > maxY) y = maxY;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.classList.add("show");
    shown = true;
  } else {
    onClose();
  }
  document.addEventListener("click", function () {
    if (shown == true) {
      onClose();
    }
  });
});

// Close context-menu on scroll
window.addEventListener("scroll", function (event) {
  onClose();
});
function onClose() {
  contextMenu.classList.remove("show"); // make context-menu invisible
  shown = false;
}
