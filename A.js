let question = 'What is your name?'
let speed = 100;
let letter = 0;

function someText() {
    if (letter < question.length) {
        document.querySelector('.gretting').textContent += question.charAt(letter);
        letter++;
        setTimeout(someText, speed);
    }
}
someText()