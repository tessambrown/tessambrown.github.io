document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://www.beanpoems.com/api/random'

    const newPoemButton = document.querySelector('#new-poem');
    newPoemButton.addEventListener('click', getPoem);

    async function getPoem() {
        try
        {
            const poem = await fetch(url, {
                method: 'GET'
            });

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