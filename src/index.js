// INDEX JS

function sayHi(index){
    document.getElementById('index').classList.toggle('active');
}

axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(function(response) {
        paintList(response.data.results);

        document.querySelector('.search').addEventListener('input', function(event){
            const value = document.querySelector('.search').value;

            document.querySelector('.list').innerHTML='';
            response.data.results.forEach(function(pokemon){
                if(pokemon.name.includes(value)){
                    document.querySelector('.list').innerHTML += 
                    `<article id="${pokemon.name}" class="pokemon" onclick="sayHi(${pokemon.name})">
                        <p>${pokemon.name}</p>
                        <a href="/detail.html?pokemon=${pokemon.name}">Detalles</a>
                    </article>`
                }
            });
        });
    });


function paintList (results) {
    document.querySelector('.list').innerHTML='';
    results.forEach(function(pokemon){
        document.querySelector('.list').innerHTML += 
            `<article id="${pokemon.name}" class="pokemon" onclick="sayHi(${pokemon.name})">
                <p>${pokemon.name}</p>
                <a href="/detail.html?pokemon=${pokemon.name}">Detalles</a>
            </article>`
    });
}