const regiterForm = document.querySelector('.register__form');
const firstName = document.querySelector('.Firstname');
const lastName = document.querySelector('.Lastname');
const userName = document.querySelector('.Username');
const password = document.querySelector('.Password');
const conPassword = document.querySelector('.Conpassword');
const allSpan = document.querySelectorAll('.leni')
const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function isEmail(email) {
    return validateEmail.test(email);
}
regiterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    valeFun()
    isEmail(userName)
})
function valeFun() {
    const userNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = userName.value.trim();
    const passwordValue = password.value.trim();
    const cnfpasswordValue = conPassword.value.trim();
    if (userNameValue === '' && lastNameValue === '' && emailValue === '' && passwordValue === '' && cnfpasswordValue === '' && passwordValue !== cnfpasswordValue && passwordValue.length > 8) {

    } else {
        const small = formControl.querySelector('small');
small.remove()

    }
}








