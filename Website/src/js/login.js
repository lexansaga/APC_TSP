const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

$(document).ready(function () {

})

$('#login-form-submit').click((e)=>
{
    e.preventDefault()
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "password") {
        alert("You have successfully logged in.");
    
          window.location.replace("../Website/index.php");
    } else {
        $('.notification').css({"display": "flex"})  
        $('.notification-text').text("Error Password!") 
    }

})

$('#close').click((e) =>
{
    $('.notification').css({"display": "none"})  
})

