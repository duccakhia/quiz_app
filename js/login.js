const formLogin = document.getElementById("formLogin");
const loginElement = document.getElementById("login");
const passwordElement = document.getElementById("register");
const btnRegister = document.getElementById("btnRegister");

// Listen for form submit event
btnRegister.addEventListener("click", function () {
  window.location.href = "register.html"; // Chuyển hướng về trang đăng ký
});

formLogin.addEventListener("submit", function (event) {
  event.preventDefault(); //ngan chan event loading lai trang

  // validate(xác minh) dữ liệu đầu và

  // lấy dữ liệu từ local về

  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];

  // tìm kiếm dữ liệu người dùng theo username và password có trên local hay không
  const userFound = usersLocal.find(
    (user) =>
      user.username === loginElement.value &&
      user.password === passwordElement.value
  );
  if (!userFound) {
    // nếu không thì hiện thông báo lỗi đăng nhập sai
    alert("tên đăng nhập hoặc mật khẩu không đúng");
  } else {
    // nếu có thì hiện thị về trang chủ
    alert("đăng nhập thành công");
    window.location.href = "index.html"; // Chuyển hướng về trang chủ

    // lưu thông tin đăng nhập vào localstorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(userFound));
  }
});
