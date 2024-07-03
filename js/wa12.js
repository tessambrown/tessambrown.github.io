document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "https://api.api-ninjas.com/v1/quotes";
    const apiKey = "xZEqpXQI+lFLDAIRitIA8Q==X6b4Y4852FAd4NCQ";

    const newPoemButton = document.querySelector('#new-poem');
    newPoemButton.addEventListener('click', getPoem);

    async function getPoem() {
        try {
            const response = await fetch(endpoint, {
                headers: {
                    'X-Api-Key': apiKey
                }
            });

            if (!response.ok) {
                throw Error(response.statusText);
            }

            const json = await response.json();
            displayPoem(json[0].quote); // Assuming json[0] contains the quote object with 'quote' being the quote text
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Failed to fetch new poem');
        }
    }

    function displayPoem(quote) {
        const poemText = document.querySelector('#poem-text');
        poemText.textContent = quote;
    }
});
