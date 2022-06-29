const errMsg = document.querySelector('.error-msg');
let passwordMeetsMinLength = false;
let passwordsMatch = false;
function verifyPasswordLength(evt) {
    let password = evt.target.value;
    if (password.length < 8) {
       addPasswordLengthError(evt);
       passwordMeetsMinLength = false;
    } else {
        removePasswordLengthError(evt);
        passwordMeetsMinLength = true;
        validateInputs();
    }
}
function addPasswordLengthError(evt) {
    let inputField = evt.target;
    errMsg.textContent = '*Password must be at least 8 characters long';
    inputField.classList.add('error');
    inputField.addEventListener('input', verifyPasswordLength);
}
function removePasswordLengthError(evt) {
    let inputField = evt.target;
    errMsg.textContent = "";
    inputField.classList.remove('error');
    inputField.removeEventListener('input', verifyPasswordLength);
}
function verifyPasswordMatch(evt) {
    let firstPassword = document.getElementById('password');
    let secondPassword = evt.target;
    if (passwordMeetsMinLength && firstPassword.value == secondPassword.value) {
        removePasswordMatchError(evt);
        passwordsMatch = true;
        validateInputs();
    } else if (passwordMeetsMinLength) {
        addPasswordMatchError(evt);
        passwordsMatch = false;
    }
    else return;
}
function addPasswordMatchError(evt) { 
    let inputField = evt.target;
    errMsg.textContent = '*Passwords do not match';
    inputField.classList.add('error');
    inputField.addEventListener('input', verifyPasswordMatch);
}
function removePasswordMatchError(evt) {
    let inputField = evt.target;
    errMsg.textContent = "";
    inputField.classList.remove('error');
    inputField.removeEventListener('input', verifyPasswordMatch);
}
function validateInputs() {
    if (passwordMeetsMinLength && passwordsMatch) {
        enableSubmit();
    } else {
        disableSubmit();
    }
}
function enableSubmit() {
    let submitButton = document.getElementById('submit');
    submitButton.removeAttribute('disabled', '');
    submitButton.classList.remove('disabled');
}
function disableSubmit() {
    let submitButton = document.getElementById('submit');
    submitButton.setAttribute('disabled', '');
    submitButton.classList.add('disabled');
}
function addPasswordEvents() {
    document.getElementById('password').addEventListener('change', verifyPasswordLength);
    document.getElementById('confirm-password').addEventListener('change', verifyPasswordMatch);
}
window.addEventListener('load', addPasswordEvents);
window.addEventListener('load', disableSubmit);