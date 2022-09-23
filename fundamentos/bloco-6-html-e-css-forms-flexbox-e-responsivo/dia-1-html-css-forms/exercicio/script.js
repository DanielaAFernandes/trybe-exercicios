function buttonSend (event) {
    event.preventDefault();    
}

window.onload = function () {
    const secondButton = document.querySelector('#clean');
    secondButton.addEventListener('click', cleanForm);
    const button = document.querySelector('#button-send');
    button.addEventListener('click', buttonSend);
}

function cleanForm() {
    const inputElements = document.querySelectorAll('input');
    const textArea = document.querySelector('#text-area');
    for (let index = 0; index < inputElements.length; index += 1) {
        const userInput = inputElements[index];
        userInput.value= '';
        userInput.checked = false;
    }
    textArea.value = '';
}


