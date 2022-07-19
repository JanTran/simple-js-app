let pokemonRepository = (function () {
     let pokemonList = [
       {
           name: 'Squirtle',
           height: 1.1,
           types: [
               'WATER'
           ]
       },
       {   
           name: 'Pikachu',
           height: 0.4,
           types: [
               'ELECTRIC'
           ]

       },
       {
           name: 'Bulbasaur',
           height: 0.5,
           types: [
               'GRASS', 
               'POISON'
           ]
       } 
       ];
     return {
       add: function(pokemon) {
         pokemonList.push(pokemon);
       },
       getAll: function() {
         return pokemonList;
       },
       showDetails: function(pokemon){
        console.log(pokemon);
       },
       addListItem: function(pokemon) {
         let pokemonList = document.querySelector(".pokemon-list");
         let listpokemon = document.createElement("li");
         let button = document.createElement("button");
         button.addEventListener('click', function (pokemon) {
            console.log(event);
          });
         button.innerText = pokemon.name;
         button.classList.add("button-class");
         listpokemon.appendChild(button);
         pokemonList.appendChild(listpokemon);
       }
     };
   })();

   console.log(pokemonRepository.getAll()); // []
   pokemonRepository.add({ name: 'Gardevoir', height: '1.2', types: ['GRASS', 'POISON'] });
   console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]
   pokemonRepository.getAll().forEach(function(pokemon){ 
     pokemonRepository.addListItem(pokemon);
   });
