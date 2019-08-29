//Use RegEx to validate form
function submitFormButtonPressed() {
    var firstName = document.myForm.firstName.value;
    var lastName = document.myForm.lastName.value;
    var email = document.myForm.email.value;
    var phone = document.myForm.phone.value;

    console.log(firstName, lastName, email, phone);

    if (firstName == "") {
        alert("First name cannot be empty!");
        return;
    }

    if (lastName == "") {
        alert("Last name cannot be empty!");
        return;
    }

    var emailExpression = /^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,4}$/;
    var isEmailValid = emailExpression.test(email);

    if (isEmailValid == false) {
        alert("Sorry, your email is not valid")
        return;
    }

    var phoneNumberExpresion = /^[0-9]{8}$/;
    var isPhoneNumberValid = phoneNumberExpresion.test(phone);

    if (isPhoneNumberValid == false) {
        alert("Sorry, your number is not valid")
        return;
    }

    // whooo! all is good.

}