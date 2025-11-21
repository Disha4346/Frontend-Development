/** JS File for Form Validation - task3_formValidate.html
 * Validations through REGEX: name, email, contact, password
 */

function validateForm() {
    const name = document.forms["myForm"]["name"].value.trim();
    const email = document.forms["myForm"]["email"].value.trim();
    const contact = document.forms["myForm"]["contact"].value.trim();
    const password = document.forms["myForm"]["password"].value;
    const confirmPassword = document.forms["myForm"]["confirmPassword"].value;

    let errorMessage = "";
    let isValid = true;

    // Regex Rules
    const nameRegex = /^[A-Za-z ]{3,}$/;               // Only letters, min 3 chars
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;    // Basic email regex
    const contactRegex = /^[0-9]{10}$/;                // Exactly 10 digits
    const lowerCase = /[a-z]/;
    const upperCase = /[A-Z]/;
    const number = /[0-9]/;

    // Name validation
    if (!nameRegex.test(name)) {
        errorMessage += "Name must contain only letters and be at least 3 characters long.\n";
        isValid = false;
    }

    // Email validation
    if (!emailRegex.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
    }

    // Contact number validation
    if (!contactRegex.test(contact)) {
        errorMessage += "Contact number must be exactly 10 digits.\n";
        isValid = false;
    }

    // Password validation
    if (password.length < 8 ||
        !lowerCase.test(password) ||
        !upperCase.test(password) ||
        !number.test(password)) 
    {
        errorMessage += "Password must be at least 8 characters with 1 uppercase, 1 lowercase and 1 number.\n";
        isValid = false;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
        isValid = false;
    }

    // Output alert
    if (!isValid) {
        alert(errorMessage);
    } else {
        alert("Registration Successful!");
    }
}
