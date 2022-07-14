alert('Hello world');
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
];
pokemonList.forEach(function(pokemon)) {
    console.log("Name: " + pokemon.name + ", type: " + pokemon.type + ", height: " + pokemon.height);
}
let pokemonRepository = (function () {
  let pokemonList = []; // empty array

  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]

