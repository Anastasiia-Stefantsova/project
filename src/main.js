document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const url = this.getAttribute('href'); // Получаем URL из атрибута href

        // Показываем прелоадер
        showPreloader();

        // Затем переходим по URL через некоторое время (например, 1 секунду)
        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    });
});

function showPreloader() {
    // Здесь должен быть код, который показывает прелоадер на странице
    // Например, можно добавить элемент с классом preloader в DOM
    const preloader = document.createElement('div');
    preloader.classList.add('preloader');
    document.body.appendChild(preloader);
}