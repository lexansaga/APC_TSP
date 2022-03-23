const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "password") {
        alert("You have successfully logged in.");
          window.location.href = "index.php";
          setTimeout('myFunction()', 1000);
    
    } else {
        $('.notification').css({"display": "block"})  
        $('.notification-text'),text("Error Password!") 
    }

 
})