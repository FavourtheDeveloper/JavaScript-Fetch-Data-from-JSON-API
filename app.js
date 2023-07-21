const button = document.getElementById("button");
const showcase = document.getElementById("showcase");

button.addEventListener('click', getUsers);

function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((users) => {
           showcase.innerHTML += `<h1><br> ${users.id} ${users.name} ${users.email} <br></h1>`
        })
    })
}