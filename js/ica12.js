document.addEventListener('DOMContentLoaded', () =>{
    const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

    const newQuote = document.querySelector('#js-new-quote'); 
    newQuote.addEventListener('click', getTrivia); 

    const newAnswer = document.querySelector('#js-tweet');
    newAnswer.addEventListener('click', getAnswer)

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
            displayTrivia(json['question']);

        } 
        catch (err)
        {
            console.log('Fetch error:', err);
            alert('Failed to fetch new quote');
        }
    }

    async function getAnswer()
    {
        try
        {
            const answer = await fetch(endpoint);
            if(!answer.ok)
            {
                throw Error(answer.statusText);
            }

            const json = await answer.json();
            displayAnswer(json['answer']);
        }
        catch(err)
        {
            console.log('Fetch error:', err);
            alert('Failed to fetch answer');
        }
    }

    function displayTrivia(quote) 
    {
        const triviaText = document.querySelector('#js-quote-text');
        triviaText.textContent = quote; 
    }

    function displayAnswer(tweet)
    {
        const triviaAnswer = document.querySelector('#js-answer-text');
        triviaAnswer.textContent = tweet;
    }

    getTrivia();
});