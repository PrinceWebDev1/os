const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const form = document.getElementById('checkerForm');
const togglePw = document.getElementById('togglePw');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+\=\[\]{};:'",.<>\/?\\|`~])[A-Za-z\d!@#$%^&*()_\-+\=\[\]{};:'",.<>\/?\\|`~]{8,}$/;
let finalFeedback = true;

form.addEventListener('submit', (dets) => {
    dets.preventDefault();

    if (!emailRegex.test(emailInput.value)) {
        document.querySelector('#emailFeedback').textContent = 'email is incorrect';
        finalFeedback = false;
    }else{
        document.querySelector('#emailFeedback').textContent = '';
        finalFeedback = true;
    }

    if (!passwordRegex.test(pwInput.value)) {
        document.querySelector('#pwFeedback').textContent = 'password is incorrect';
        finalFeedback = false;
    } else{
        document.querySelector('#pwFeedback').textContent = '';
        finalFeedback =true;
    }

    if (finalFeedback) document.querySelector('#resultArea').textContent = "passed"
    else document.querySelector('#resultArea').textContent = "failed"
})

document.querySelector('#clearBtn').addEventListener('click', () => {
    document.querySelector('#emailFeedback').textContent = '';
    document.querySelector('#pwFeedback').textContent = '';
    document.querySelector('#resultArea').textContent = "";
    emailInput.value = '';
    pwInput.value = '';
})

togglePw.addEventListener('click', ()=>{
    if (pwInput.type === 'password'){
        pwInput.type = 'text';
        togglePw.textContent = 'Hide';
    } else{
        pwInput.type = 'password';
        togglePw.textContent = 'Show';
    }
})