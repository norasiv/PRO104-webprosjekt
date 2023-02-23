//henter html-elementer

const addBtn = document.querySelector('#add-btn');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const exit = document.querySelector('#exit');
const cancel = document.querySelector('#cancel-btn');
const saveBtn = document.querySelector('#save-btn');
const saveBtnStaff = document.querySelector('#save-staff-btn')


//lager clickfunskjoner for legg til, lagre, cancelknapper

addBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

exit.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

cancel.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

saveBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

saveBtnStaff.addEventListener('click', () => {
    modal.classList.remove('is-active');
})








