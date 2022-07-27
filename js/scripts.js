let pokemonRepository = (function () {
     let repository = [];
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
    button.addEventListener('click', function () {
        console.log(pokemon.name);
    });
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  async function loadList(){
        try {
               const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
               const json = await response.json();
               json.results.forEach(function (item) {
                   let pokemon = {
                       name: item.name,
                       detailsUrl: item.url
                   };
                   add(pokemon);
               });
           } catch (e) {
               console.error(e);
           }
       }
   async function loadDetails(){
        let url = pokemon.detailsUrl;
        try {
               const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
               const details = await response.json();
               pokemon.imageUrl = details.sprites.front_default;
               pokemon.height = details.height;
               pokemon.weight = details.weight;
               pokemon.types = details.types.map((type) => type.type.name).join(',');
               pokemon.abilities = details.abilities.map((ability) => ability.ability.name).join(',');
           } catch (e) {
               console.error(e);
           }
     };
  return {
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    getAll: getAll,
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
         button.addEventListener('click', function () { {
            console.log(pokemon.name);
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
