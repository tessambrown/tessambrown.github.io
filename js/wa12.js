document.addEventListener('DOMContentLoaded', () => {

    const endpoint = "https://api.quotable.io/quotes/random?limit=1";

    const newPoemButton = document.querySelector('#new-poem');
    newPoemButton.addEventListener('click', fetchRandomQuote);

    // async function getPoem() {
    //     try
    //     {
    //         const poem = await fetch(endpoint);

    //         if(!poem.ok)
    //         {
    //             throw Error(poem.statusText);
    //         }

    //         const json = await poem.json();
    //         displayPoem(json);
    //         clearPoem();
    //     }
    //     catch(err)
    //     {
    //         console.log('Fetch error', err);
    //         alert('Failed to fetch new poem');
    //     }
    // }

    function fetchRandomQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                const quote = data.content;
                document.getElementById("quote").textContent = quote;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    }

    fetchRandomQuote();

    // function displayPoem(quote)
    // {
    //     const poemText = document.querySelector('#poem-text');
    //     poemText.textContent = quote;
    // }

    // function clearPoem()
    // {
    //     const poemText = document.querySelector('#poem-text');
    //     poemText.textContent = '';
    // }
});