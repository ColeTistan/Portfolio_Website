/* global variables */
const menuToggle = document.getElementById('toggle-menu');
const navList = document.getElementById('nav-list');

/* import html files to app.html */
const getHtmlFile = (fileName) => {
    fetch(`./${fileName}/${fileName}.html`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById(fileName).innerHTML = data;
        })
}

getHtmlFile('services');
getHtmlFile('footer');

/* toggle navigation menu */
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
})

