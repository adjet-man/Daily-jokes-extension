document.addEventListener('DOMContentLoaded', function () {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById('joke');
            const joke = data[0];
            jokeContainer.textContent = joke.setup + ' ' + joke.punchline;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            const jokeContainer = document.getElementById('joke');
            jokeContainer.textContent = 'Failed to fetch joke.';
        });
});
