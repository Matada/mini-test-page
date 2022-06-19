function writeMessage() {
    var firstNameValue = document.getElementById("firstName").value;
    var secondNameValue = document.getElementById("secondName").value;
    var passwordValue = document.getElementById("password").value;

    document.getElementById("firstNameText").innerHTML = firstNameValue;
    document.getElementById("secondNameText").innerHTML = secondNameValue;
    document.getElementById("passwordText").innerHTML = passwordValue;
}
