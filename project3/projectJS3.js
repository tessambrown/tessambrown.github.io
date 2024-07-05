document.addEventListener("DOMContentLoaded", () => {
    const dialContainer = document.querySelector(".rotary-dial");
    const phoneNumberDisplay = document.getElementById("phone-number");
    let phoneNumber = [];

    function generateRandomNumbers() {
        const numbers = Array.from({ length: 10 }, (_, i) => i);
        return numbers.sort(() => Math.random() - 0.5);
    }

    function createDialButtons() {
        dialContainer.innerHTML = ""; // Clear existing buttons
        const randomNumbers = generateRandomNumbers();

        randomNumbers.forEach(number => {
            const button = document.createElement("div");
            button.classList.add("dial-button");
            button.textContent = number;
            button.addEventListener("click", () => onDialButtonClick(number));
            dialContainer.appendChild(button);
        });
    }

    function onDialButtonClick(number) {
        if (phoneNumber.length < 10) {
            phoneNumber.push(number);
            phoneNumberDisplay.textContent = phoneNumber.join("");
            if (phoneNumber.length === 10) {
                alert("Phone number entered: " + phoneNumber.join(""));
            }
        }
        createDialButtons(); // Regenerate buttons with random numbers
    }

    createDialButtons();
});
