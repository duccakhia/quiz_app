// Get form register element
const formRegister = document.getElementById("formregister");
const btnForgot = document.getElementById("btnForgot");
const nameElement = document.getElementById("yourname");
const loginElement = document.getElementById("login");
const passwordElement = document.getElementById("enterpassword");
const confirmPasswordElement = document.getElementById("re-enterpassword");

// lỗi
const nameError = document.getElementById("erroname");
const passwordError = document.getElementById("erropassword");
const confirmPasswordError = document.getElementById("erro-repassword");
const yournameError = document.getElementById("erroyourname");
const registerMessage = document.getElementById("registerMessage");

// localStorage
const usersLocal = JSON.parse(localStorage.getItem("users")) || [];

btnForgot.addEventListener("click", function () {
  window.location.href = "index.html";
});

formRegister.addEventListener("submit", function (event) {
  event.preventDefault(); // ngăn load trang

  // validate (xác nhận)
  nameError.style.display = loginElement.value ? "none" : "block";
  passwordError.style.display = passwordElement.value ? "none" : "block";
  confirmPasswordError.style.display = confirmPasswordElement.value
    ? "none"
    : "block";
  yournameError.style.display = nameElement.value ? "none" : "block";

  if (passwordElement.value && passwordElement.value.length <= 6) {
    passwordError.textContent = "Mật khẩu phải có hơn 6 kí tự";
    passwordError.style.display = "block";
  }

  if (
    passwordElement.value &&
    confirmPasswordElement.value &&
    passwordElement.value !== confirmPasswordElement.value
  ) {
    confirmPasswordError.textContent = "mật khẩu không khớp";
    confirmPasswordError.style.display = "block";
  }

  // ---- THỰC SỰ ĐĂNG KÝ THÀNH CÔNG ----
  if (
    loginElement.value &&
    passwordElement.value &&
    confirmPasswordElement.value &&
    nameElement.value &&
    passwordElement.value === confirmPasswordElement.value &&
    passwordElement.value.length >= 6
  ) {
    const exists = usersLocal.some((u) => u.username === loginElement.value);
    if (exists) {
      nameError.textContent = "Tài khoản đã tồn tại";
      nameError.style.display = "block";
      return;
    }

    const user = {
      userID: Math.ceil(Math.random() * 10000000),
      username: loginElement.value,
      password: passwordElement.value,
      yourname: nameElement.value,
    };

    usersLocal.push(user);
    localStorage.setItem("users", JSON.stringify(usersLocal));

    // ---- HIỆN THÔNG BÁO ĐÚNG CHỖ NÀY ----
    registerMessage.className = ""; // reset
    registerMessage.textContent =
      "Đăng ký thành công! Đang chuyển về trang đăng nhập...";
    registerMessage.classList.add("success");

    setTimeout(() => {
      registerMessage.classList.add("show");
    }, 50);

    const visibleTime = 3000;

    setTimeout(() => {
      registerMessage.classList.remove("show");
    }, visibleTime);

    setTimeout(() => {
      window.location.href = "login.html";
    }, visibleTime + 800);
  }
});
