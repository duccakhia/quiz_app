const userLogin = JSON.parse(localStorage.getItem("loggedInUser"));
const userLoginElement = document.getElementById("userLogin");
const btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click", function () {
  if (btnLogin) {
    window.location.href = "join.html";
  }
});

if (userLoginElement) {
  if (userLogin) {
    userLoginElement.innerHTML = "Xin Chao: " + userLogin.yourname;
  } else {
    userLoginElement.innerHTML = "";
  }
}
