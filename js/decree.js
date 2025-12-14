const links = document.querySelectorAll(".options__question li a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const url = this.getAttribute("href");

    // Nếu href rỗng ("") thì không làm gì
    if (!url) return;

    e.preventDefault();

    // thêm hiệu ứng cho toàn trang
    document.body.classList.add("fade-out");

    // chuyển trang sau hiệu ứng
    setTimeout(() => {
      window.location.href = url;
    }, 450);
  });
});
