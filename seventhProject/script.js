const textarea = document.querySelector('#textarea');
const counter = document.querySelector('.counter');

function count() {
    const text = textarea.value; // Get the text inside the textarea
    const length = text.length; // Get the length of the text
    counter.innerHTML = length; // Update the counter with the length
}
