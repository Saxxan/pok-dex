let number = 10;
let url = 'https://pokeapi.co/api/v2/pokemon?limit=${number}';


const btnRequest = document.querySelector('.request');
btnRequest.addEventListener('click', function(){
    number += 10;
    url = `https://pokeapi.co/api/v2/pokemon?limit=${number}`;
    requestPokemons();
});

function requestPokemons() {
    axios.get(url)
        .then(function (response) {
            const pokemons = response.data.results;
            const list = document.querySelector('.list');
            list.innerHTML = '';
            pokemons.forEach(function (pokemon, number) {
                list.innerHTML += `
                <li>
                    <h1>${pokemon.name}</h1>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number + 1}.png">
                </li>
            `;
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}