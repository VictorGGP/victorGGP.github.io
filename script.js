const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Função para Ativar o 'DarkMode'
function toggleDarkMode() {
  body.classList.toggle("dark-mode");
}
// Verificar se o 'DarkMode' já está ativo
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  body.classList.add("dark-mode");
}

themeToggleBtn.addEventListener("click", () => {
  toggleDarkMode();

  // Salvar a preferência
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
});

