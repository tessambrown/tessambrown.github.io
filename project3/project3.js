document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random letter from a given set
    function getRandomLetter(letters) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        return letters[randomIndex];
    }

    // Set random letters for buttons 2 to 9
    const buttonData = [
        { id: '2', letters: ['A', 'B', 'C'] },
        { id: '3', letters: ['D', 'E', 'F'] },
        { id: '4', letters: ['G', 'H', 'I'] },
        { id: '5', letters: ['J', 'K', 'L'] },
        { id: '6', letters: ['M', 'N', 'O'] },
        { id: '7', letters: ['P', 'Q', 'R', 'S'] },
        { id: '8', letters: ['T', 'U', 'V'] },
        { id: '9', letters: ['W', 'X', 'Y', 'Z'] }
    ];

    buttonData.forEach(button => {
        const btn = document.getElementById(button.id);
        if (btn) {
            btn.textContent = getRandomLetter(button.letters);
        }
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
