const imgUrl = document.querySelector('#img-input');

const nameInput = document.querySelector('#name-input');

const addButton = document.querySelector('#add-button');

const cardRow = document.querySelector('#cards');

//Greeting Prompt

const greetName = document.querySelector('#greet');
let userName = window.prompt('Enter Your Name');
greetName.textContent = ` ${userName} `;

//Event Listeners
addButton.addEventListener('click', () => {
    event.preventDefault();
    //div for col
    const colDiv = document.createElement('div');
    colDiv.setAttribute('class', 'card bg-dark  '); //adding div class

    //inside div img url
    const imgCard = document.createElement('IMG');
    imgCard.setAttribute('class', 'card-img-top  w-100 rounded');
    imgCard.setAttribute(`src`, imgUrl.value);
    colDiv.appendChild(imgCard);
    imgUrl.value = ''


    //creating card body
    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')

    //Adding title to card   
    colDiv.appendChild(cardBody);

    //Creating card-title
    const cardTitle = document.createElement('h2')
    cardTitle.setAttribute('class', 'card-title text-center');

    //Adding delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="bi bi-trash3 fs-3"></i>'
    deleteButton.setAttribute('class', 'btn btn-outline-danger text-white ')
    //Delete button Function 
    deleteButton.addEventListener('click', () => {
        deleteButton.classList.toggle('delete')
        cardRow.removeChild(colDiv)
    })

    //appending delete button to card body
    colDiv.appendChild(deleteButton)

    //adding Name input value 
    cardTitle.innerHTML = nameInput.value
    cardBody.appendChild(cardTitle)
    nameInput.value = ''

    //Append to Col div
    cardRow.appendChild(colDiv)



})