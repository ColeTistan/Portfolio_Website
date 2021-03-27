const getHtmlFile = (fileName) => {
    fetch(`./${fileName}.html`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById(fileName).innerHTML = data;
        })
}

getHtmlFile('header');
getHtmlFile('services');
getHtmlFile('footer');
