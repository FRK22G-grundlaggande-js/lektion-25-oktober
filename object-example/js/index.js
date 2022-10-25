const pokemon = {
    name: 'Charmander',
    type: 'Fire',
    cute: true,
    pokedexNumber: 7
};

console.log(pokemon); // Skriver ut hela objektet
console.log(`Namn: ${pokemon.name}`); // Skriver ut namnet (Charmander)

const users = [
    {
        "name": {
            "title": "Mr",
            "first": "Naël",
            "last": "Henry"
        },
        "email": "Nael.Henry@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Miss",
            "first": "Sara",
            "last": "Faure"
        },
        "email": "Sara.Faure@example.com",
        "nat": "FR"
    },
    {
        "name": {
            "title": "Mademoiselle",
            "first": "Christel",
            "last": "Legrand"
        },
        "email": "Christel.Legrand@example.com",
        "nat": "CH"
    }
];

for(let i = 0; i < users.length; i++) {
    //console.log(users[i]);
    if(users[i].name.first == 'Sara') {
        console.log(users[i]);
    }
}

console.log(users);