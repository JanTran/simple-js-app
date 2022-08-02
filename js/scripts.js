let pokemonRepository = (function () {
    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonDisplay = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokemonDisplay.appendChild(listItem);
        button.addEventListener('click', function (event) {
            let target = event.target;
            loadDetails(pokemon);
        })
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function(){
        console.log(pokemon);
    });
    }

    function loadList () {
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function (json){
            json.results.forEach(function(pokemon){
                name: pokemon.name
                detailsUrl: pokemon.url
                add(pokemon);
            });
        }).catch(function (e){
            console.error(e);
        })
    }

    function loadDetails(pokemon) {
        let url = pokemon.url;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details){
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
            console.log('Pokemon Details:', details);
        }).catch(function(e){
            console.error(e);
        })
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
}) ();

const modalContainer = document.querySelector('.modal');

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon){
   pokemonRepository.addListItem(pokemon);
});
});
