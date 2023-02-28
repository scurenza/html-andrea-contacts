let myArray = [];
const contacts = document.querySelector('.contacts');
const ul = document.querySelector(".list");

function getData(callback) {
  fetch('http://127.0.0.1:8000/api/contacts')
    .then(response => response.json())
    .then(data => {
      myArray = data.results;
      callback(); // chiama la funzione di callback dopo che l'array è stato popolato
    });
}

function doSomethingWithData() {
  console.log(myArray); // accede all'array solo dopo che è stato popolato

    let i = 0;
    while (i < myArray.length) {

    const contact = `
    <div class="contact">
        <h2>${myArray[i].name} ${myArray[i].last_name}</h2>
        <p>Numero: ${myArray[i].num}</p>
    </div>
    `;
    contacts.innerHTML += contact;
    i++;
    };
}

getData(doSomethingWithData); // passa la funzione doSomethingWithData come callback



