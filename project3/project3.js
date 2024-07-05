document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random letter from a given array of letters
    function getRandomLetter(letters) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    // Setting random letters to buttons
    const buttonData = [
        { class: "button2", letters: ['A', 'B', 'C'] },
        { class: "button3", letters: ['D', 'E', 'F'] },
        { class: "button4", letters: ['G', 'H', 'I'] },
        { class: "button5", letters: ['J', 'K', 'L'] },
        { class: "button6", letters: ['M', 'N', 'O'] },
        { class: "button7", letters: ['P', 'Q', 'R', 'S'] },
        { class: "button8", letters: ['T', 'U', 'V'] },
        { class: "button9", letters: ['W', 'X', 'Y', 'Z'] }
    ];

    buttonData.forEach(buttonInfo => {
        const button = document.getElementById(buttonInfo.id);
        button.textContent = getRandomLetter(buttonInfo.letters);
    });

    // Adding event listeners to each button
    const buttons = document.querySelectorAll('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9, .button0');
    buttons.forEach(button => {
        button.addEventListener('click', () => addToInput(button.textContent));
    });
});

// Function to add clicked button's value to the input text
function addToInput(value) {
    const numberTextDiv = document.getElementById('number-text');
    let currentText = numberTextDiv.textContent;

    if (currentText.length < 10) {
        numberTextDiv.textContent = currentText + value;
    }
}

// Function to handle submit action
function submitPhoneNumber() {
    const numberTextDiv = document.getElementById('number-text');
    const phoneNumber = numberTextDiv.textContent;

    if (phoneNumber.length === 10) {
        alert(`Phone number submitted: ${phoneNumber}`);
    } else {
        alert('Please enter a 10-digit phone number.');
    }
}
