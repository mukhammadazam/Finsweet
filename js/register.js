const regiterForm = document.querySelector('.register__form');
const firstName = document.querySelector('.Firstname');
const lastName = document.querySelector('.Lastname');
const userName = document.querySelector('.Username');
const password = document.querySelector('.Password');
const conPassword = document.querySelector('.Conpassword');
const allSpan = document.querySelectorAll('.smal')
const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formcontrol = document.querySelector('.formcontrol')

function isEmail(email) {
    return validateEmail.test(email);
}
regiterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = userName.value.trim();
    const passwordValue = password.value.trim();
    const cnfpasswordValue = conPassword.value.trim();
    if (userNameValue === '') {
        firstName.classList.add('gd')
        allSpan[0].classList.add('smal1')
    } else {
        firstName.classList.remove('gd')
        allSpan[0].classList.remove('smal1')
        firstName.classList.add('grean');
    }
    if (lastNameValue === '') {
        lastName.classList.add('gd')
        allSpan[1].classList.add('smal1')
    } else {
        lastName.classList.remove('gd')
        allSpan[1].classList.remove('smal1')
        lastName.classList.add('grean');
    }
    if (!isEmail(emailValue) && emailValue === '') {
        userName.classList.add('gd')
        allSpan[2].classList.add('smal1')


    }
    else {
        userName.classList.remove('gd')
        allSpan[2].classList.remove('smal1')
        userName.classList.add('grean');
    }
    if (passwordValue === '') {
        password.classList.add('gd')
        allSpan[3].classList.add('smal1')


    } else if (passwordValue !== cnfpasswordValue) {


        password.classList.add('gd')
        allSpan[3].classList.add('smal1')
    }

    else {
        const token = 'jdsgkjdhweuriwryiyfew';
        window.location.href = (token, 'blog.html')
        password.classList.remove('gd')
        allSpan[3].classList.remove('smal1')
        password.classList.add('grean');

    }
    if (cnfpasswordValue === '') {
        conPassword.classList.add('gd')
        allSpan[4].classList.add('smal1')


    } else if (cnfpasswordValue !== passwordValue) {


        conPassword.classList.add('gd')
        allSpan[4].classList.add('smal1')
    }

    else {
        const token = 'jdsgkjdhweuriwryiyfew';
        window.location.href = (token, 'blog.html')
        conPassword.classList.remove('gd')
        allSpan[4].classList.remove('smal1')
        conPassword.classList.add('grean');

    }
})








