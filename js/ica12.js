document.addEventListener('DOMContentLoaded', () =>{
    const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

    const newQuote = document.querySelector('#js-new-quote'); 
    newQuote.addEventListener('click', getTrivia); 

    const newAnswer = document.querySelector('#js-tweet');
    newAnswer.addEventListener('click', displayStoredAnswer)

    let currentTrivia = null; 

    async function getTrivia() 
    {
        try 
        {
            const response = await fetch(endpoint);
            if (!response.ok) 
            {
                throw Error(response.statusText);
            }

            const json = await response.json();
            currentTrivia = json;
            displayTrivia(json['question']);
            displayAnswer(currentTrivia['answer']);

        } 
        catch (err)
        {
            console.log('Fetch error:', err);
            alert('Failed to fetch new quote');
        }
    }

    function displayTrivia(quote) 
    {
        const triviaText = document.querySelector('#js-quote-text');
        triviaText.textContent = quote; 
    }

    function displayStoredAnswer() 
    {
        if (currentTrivia) 
        {
            displayAnswer(currentTrivia['answer']);
        } 
        else 
        {
            alert('Please fetch a question first!');
        }
    }

    function displayAnswer(answer) {
        const triviaAnswer = document.querySelector('#js-answer-text');
        triviaAnswer.textContent = answer;
    }

    getTrivia();
});