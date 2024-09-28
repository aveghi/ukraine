document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('hidden');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
});
