let pokemonRepository = (function () {
    let pokemonList = [];
     return {
       add: function(pokemon) {
         pokemonList.push(pokemon);
       },
       getAll: function() {
         return pokemonList;
       },
       showDetails: function(pokemon){
        pokemonRepository.loadDetails(pokemon).then(function () {
            // console.log(item);
            showModal(pokemon);
        });
       },
       addListItem: function(pokemon) {
         let pokemonList = document.querySelector(".pokemon-list");
         let listpokemon = document.createElement("li");
         let button = document.createElement("button");
         button.addEventListener('click', function (event) {
            console.log(event);
          });
         button.innerText = pokemon.name;
         button.classList.add("button-class");
         listpokemon.appendChild(button);
         pokemonList.appendChild(listpokemon);
       },
       loadList: function(){
        return fetch(apiUrl).then(function (response) {
            return response.json();
          }).then(function (json) {
            json.results.forEach(function (item) {
              let pokemon = {
                name: item.name,
                detailsUrl: item.url
              };
              add(pokemon);
            });
          }).catch(function (e) {
            console.error(e);
          })
       },
       loadDetails: function(){
        let url = pokemon.detailsUrl;
        return fetch(url). then(function (response) {
          return response.json();
        }).then(function (details) {
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.weight = details.weight;
          pokemon.types = details.types.map((type) => type.type.name).join(',');
          pokemon.abilities = details.abilities.map((ability) => ability.ability.name).join(',');
        }).catch(function (e) {
          console.error(e);
        });
       }
     };
   })();
   
   console.log(pokemonRepository.getAll()); // []
   pokemonRepository.add({ name: 'Gardevoir', height: '1.2', types: ['GRASS', 'POISON'] });
   console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]
   pokemonRepository.getAll().forEach(function(pokemon){ 
     pokemonRepository.addListItem(pokemon);
   });
