let mybutton = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("pass");
    var icon = document.getElementById("toggleIcon");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        alert("Email cannot be empty");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    if (password.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    return true;
}

function validateForm1() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.trim() === "") {
        alert("Username cannot be empty");
        return false;
    }

    if (email.trim() === "") {
        alert("Email cannot be empty");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    if (password.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    if (confirmPassword.trim() === "") {
        alert("Please re-enter the password");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
function signUp() {
    if (validateForm1()) {
        document.getElementById("signupButton").addEventListener("click", function () {
            window.location.assign("LogIn.html");
        });

    }
}
function logIn() {
    if (validateForm()) {
        document.getElementById("loginButton").addEventListener("click", function () {
            window.location.assign("mainPage.html");
        });

    }
}
