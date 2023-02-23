const openInfo = document.querySelector('#more-info-btn');
const closeInfo = document.querySelector('#less-info-btn');

const extraInfo = document.querySelector('.extra-info');
const extraGraph = document.querySelector('.extra-graph');

const exit = document.querySelector('#exit');
const bigGraph = document.querySelector('.sales-img');



//click-event for mer info, og lukke-knapp
openInfo.addEventListener('click', () => {
    extraInfo.classList.remove('is-hidden');
    extraGraph.classList.remove('is-hidden');
    closeInfo.classList.remove('is-hidden');
    openInfo.classList.add('is-hidden');
})


closeInfo.addEventListener('click', () => {
    extraInfo.classList.add('is-hidden');
    extraGraph.classList.add('is-hidden');
    closeInfo.classList.add('is-hidden');
    openInfo.classList.remove('is-hidden');
})

