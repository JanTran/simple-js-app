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

    }
];
for (let i=0; i<pokemonList.length; i++) {
    if (pokemonList[i].height>1) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!')
    } else {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
    }
}

