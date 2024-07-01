const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const newQuote = document.querySelector("js-new-quote")
newQuote.addEventListener('click', getTriva); 

function getTriva() 
{
    // console.log('test')
    try 
    {
        const response = await fetch(endpoint)
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json);
        displayTriva[json('question')];
    }
    catch(err)
    {
        console.log(err);
        alert['Failed to fetch new quote']; ``
    }
}

function displayTriva(quote) 
{
    const triviaText = document.querySelector('js-quote-text')
    triviaText.textContent = quote; 
}

getTriva();