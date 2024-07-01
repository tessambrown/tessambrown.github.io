document.addEventListener('DOMContentLoaded', () =>{
    const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    const newQuote = document.querySelector('#js-new-quote');
    // const newAnswer = document.querySelector('js-tweet')
    newQuote.addEventListener('click', getTrivia); 

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
            console.log(json)
            // displayTrivia(json.question);

            // displayAnswer(json.answer);

        } 
        catch (err)
        {
            console.log(err);
            alert('Failed to fetch new quote');
        }
    }

    // function displayTrivia(quote) 
    // {
    //     const triviaText = document.querySelector('ajs-quote-text');
    //     triviaText.textContent = quote; 
    // }

    // getTrivia();
});