let btnOne = document.querySelector('.btn1');
let btnTwo = document.querySelector('.btn2');
let getBtn = document.querySelector('.selected__div');

let inputText = document.getElementById('getText');
let btnOk = document.getElementById('button__ok');
let showText = document.querySelector('.some__text');

let block = document.querySelector('.div');
let outsideSpace = document.getElementsByTagName('body');

function pressBtn1 (event) {
    event.stopPropagation();
    getBtn.innerHTML = btnOne.value;
    getBtn.classList.add('is-visible');
}

// btnOne.addEventListener('click', (event) => {
//     event.stopPropagation();
//     getBtn.innerHTML = btnOne.value;
//     getBtn.classList.add('is-visible');
// })

function pressBtn2 (event) {
    event.stopPropagation();
    getBtn.innerHTML = btnTwo.value;
    getBtn.classList.add('is-visible');
}

// btnTwo.addEventListener('click', (event) => {
//     event.stopPropagation();
//     getBtn.innerHTML = btnTwo.value;
//     getBtn.classList.add('is-visible');
// })

btnOk.addEventListener('click', () => {
    showText.innerHTML;

    if (inputText.value !== inputText.value.toLowerCase()) {
        showText.classList.add('is-visible');
    }
    else {
        showText.classList.remove('is-visible');
        alert(inputText.value);
    }
})

inputText.addEventListener('input', function() {
    btnOk.disabled = (inputText.value == '');
});

block.addEventListener('click', (event) => {
    event.stopPropagation();
    getBtn.innerHTML = event.target.getAttribute("div-name");
})

outsideSpace[0].addEventListener('click', () => {
    getBtn.classList.remove('is-visible');
});
