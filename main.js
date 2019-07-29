// Name and Password from the register-form

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("pass");


// Storing input from register-form
function storeUser() {

    localStorage.setItem('firstName', firstName.value)
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    let divDone = document.getElementById("done");
    divDone.style.display = "block";

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";


}

let registerBtn = document.getElementById("rgstr_btn");
registerBtn.addEventListener('click', storeUser, false);


let btnToLogin = document.getElementById("log");
btnToLogin.addEventListener('click', function () {
    window.location.href = "LogInPage/logIn.html";
});