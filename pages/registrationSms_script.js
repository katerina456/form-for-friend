let number = document.getElementById('number');
let mistake = document.querySelector('.mistake');

number.addEventListener('blur', () => {
    let button = document.querySelector('.button');

    if (number.value.length !== 4) {
        mistake.style.display = 'block';
        number.style.border = '1px solid #F90B27';

        let count = ['одной цифры', 'двух цифр', 'трех цифр', 
        'четырех цифр']

        mistake.textContent = number.value.length < 4 ? `Не хватает ${count[4-number.value.length-1]}` : 'Слишком много цифр';
        
        button.setAttribute('disabled', true);
    }
    else {
        button.removeAttribute('disabled');
    }
})

number.addEventListener('focus', () => {
    
    mistake.style.display = 'none';
    number.style.border = '1px solid #7C7C7C';
})                