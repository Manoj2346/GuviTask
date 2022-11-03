function validateuser() {
    alert("Successfully loged in");
    return false;
}



// Javascript validation form register starts here

function usernamevalidate() {

    var UsernameRegister = document.getElementById("username").value;
    var UserError = document.getElementById("username");
    var SuccessMsg = document.getElementById("usersuccessMsg");
    var ErrorMsg = document.getElementById("userErrorMsg");
    var uservalidate = "^[a-zA-Z]+$";

    if (!UsernameRegister.match(uservalidate)) {
        UserError.style.border = ".2rem solid red";
        UserError.style.boxShadow = ".5rem .5rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    UserError.style.border = ".2rem solid green";
    UserError.style.boxShadow = ".5rem .5rem 0 #90EE90";

}

function emailvalidate() {

    var emailRegister = document.getElementById("email").value;
    var emailError = document.getElementById("email");
    var SuccessMsg = document.getElementById("emailsuccessMsg");
    var ErrorMsg = document.getElementById("emailErrorMsg");
    var emvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!emailRegister.match(emvalidate)) {
        emailError.style.border = ".2rem solid red";
        emailError.style.boxShadow = ".5rem .5rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    emailError.style.border = ".2rem solid green";
    emailError.style.boxShadow = ".5rem .5rem 0 #90EE90";

}

function passwordvalidate() {

    var passwordRegister = document.getElementById("password").value;
    var passwordError = document.getElementById("password");
    var SuccessMsg = document.getElementById("passsuccessMsg");
    var ErrorMsg = document.getElementById("passErrorMsg");
    var passvalidate = "^(.{0,6}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$";

    if (passwordRegister.match(passvalidate)) {
        passwordError.style.border = ".2rem solid red";
        passwordError.style.boxShadow = ".5rem .5rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    passwordError.style.border = ".2rem solid green";
    passwordError.style.boxShadow = ".5rem .5rem 0 #90EE90";

    return false;

}

function confirmpasswordvalidate() {

    var confirmPassRegister = document.getElementById("confirmpassword").value;
    var passwordRegister = document.getElementById("password").value;
    var confirmpassError = document.getElementById("confirmpassword");
    var SuccessMsg = document.getElementById("copasssuccessMsg");
    var ErrorMsg = document.getElementById("copassErrorMsg");

    if (passwordRegister != confirmPassRegister) {
        confirmpassError.style.border = ".2rem solid red";
        confirmpassError.style.boxShadow = ".5rem .5rem 0 #FFCCCB";
        ErrorMsg.style.visibility = "visible";
        SuccessMsg.style.display = "none";
        SuccessMsg.style.visibility = "hidden";
        ErrorMsg.style.display = "block";
        return false;
    }

    ErrorMsg.style.visibility = "hidden";
    SuccessMsg.style.display = "block";
    SuccessMsg.style.visibility = "visible";
    ErrorMsg.style.display = "none";
    confirmpassError.style.border = ".2rem solid green";
    confirmpassError.style.boxShadow = ".5rem .5rem 0 #90EE90";

}

// Javascript validation form register ends here

// Javascript forgot password section starts here

function toggle() {

    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
    var closeContent = document.getElementById("forgot-password");
    closeContent.classList.toggle('active');

}

function forgotemailvalidate() {

    var forgotemail = document.getElementById("email").value;
    var forgotemailError = document.getElementById("email");
    var forgotSuccessMsg = document.getElementById("forgotemailsuccessMsg");
    var forgotErrorMsg = document.getElementById("forgotemailErrorMsg");
    var forgotemvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (!forgotemail.match(forgotemvalidate)) {
        forgotemailError.style.border = ".2rem solid red";
        forgotemailError.style.boxShadow = ".5rem .5rem 0 #FFCCCB";
        forgotErrorMsg.style.visibility = "visible";
        forgotSuccessMsg.style.display = "none";
        forgotSuccessMsg.style.visibility = "hidden";
        forgotErrorMsg.style.display = "block";
        return false;
    }

    forgotErrorMsg.style.visibility = "hidden";
    forgotSuccessMsg.style.display = "block";
    forgotSuccessMsg.style.visibility = "visible";
    forgotErrorMsg.style.display = "none";
    forgotemailError.style.border = ".2rem solid green";
    forgotemailError.style.boxShadow = ".5rem .5rem 0 #90EE90";
    return false;

}

function forgotSend() {

    var forgotemail = document.getElementById("email").value;
    var forgotemvalidate = "^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$";

    if (forgotemail == "") {
        alert("please fill the email to continue");
        return false;
    }
    else if (!forgotemail.match(forgotemvalidate)) {
        alert("Email format is wrong..");
        return false;
    }
    else if (forgotemail.match(forgotemvalidate)) {
        alert("Change password mail send successsfully!!");
        window.location = "index.html";
        return false;
    }
    else {
        alert("Email not exist in database..");
        return false;
    }

}

// Javascript forgot password section ends here

function check(){
    window.location = "index.html";
    return false;
}
