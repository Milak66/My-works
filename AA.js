let item = 0;
let speed2 = 100;
let question2 = 'How old are you?';

function text() {
    if (item < question2.length) {
        document.querySelector('.gretting2').textContent += question2.charAt(item);
        item++
        setTimeout(text, speed2)
    }
}
text()