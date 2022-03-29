const params = new URLSearchParams(window.location.search);
const pokemonID = params.get('pokemon');

axios.get('https://pokeapi.co/api/v2/pokemon?${pokemonID}')
    .then(function(response) {
        document.querySelector('.name').textContent = response.data.name;
        document.querySelector('.experience').textContent = response.data.base_experience;
        // document.querySelector('.image').src = response.data.sprites.front_default;
    });