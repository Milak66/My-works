const redBtn = document.querySelector('.redBtn');
const blueBtn = document.querySelector('.blueBtn');
const greenBtn = document.querySelector('.greenBtn');
const yellowBtn = document.querySelector('.yellowBtn');
const gretting = document.querySelector('.gretting')
const gretting2 = document.querySelector('.gretting2')

redBtn.addEventListener('click', () => {
    gretting.classList.add('selectedRed')
    gretting2.classList.add('selectedRed')
});
blueBtn.addEventListener('click', () => {
    gretting.classList.add('selectedBlue')
    gretting2.classList.add('selectedBlue')
});
greenBtn.addEventListener('click', () => {
    gretting.classList.add('selectedGreen')
    gretting2.classList.add('selectedGreen')
});
yellowBtn.addEventListener('click', () => {
    gretting.classList.add('selectedYellow')
    gretting2.classList.add('selectedYellow')
});