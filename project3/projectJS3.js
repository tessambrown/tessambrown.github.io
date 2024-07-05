document.addEventListener("DOMContentLoaded", () => {
    const dialContainer = document.querySelector(".dial");
    const phoneNumberDisplay = document.getElementById("phone-number");
    let phoneNumber = [];

    function generateRandomNumbers() {
        const numbers = Array.from({ length: 10 }, (_, i) => i);
        return numbers.sort(() => Math.random() - 0.5);
    }

    function createDialButtons() {
        dialContainer.innerHTML = '<div class="center-dot"></div>'; // Clear existing buttons and keep the center dot
        const randomNumbers = generateRandomNumbers();

        randomNumbers.forEach((number, index) => {
            const button = document.createElement("button");
            button.classList.add("dial-button");
            button.classList.add(`button${index}`); // Add positioning class
            button.textContent = number;
            button.addEventListener("click", () => onDialButtonClick(number));
            dialContainer.appendChild(button);
        });
    }

    function onDialButtonClick(number) 
    {
        if (phoneNumber.length < 10) 
        {
            phoneNumber.push(number);
            phoneNumberDisplay.textContent = phoneNumber.join("");
            if (phoneNumber.length === 10) 
            {
                alert("Phone number entered: " + phoneNumber.join(""));
            }
        }
        createDialButtons(); // Regenerate buttons with random numbers
    }

    function onSubmit() 
    {
        if (phoneNumber.length === 10) 
        {
            alert("Phone number submitted: " + phoneNumber.join(""));
        } 
        else 
        {
            alert("Please enter a 10-digit phone number.");
        }
    }

    submitButton.addEventListener("click", onSubmit);

    createDialButtons();
});
