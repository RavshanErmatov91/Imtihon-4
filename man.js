"use strict";

let menuBox = document.getElementById("menu-box");
// let menuIcon = document.getElementById("#menuIcon");

$("#menuIcon").addEventListener("click", () => {
  menuBox.classList.toggle(".open-menu");
  //   console.log($("#menuBox"));
});

(function () {
  let userName = localStorage.getItem("user");
  let token = localStorage.getItem("token");

  $("#userLogin").innerHTML = `${userName}`;

  if (!token) {
    window.location.reload();
    location.replace("./login.html");
  }
})();
