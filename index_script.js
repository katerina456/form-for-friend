let phone = document.getElementById('phone');
let mistakes = document.querySelectorAll('.mistake');
let button = document.querySelector('.button');

phone.addEventListener('blur', () => {
    let mistake = mistakes[0];

    if (phone.value.length !== 11) {
        mistake.style.display = 'block';
        phone.style.border = '1px solid #F90B27';

        let count = ['одной цифры', 'двух цифр', 'трех цифр', 
        'четырех цифр', 'пяти цифр', 'шести цифр', 'семи цифр', 
        'восьми цифр', 'девяти цифр', 'десяти цифр', 'одиннадцати цифр']

        mistake.textContent = phone.value.length < 11 ? `Не хватает ${count[11-phone.value.length-1]}` : 'Слишком много цифр';
    
        button.setAttribute('disabled', true);
    }
    else {
        button.removeAttribute('disabled');
    }
})

phone.addEventListener('focus', () => {
    let mistake = mistakes[0];
    mistake.style.display = 'none';
    phone.style.border = '1px solid #7C7C7C';
})

let password = document.getElementById('password');

password.addEventListener('blur', () => {
    let mistake = mistakes[1];
    if (password.value.length < 8 ) {
        mistake.style.display = 'block';
        password.style.border = '1px solid #F90B27';

        button.setAttribute('disabled', true);
    }
    else {
        button.removeAttribute('disabled');
    }
})

password.addEventListener('focus', () => {
    let mistake = mistakes[1];
    mistake.style.display = 'none';
    password.style.border = '1px solid #7C7C7C';
})                        