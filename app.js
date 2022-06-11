function submit() {
    var firstName = document.getElementById("fname");
    var fError = document.getElementById("fnameError");

    var lastName = document.getElementById("lname");
    var lError = document.getElementById("lnameError");

    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    var password = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    if (firstName.value === "") {
        fError.style.color = "white";
        fError.style.transition = "2s";
        fError.innerText = "Please enter first name!";
    } 
    else if (lastName.value === "") {
        lError.style.color = "white";
        lError.style.transition = "2s";
        lError.innerText = "Please enter last name!";
    } 
    else if (email.value === "") {
        emailError.style.color = "white";
        emailError.style.transition = "2s";
        emailError.innerText = "Please enter email!";
    } 
    else if (password.value === "") {
        passwordError.style.color = "white";
        passwordError.style.transition = "2s";
        passwordError.innerText = "Please enter password!";
    } 
    else {
        alert("Name: "+firstName.value+" "+lastName.value+"\n"+
        "Email: "+email.value+"\n"+
        "Password: "+password.value);
        
    };
}
