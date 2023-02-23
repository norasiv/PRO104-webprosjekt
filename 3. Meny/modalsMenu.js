var leggTil = document.querySelector('#lgbtn');
var modalBG = document.querySelector('.modal-background');
var modal = document.querySelector('.modal');
const exit = document.querySelector('#exit');
const cancel = document.querySelector('#cancel-btn');


//lager clickfunskjoner for legg til, lagre, cancelknapper
leggTil.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBG.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

exit.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

cancel.addEventListener('click', () => {
    modal.classList.remove('is-active');
})





