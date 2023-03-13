const userName = document.querySelector('.Username');
const password = document.querySelector('.Password');
const regiterForm = document.querySelector('.register__form');
const allSpan = document.querySelectorAll('.smal')
const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function isEmail(email) {
    return validateEmail.test(email);
}
regiterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginFun()
    isEmail(userName.value)
})
function loginFun() {
    if (!isEmail(userName.value.trim()) && userName.value === '') {
        userName.classList.add('gd')
        allSpan[0].classList.add('smal1')


    }
    else {
        userName.classList.remove('gd')
        allSpan[0].classList.remove('smal1')
        userName.classList.add('grean');
    }
    if (password.value.trim() === '') {
        password.classList.add('gd')
        allSpan[1].classList.add('smal1')
    }
    // else if (passwordValue !== cnfpasswordValue) {


    //     password.classList.add('gd')
    //     allSpan[1].classList.add('smal1')
    // }

    else {
        password.classList.remove('gd')
        allSpan[1].classList.remove('smal1')
        password.classList.add('grean');

    }
    if (userName.value.trim() !== '' && password.value.length >= 8 ) {
        const token = 'jdsgkjdhweuriwryiyfew';
        window.location.href = (token, 'register.html')
        alert('Rostan ham ruyhatdan utmoqchimisiz')
    } else {
        alert('Notugri malumot kelyapti')
    }
    userName.value = '';
    password.value = '';
}