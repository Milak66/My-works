const inputName = document.querySelector('.inputName');
const btn = document.querySelector('.btn');
const answer = document.querySelector('.answer');



btn.addEventListener('click', () => {
    const correctAnswer = inputName.value;
    let result = 'This is cool name';
    if (correctAnswer !== 'Aleksey') {
        result = 'This is bad name';
    }
    answer.innerHTML = result;
})
const inputAge = document.querySelector('.inputAge');
const btn2 = document.querySelector('.btn2');
const answer2 = document.querySelector('.answer2');


btn2.addEventListener('click', () => {
    const correctAge = inputAge.value;
    let result2 = 'True age';
    if (correctAge !== '16') {
        result2 = 'False age'
    }
    answer2.innerHTML = result2
})
const btn3 = document.querySelector('.btn3');
const endOfTest = document.querySelector('.endOfTest');

btn3.addEventListener('click', () => {
    let end = document.createElement('li');
    let end2 = document.createElement('button')
    endOfTest.appendChild(end);
    end.textContent = 'Поздравляю с прохождением теста!';

    const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () => {
    endOfTest.removeChild(end);
})
})