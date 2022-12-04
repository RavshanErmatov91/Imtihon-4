"use strict";

"use strict";

let baseURL = "https://task.samid.uz/v1/user";

const registration = (e) => {
  e.preventDefault();

  const userName = $("#name").value.trim();
  const userEmail = $("#email").value.trim();
  const userPassword = $("#password").value.trim();

  // user11
  // user11@gmail.com
  // 12345user

  const params = {
    username: userName,
    email: userEmail,
    password: userPassword,
  };

  if (
    userName.length === 0 ||
    userEmail.length === 0 ||
    userPassword.length === 0
  ) {
    alert("Please enter your username and email address");
  } else {
    fetch(`${baseURL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((e) => e.json())
      .then((e) => {
        if (e.code === 1) {
          alert(e.message);
          console.log(e);
          setTimeout(() => {
            window.location.replace("./login.html");
          }, 2000);
        } else {
          console.log(e);
          alert(e.errors.username);
        }
      });
  }
};

$("#reg").addEventListener("submit", (e) => {
  registration(e);
});

var passwordField = document.querySelector(".password");
var show = document.querySelector(".show");
var hide = document.querySelector(".hide");

show.onclick = function () {
  passwordField.setAttribute("type", "text");
  show.style.display = "none";
  hide.style.display = "block";
};
hide.onclick = function () {
  passwordField.setAttribute("type", "password");
  hide.style.display = "none";
  show.style.display = "block";
};
//--------------login form -----------------------------------------------
