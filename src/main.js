document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    // Проверяем, есть ли уже сохраненная тема
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    themeSwitch.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Сохраняем текущее состояние темы в localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.setItem('darkMode', 'false');
        }
    });
});