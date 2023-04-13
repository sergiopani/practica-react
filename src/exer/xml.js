console.log('Hola a todos');

fetch('data/productos.xml')
    .then(res => res.text())
    .then((data) => {
        console.log(data);
        //Objetivo -> convertir un xml en una data estructure en js
        const parser = new DOMParser;
        const domFromXml = parser.parseFromString(data, 'text/xml');
        console.log(domFromXml);
        const books = domFromXml.querySelectorAll('book');
        console.log(books);

        for (const book of books) {
            console.log(book.querySelector('title').innerHTML);
        }
    });