document.addEventListener('DOMContentLoaded', () => {
    const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

    const newQuoteButton = document.querySelector('#js-new-quote'); 
    newQuoteButton.addEventListener('click', getTrivia); 

    const newAnswerButton = document.querySelector('#js-tweet');
    newAnswerButton.addEventListener('click', displayStoredAnswer);

    let currentTrivia = null; // Variable to store the current trivia

    async function getTrivia() {
        try 
        {
            const response = await fetch(endpoint);

            if (!response.ok) 
            {
                throw Error(response.statusText);
            }

            const json = await response.json();
            currentTrivia = json; // Store the fetched trivia
            displayTrivia(json['question']);
            clearAnswer(); // Clear the previous answer when a new trivia is fetched

        } 
        catch (err) 
        {
            console.log('Fetch error:', err);
            alert('Failed to fetch new quote');
        }
    }

    function displayTrivia(quote) {
        const triviaText = document.querySelector('#js-quote-text');
        triviaText.textContent = quote; 
    }

    function displayStoredAnswer() {
        if (currentTrivia) {
            displayAnswer(currentTrivia['answer']);
        } else {
            alert('Please fetch a question first!');
        }
    }

    function displayAnswer(answer) 
    {
        const triviaAnswer = document.querySelector('#js-answer-text');
        triviaAnswer.textContent = answer;
    }

    function clearAnswer() 
    {
        const triviaAnswer = document.querySelector('#js-answer-text');
        triviaAnswer.textContent = ''; // Clear the answer text content
    }

});
