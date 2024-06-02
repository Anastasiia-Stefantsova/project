const themeCheckbox = document.querySelector('.theme-checkbox');
const body = document.body;

themeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  }
});