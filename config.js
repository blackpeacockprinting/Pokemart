// ============================================
// POKÉ MART CONFIGURATION FILE
// Edit this file to add Pokémon, change prices, or add photos!
// ============================================

const CONFIG = {
    // PRICING - Change these if you want to adjust prices
    pricing: {
        standard: 8,
        mega: 10,
        special: 10,
        event: 8
    },
    
    // POKÉMON LISTS - Add new names here!
    pokemon: {
        standard: [
            "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
            "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
            "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
            "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok",
            "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
            "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable",
            "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat",
            "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat",
            "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck",
            "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
            "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
            "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Ponyta",
            "Magnetite", "Magneton", "Grimer", "Muk", "Shellder", "Cloyster",
            "Gastly", "Haunter", "Gengar", "Onix", "Krabby", "Kingler",
            "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak",
            "Koffing", "Weezing", "Chansey", "Kangaskhan", "Horsea", "Seadra",
            "Staryu", "Starmie", "Scyther", "Electabuzz", "Pinsir", "Tauros",
            "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon",
            "Jolteon", "Flareon", "Snorlax", "Articuno", "Zapdos", "Moltres",
            "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita",
            "Cyndaquil", "Totodile", "Furret", "Pichu", "Togepi", "Wooper",
            "Espeon", "Umbreon", "Raikou", "Entei", "Suicune", "Tyranitar",
            "Lugia", "Ho-Oh", "Celebi", "Blaziken", "Gardevoir", "Absol",
            "Salamence", "Metagross", "Latias", "Latios", "Kyogre", "Groudon",
            "Rayquaza", "Jirachi", "Piplup", "Bidoof", "Garchomp", "Lucario",
            "Leafeon", "Glaceon", "Dialga", "Palkia", "Giratina", "Darkrai",
            "Arceus", "Trubbish", "Zorua", "Zoroark", "Chandelure", "Zekrom",
            "Greninja", "Sylveon", "Mimikyu", "Dragapult", "Ceruledge", "Tinkaton",
            "Deoxys"
        ],
        mega: [
            "Mega Charizard X", "Mega Charizard Y", "Mega Blastoise", "Mega Raichu X",
            "Mega Raichu Y", "Mega Gengar", "Mega Rayquaza", "Mega Lucario"
        ],
        special: [
            "Ash Greninja"
        ],
        event: [
            "Galarian Ponyta", "Halloween Bulbasaur", "Christmas Bulbasaur", "Love Bulbasaur"
        ]
    },
    
    // PHOTOS - Add image URLs here!
    // Format: "Pokemon Name": "https://your-image-url.jpg"
    // If you don't have a photo, leave it out - it will show a placeholder
    images: {
        "Bulbasaur": "https://i.imgur.com/Mh8kPfD.jpeg"
        "Snorlax": "https://i.imgur.com/OCETqj6.jpeg"
        // Examples (replace with your actual image URLs):
        // "Bulbasaur": "https://imgur.com/a/1yvDBO8",
        // "Charizard": "https://i.imgur.com/yourcharizard.jpg",
        // "Bulbasaur": "https://i.imgur.com/yourbulbasaur.jpg",
    }
};
