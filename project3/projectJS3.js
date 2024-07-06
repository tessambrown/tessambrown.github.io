document.addEventListener("DOMContentLoaded", () => {

    const dialContainer = document.querySelector(".dial");
    const phoneNumberDisplay = document.getElementById("phone-number");
    const submitButton = document.getElementById("submit-button");
    let phoneNumber = [];

    function generateRandomNumbers() 
    {
        const numbers = Array.from({ length: 10 }, (_, i) => i);
        return numbers.sort(() => Math.random() - 0.5);
    }

    function createDialButtons() 
    {
        dialContainer.innerHTML = '<div class="center-dot"></div>'; // Clear existing buttons and keep the center dot
        const randomNumbers = generateRandomNumbers();

        randomNumbers.forEach((number, index) => {
            const button = document.createElement("button");
            button.classList.add("dial-button");
            button.classList.add(`button${index}`);
            button.textContent = number;
            button.addEventListener("click", () => onDialButtonClick(number));
            dialContainer.appendChild(button);
        });
    }

    // when one of the buttons is clicked it gets displayed
    function onDialButtonClick(number) 
    {
        if (phoneNumber.length < 10) 
        {
            phoneNumber.push(number);
            phoneNumberDisplay.textContent = phoneNumber.join("");

            // if the user has more than 10 numbers then it sends an error and clears the input
            if (phoneNumber.length > 10) 
            {
                alert('Please enter a 10-digit phone number.');
                phoneNumber = [];
                phoneNumberDisplay.textContent = "";
            }
        }

        createDialButtons(); // Regenerate buttons with random numbers
    }

    // clear the entered phone number when the user presses submit
    function onSubmit() 
    {
        if (phoneNumber.length === 10) 
        {
            alert(`Phone number submitted: ${phoneNumber.join('')}`);
            phoneNumber = [];
            phoneNumberDisplay.textContent = "";
        } 
        else 
        {
            alert('Please enter a 10-digit phone number.');
            phoneNumber = [];
            phoneNumberDisplay.textContent = "";
        }
    }

    submitButton.addEventListener("click", onSubmit);

    createDialButtons();
});