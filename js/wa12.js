document.addEventListener('DOMContentLoaded', () => {

    const newPoemButton = document.querySelector('#new-poem');
    newPoemButton.addEventListener('click', getPoem);

    async function getPoem() {
        try
        {
            const poem = await fetch("https://type.fit/api/quotes")

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