document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const robotFace = document.querySelector(".robot-face");

  // Mantener los ojos cerrados al inicio
  robotFace.classList.add("closed");

  // Escuchar cambios en el checkbox
  togglePassword.addEventListener("change", function () {
    passwordInput.type = this.checked ? "text" : "password";

    // Abrir o cerrar los ojos según el estado del checkbox
    if (this.checked) {
      robotFace.classList.remove("closed"); // Abre los ojos
    } else {
      robotFace.classList.add("closed"); // Cierra los ojos
    }
  });
  // Funcionalidad para mostrar/ocultar contraseña
  document
    .getElementById("togglePassword")
    .addEventListener("change", function () {
      const passwordInput = document.getElementById("password");
      passwordInput.type = this.checked ? "text" : "password";
    });
});
