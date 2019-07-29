$('#login-form').on('submit', function (e) {

    e.preventDefault();

});
//Validation
function checkUser() {
    // stored data from the register-form
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    // entered data from the login-form
    let userName = document.getElementById('loginUsername');
    let userPw = document.getElementById('loginPassword');

    // check if stored data from register-form is equal to data from login form
    if (userName.value !== storedUsername || userPw.value !== storedPassword) {
        confirm('Incorect username or password.Try again!');
    } else {
        window.location.href = "../ListAllEvents/listAllEvents.html";
    }
}
let loginBtn = document.getElementById("login_btn");
loginBtn.addEventListener('click', checkUser);