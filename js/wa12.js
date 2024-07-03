document.addEventListener('DOMContentLoaded', () => {

    const endpoint = "https://zenquotes.io/api/quotes/";

    const newPoemButton = document.querySelector('#new-poem');
    newPoemButton.addEventListener('click', getPoem);

    async function getPoem() {
        try
        {
            const poem = await fetch(endpoint);

            if(!poem.ok)
            {
                throw Error(poem.statusText);
            }

            const json = await poem.json();
            displayPoem(json);
            clearPoem();
        }
        catch(err)
        {
            console.log('Fetch error', err);
            alert('Failed to fetch new poem');
        }
    }


    function displayPoem(quote)
    {
        const poemText = document.querySelector('#poem-text');
        poemText.textContent = quote;
    }

    function clearPoem()
    {
        const poemText = document.querySelector('#poem-text');
        poemText.textContent = '';
    }
});