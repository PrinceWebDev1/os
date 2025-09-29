let toggleBtn = document.querySelector('#theme-toggle');

toggleBtn.addEventListener('click', function () {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
})

function defaultTheme() {

    if (localStorage.getItem('theme')) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(localStorage.getItem('theme'));
    }
    else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

            document.body.classList.remove('light-theme', 'dark-theme');
            document.body.classList.add('dark-theme');
        }
    }
}

defaultTheme();