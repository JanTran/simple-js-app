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
       function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function showDetails(pokemon){
    console.log(pokemon);
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener('click', function (pokemon) {
        console.log(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    showDetails: showDetails
  };
})();

pokemonRepository.add({ name: 'Gardevoir', height: '1.2', types: ['GRASS', 'POISON'] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

     /*
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
   */
