const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close");
const cancelBtn = document.querySelector("#cancel-btn")
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");
const form = document.querySelector("#modal-content")
const errorMsg = document.querySelector("#error-msg")

// Mostrar el modal con animación
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalContent.classList.add("animate");
});

// Cerrar el modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
})

// Validar formulario al enviar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = form.uname.value.trim();
  const pass = form.psw.value.trim();

  // Usuario y contraseña fijos para prueba
  const validUser = "admin";
  const validPass = "1234";

  if (user === validUser && pass === validPass) {
    window.location.href = "bienvenido.html";
  } else {    
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
    errorMsg.style.display = "block";

    form.psw.value = "";
  }
});