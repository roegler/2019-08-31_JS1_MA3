//Use RegEx to validate form

function validateEmail(value) {
    var emailexpression = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneNumberExpresion = /^[0-9]{8}$/;
}

function submitFormButtonPressed() {
    var email = "" // Get this from the form input somehow...
    var emailExpression = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var isEmailValid = emailExpression.test(email);

    if (isEmailValid === false) {
        // Not valid email - tell the user.. abort abort!!
        return
    }

    var firstName = "";

    var isFirstnameValid = firstName.trim().length > 0;




}