const toggleModeBtn = document.getElementById('toggleMode');
const body = document.body;

toggleModeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    toggleModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
