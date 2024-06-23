const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener("click", () => {
        input.classList.add("clicked");
    })
});


const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#first-name + span.error-msg");
firstName.addEventListener("input", () => {
    if (firstName.validity.valid) {
        firstNameError.textContent = "";
        firstNameError.className="error-msg";
    } else {
        show_firstName_error();
    }
});
function show_firstName_error() {
    firstNameError.textContent="Enter your first name";
    firstNameError.className="error-msg active";   
}

const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name + span.error-msg");
lastName.addEventListener("input", () => {
    if (lastName.validity.valid) {
        lastNameError.textContent = "";
        lastNameError.className="error-msg";
    } else {
        show_lastName_error();
    }
});
function show_lastName_error() {
    lastNameError.textContent="Enter your last name";
    lastNameError.className = "error-msg active";
}


const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error-msg");
email.addEventListener("input", () => {
    if (email.validity.valid) {
        emailError.textContent="";
        emailError.className="error-msg";
    } else {
        show_email_error();
    }
})
function show_email_error() {
    if (email.validity.valueMissing) {
        emailError.textContent="You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value need to be an email address";
    }
    emailError.className="error-msg active";
}


const phoneNumber = document.querySelector("#phone-number");
const phoneError = document.querySelector("#phone-number + span.error-msg");
phoneNumber.addEventListener("input", () => {
    if (phoneNumber.validity.valid) {
        phoneError.textContent="";
        phoneError.className="error-msg";
    } else {
        show_phoneNumber_error();
    }
});
function show_phoneNumber_error() {
    if (phoneNumber.validity.valueMissing) {
        phoneError.textContent="Please enter your phone number";
    } else if (phoneNumber.validity.patternMismatch) {
        phoneError.textContent="Entered number need to be in xxx-xxx-xxx format";
    }
    phoneError.className="error-msg active";
}

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error-msg");
password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className="error-msg";
    } else {
        show_password_error();

    }
})
function show_password_error() {
    if (password.validity.valueMissing) {
        passwordError.textContent="You need to enter a password";
    } else if (password.validity.tooShort) {
        passwordError.textContent=`Password should be at least 
        ${password.minLength}; you entered ${password.value.length}.`;
    } 
    passwordError.className="error-msg active";
}


const confirmPass = document.querySelector("#confirm-password");
const confirmPassError = document.querySelector("#confirm-password + span.error-msg");
confirmPass.addEventListener("input", ()=> {
    if (confirmPass.value != password.value) {
        confirmPass.classList.add("error");
        show_confirmPass_error();
    } else {
        confirmPass.classList.remove("error");
        confirmPassError.className="error-msg";
        confirmPassError.textContent="";
    }
});
function show_confirmPass_error() {
    confirmPassError.textContent="Password does not match";
    confirmPassError.className="error-msg active";
}

const form  = document.getElementsByTagName('form')[0];
form.addEventListener("submit", (event) => {
    if (!firstName.validity.valid) {
        show_firstName_error();
        event.preventDefault();
    } 
    if (!lastName.validity.valid) {
        show_lastName_error();
        event.preventDefault();
    } 
    if (!email.validity.valid) {
        show_email_error();
        event.preventDefault();
    } 
    if (!phoneNumber.validity.valid) {
        show_phoneNumber_error()
        event.preventDefault();
    } 
    if (!password.validity.valid) {
        show_password_error();
        event.preventDefault();
    } 
    if (!confirmPass.validity.valid) {
        show_confirmPass_error();
        event.preventDefault();
    }
});

