let name = document.querySelector('#username');
let password = document.querySelector('#password');
let form = document.querySelector('#register-form');


let users = {};

function User(name, password){
    this.name = name;
    this.password = password;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameUser = name.value;
    const passwordUser = password.value;

    users.name = nameUser;
    users.password = passwordUser;

    if (form.username.value && form.password.value && form.repeatpassword && form.password.value == form.repeatpassword.value){
        fetch('/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(users),
            })
            .then((response) => response.json())
            .then((data) => {
                window.location = '../signin/signin.html';
            })
            .catch((error) => {
                console.error('Произошла ошибка:', error);
        });

    }

})








// const form = document.getElementById('register-form');
// form.onsubmit = () => {
//     event.preventDefault();
    //Получаем значения из формы
//     const username = form.elements.username.value;
//     const password = form.elements.password.value;

//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

    // if (form.username.value && form.password.value && form.repeatpassword && form.password.value == form.repeatpassword.value){
       
    // }
// }