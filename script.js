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

    // const element = `<li>${myArray[i].name} ${myArray[i].last_name}, numero di telefono: ${myArray[i].num}</li>`;
    // ul.innerHTML += element;
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


// insertItem();
// function insertItem () {
//     myArray.forEach(element => {
//        contacts.innerHTML += `
//         <div class="contact">
//             <h2>${element.name} ${element.last_name}</h2>
//             <p>${element.num}</p>
//         </div>
//        ` 
//     });
// }


// let ul = document.querySelector('.list'); // crea un elemento ul

// myArray.forEach(function(element) {
//     let li = document.createElement('li'); // crea un elemento li
//     li.innerHTML = `${element.name} ${element.last_name}: ${element.num}`; // imposta il contenuto dell'elemento li
//     ul.appendChild(li); // aggiunge l'elemento li all'elemento ul
//   });
  
