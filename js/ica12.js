const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

const newQuote = document.querySelector('.js-new-quote');
newQuote.addEventListener('click', getTrivia); 

async function getTrivia() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayTrivia(json.question);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayTrivia(quote) {
    const triviaText = document.querySelector('.js-quote-text');
    triviaText.textContent = quote; 
}

getTrivia();
