const imgUrl = document.querySelector('#img-input');

const nameInput = document.querySelector('#name-input');

const profilePic = document.querySelector('#profile-pic');

const userName = document.querySelector('#user-name');

const addButton = document.querySelector('#add-button');

const cardRow = document.querySelector('#cards');

const errorMsg = document.querySelector('#error')

const cardsTotals = document.querySelector('#cards-totals')

//Greeting Prompt

const greetName = document.querySelector('#greet');
let userNameGreet = window.prompt('Enter Your Name');
greetName.textContent = ` ${userNameGreet} `;

//Event Listeners
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    //div for col
    const colDiv = document.createElement('div');
    colDiv.setAttribute('class', 'card bg-dark'); //adding div class

    //adding Profile Pic
    const profileDiv = document.createElement('IMG');
    profileDiv.setAttribute('class', "rounded float-start")
    profileDiv.setAttribute('src', profilePic.value)
    colDiv.appendChild(profileDiv);

    //adding User Name
    const userNameDiv = document.createElement('div')
    userNameDiv.setAttribute('class', 'card-header');
    userNameDiv.innerHTML = userName.value
    colDiv.appendChild(userNameDiv)
    userName.value = ''

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
    deleteButton.innerHTML = '<i class="bi bi-trash fs-3"></i>'
    deleteButton.setAttribute('class', 'btn btn-outline-danger text-white ')


    //Delete button Function 
    deleteButton.addEventListener('click', () => {
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
