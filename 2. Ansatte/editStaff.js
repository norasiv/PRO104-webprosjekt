//henter inn HTML
const editModalBg = document.querySelector('.edit-modal-background');
const editModal = document.querySelector('.edit-modal');
const editBtn = document.querySelector('#edit-manager-btn')
const exitBtnTwo = document.querySelector('#exit-btn-two');
const cancelBtnTwo = document.querySelector('#cancel-btn-two');
const saveChangesBtn = document.querySelector('#save-changes-btn')


//clickfunskjoner for rediger-knapp, lagreknapp og exitknapp
editBtn.addEventListener('click', () => {
    editModal.classList.add('is-active');
})

editModalBg.addEventListener('click', () => {
    editModal.classList.remove('is-active');
})

exitBtnTwo.addEventListener('click', () => {
    editModal.classList.remove('is-active');
})

cancelBtnTwo.addEventListener('click', () => {
    editModal.classList.remove('is-active');
})

saveChangesBtn.addEventListener('click', () => {
    editModal.classList.remove('is-active');
})


