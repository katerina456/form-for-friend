let phone = document.getElementById('phone');
let mistake = document.querySelector('.mistake');

phone.addEventListener('blur', () => {
    let button = document.querySelector('.button');

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
    
    mistake.style.display = 'none';
    phone.style.border = '1px solid #7C7C7C';

})               