const containers = document.querySelectorAll(".container1");

containers.forEach((container) => {
  const title = container.querySelector(".law-title");
  const listQuestion = container.querySelector(".container__list");
  const items = listQuestion ? listQuestion.querySelectorAll("li") : [];

  if (!title || !listQuestion) return;

  title.addEventListener("click", function (e) {
    e.preventDefault();

    // Close other containers
    containers.forEach((other) => {
      if (other === container) return;
      const otherList = other.querySelector(".container__list");
      if (!otherList) return;
      if (otherList.classList.contains("open")) {
        otherList.classList.remove("open");
        const otherItems = otherList.querySelectorAll("li");
        otherItems.forEach((item) => item.classList.remove("show"));
      }
    });

    // Toggle this container
    if (listQuestion.classList.contains("open")) {
      listQuestion.classList.remove("open");
      items.forEach((item) => item.classList.remove("show"));
    } else {
      listQuestion.classList.add("open");
      items.forEach((item, index) => {
        setTimeout(() => item.classList.add("show"), index * 100);
      });
    }
  });
});
