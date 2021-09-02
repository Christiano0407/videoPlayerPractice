console.group("Form Javascript Validation");
// < ========================== Variables ============================= >
// === ALL ID ===
let id = (id) => document.getElementById(id);
// === All Classes ===
let classes = (classes) => document.getElementsByClassName(classes);
// < ========================== Eventos ================================= >
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "E-mail cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

// El método trim( ) elimina los espacios en blanco en ambos extremos del string.
let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
// < ========================= ALL Console =============================== >
console.log(id);
console.log(classes);

console.log(username);

console.groupEnd();
