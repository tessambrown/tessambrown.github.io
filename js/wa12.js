document.addEventListener('DOMContentLoaded', () => {
    const endpoint = 'https://poems.one/api/random';

    const newPoemButton = document.querySelector('#new-poem');
    newPoemButton.addEventListener('click', getPoem);

    async function getPoem() {
        try
        {
            const poem = await fetch(endpoint);

            if(!poem.ok)
            {
                
            }
        }
        catch(err)
        {

        }
    }
});