const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");

// Mostrar el modal con animación
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalContent.classList.add("animate");
});

// Cerrar el modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
