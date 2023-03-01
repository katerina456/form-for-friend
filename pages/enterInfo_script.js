let password = document.getElementById('password');
let mistakes = document.querySelectorAll('.mistake');
let hints = document.querySelectorAll('.about-form');
let button = document.querySelector('.button');

password.addEventListener('blur', () => {
    if (password.value.length < 8 ) {
        password.style.border = '1px solid #F90B27';
        button.setAttribute('disabled', true);
    }
})

password.addEventListener('focus', () => {
    password.style.border = '1px solid #7C7C7C';
})


let password2 = document.getElementById('password2');

password2.addEventListener('blur', () => {
    let mistake = mistakes[0];
    if (password2.value.length < 8 || password.value !== password2.value) {
        mistake.style.display = 'block';
        password2.style.border = '1px solid #F90B27';
        button.setAttribute('disabled', true);
    }
    
})

password2.addEventListener('focus', () => {
    let mistake = mistakes[0];
    mistake.style.display = 'none';
    password2.style.border = '1px solid #7C7C7C';
})


let nameUser = document.getElementById('name');

nameUser.addEventListener('blur', () => {
    let mistake = mistakes[1];
    let hint = hints[1];
    if (nameUser.value.length > 20 ) {
        setMistake(mistake, nameUser, hint);
    }
    else {
        button.removeAttribute('disabled');
    }
})

nameUser.addEventListener('focus', () => {
    let mistake = mistakes[1];
    let hint = hints[1];
    setUsual(mistake, nameUser, hint);
})


let birth = document.getElementById('birth');

birth.addEventListener('blur', () => {
    let mistake = mistakes[2];
    let hint = hints[2];
    let user = new Date(birth.value);

    if (checkAdult(user)) {    
        button.removeAttribute('disabled');
        return
    }

    setMistake(mistake, birth, hint);
})

birth.addEventListener('focus', () => {
    let mistake = mistakes[2];
    let hint = hints[2];

    setUsual(mistake, birth, hint);
})


let email = document.getElementById('email');

email.addEventListener('blur', () => {
    let mistake = mistakes[3];
    let hint = hints[3];
    if (!email.value.includes('@') ) {
        setMistake(mistake, email, hint);
    }
    else {
        button.removeAttribute('disabled');
    }
})

email.addEventListener('focus', () => {
    let mistake = mistakes[3];
    let hint = hints[3];

    setUsual(mistake, email, hint);
})


let tg = document.getElementById('tg');

tg.addEventListener('blur', () => {
    let mistake = mistakes[4];
    let hint = hints[4];
    if (tg.value.length < 5) {
        setMistake(mistake, tg, hint);
    }
    else {
        button.removeAttribute('disabled');
    }
})

tg.addEventListener('focus', () => {
    let mistake = mistakes[4];
    let hint = hints[4];

    setUsual(mistake, tg, hint);
})

function setMistake(mistake, input, hint) {
    mistake.style.display = 'block';
    input.style.border = '1px solid #F90B27';
    hint.style.display = 'none';
    button.setAttribute('disabled', true);
}

function setUsual(mistake, input, hint) {
    mistake.style.display = 'none';
    input.style.border = '1px solid #7C7C7C';
    hint.style.display = 'block';
}

function checkAdult(date) {
    let now = new Date();
    if (now.getFullYear() - date.getFullYear() > 18 || 
    now.getFullYear() - date.getFullYear() === 18 && now.getMonth() > date.getMonth() || 
    now.getFullYear() - date.getFullYear() === 18 && now.getMonth() === date.getMonth() && 
    now.getDate() > date.getDate()) {
        return true;
    }

    return false;
}                                