document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random letter from a given array of letters
    function getRandomLetter(letters) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    // Setting random letters to buttons
    const buttonData = [
        { id: "2", letters: ['A', 'B', 'C'] },
        { id: "3", letters: ['D', 'E', 'F'] },
        { id: "4", letters: ['G', 'H', 'I'] },
        { id: "5", letters: ['J', 'K', 'L'] },
        { id: "6", letters: ['M', 'N', 'O'] },
        { id: "7", letters: ['P', 'Q', 'R', 'S'] },
        { id: "8", letters: ['T', 'U', 'V'] },
        { id: "9", letters: ['W', 'X', 'Y', 'Z'] }
    ];

    buttonData.forEach(buttonInfo => {
        const button = document.getElementById(buttonInfo.id);
        button.textContent = getRandomLetter(buttonInfo.letters);
    });

    // Adding event listeners to each button
    const buttons = document.querySelectorAll('.button1, .button2, .button3, .button4, .button5, .button6, .button7, .button8, .button9, .button0');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button ${button.textContent} clicked`);  // Debug log
            addToInput(button.textContent);
        });
    });
});

// Function to add clicked button's value to the input text
function addToInput(value) {
    const numberTextDiv = document.getElementById('number-text');
    let currentText = numberTextDiv.textContent;

    if (currentText.length < 10) {
        numberTextDiv.textContent = currentText + value;
        console.log(`Current text: ${numberTextDiv.textContent}`);  // Debug log
    } else {
        console.log('Maximum length reached');  // Debug log
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
