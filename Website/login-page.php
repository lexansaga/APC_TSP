<?php

?>
<!DOCTYPE html>
<html lang="en">

<html>
<head>
    <title>APC Identity Service</title>
    <link rel="stylesheet" type="text/css" href="src/css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
   
</head>
    <body background="src/assets/background.png">
    
    <!-- <main id="main-holder">
        <img src="apc%20logo.png" class="logo">
        <h1>APC STP Monitoring System</h1>    
    
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
        
        <form id="login-form">
            <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
            <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
            <input type="submit" value="Login" id="login-form-submit">   
        </form>
        </main>
    
    </body> -->

    <div class="form-container card">
        <img class="logo" src="src/assets/apc%20logo.png">
        <h1 class="title">APC STP Monitoring System</h1>
        <form id="login-form">
            <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username" />
            <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" />
            <input type="button" value="Login" id="login-form-submit" />

        </form>
    </div>

    <div class="notification">
        
        <div class="notif-container card">
            <div class="notif-data"> 
            <p class="notification-text">I am a notification</p>    
            </div>
            <p><button id="close"><i class='bx bx-x'></i></button></p>
        </div>
    </div>


    <script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
  <script  src="src/js/login.js"></script>
</body>
</html>