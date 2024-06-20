const listItems = document.querySelectorAll(".list-item");
const indicator = document.getElementById("indicator");
let previousItem = 0;

listItems.forEach((item, index) => {
  item.addEventListener("click", function() {
    listItems[previousItem].classList.remove("active");
    this.classList.add("active");
    previousItem = index;
    if (index === 0) {
      indicator.removeAttribute("style");
      return;
    }
    indicator.setAttribute("style", `transform: translateX(${70 * index}px);`);
  });
});
