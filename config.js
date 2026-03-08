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
        "Bulbasaur": "https://i.imgur.com/Mh8kPfD.jpeg",
        "Snorlax": "https://i.imgur.com/OCETqj6.jpeg",
        "Ivysaur": "https://i.imgur.com/Sm92ftt.jpeg",
        "Venusaur": "https://i.imgur.com/ncqzb1l.jpeg",
        "Darkrai": "https://i.imgur.com/f6W3FP6.jpeg",
        "Mega Charizard X": "https://i.imgur.com/OVMDz4A.jpeg",
        "Staryu": "https://i.imgur.com/Eyy2fbj.jpeg",
        "Arcanine": "https://i.imgur.com/ZVKY2W2.jpeg",
        "Love Bulbasaur": "https://i.imgur.com/aBYD7kI.jpeg",
        "Magneton": "https://i.imgur.com/GxRwLR6.jpeg",
        "Onix": "https://i.imgur.com/VhoaBh6.jpeg",
        "Totodile": "https://i.imgur.com/6NTpLfm.jpeg",
        "Lucario": "https://i.imgur.com/wsnzHzR.jpeg",
        "Rayquaza": "https://i.imgur.com/YBoermN.jpeg",
        "Vaporeon": "https://i.imgur.com/i4FCqkE.jpeg",
        "Flareon": "https://i.imgur.com/3nitmrp.jpeg",
        "Glaceon": "https://i.imgur.com/iTAlovc.jpeg",
        "Garchomp": "https://i.imgur.com/kzeBzsw.jpeg",
        "Oddish": "https://i.imgur.com/a4GWw25.jpeg",
        "Cubone": "https://i.imgur.com/CDqxMAJ.jpeg",
        "Groudon": "https://i.imgur.com/6sMaRuK.jpeg",
        "Ash Greninja": "https://i.imgur.com/a2hgk5I.jpeg",
        "Dragonite": "https://i.imgur.com/eqHJa87.jpeg",
        "Machamp": "https://i.imgur.com/zHUO5O2.jpeg",
        "Scyther": "https://i.imgur.com/ydzLmLh.jpeg",
        "Gengar": "https://i.imgur.com/TIL6oYH.jpeg",
        "Charizard": "https://i.imgur.com/gVbBdTZ.jpeg",
        "Giratina": "https://i.imgur.com/nQWEzqc.jpeg",
        "Marowak": "https://i.imgur.com/Rre4Hem.jpeg",
        "Gardevior": "https://i.imgur.com/awewaW6.jpeg",
        "Togepi": "https://i.imgur.com/CmqyEft.jpeg",
        "Eevee": "https://i.imgur.com/gPYr99q.jpeg",
        "Vileplume": "https://i.imgur.com/dNfQuus.jpeg",
        "Sylveon": "https://i.imgur.com/51ESeQE.jpeg",
        "Espeon": "https://i.imgur.com/picLcjT.jpeg",
        "Leafeon": "https://i.imgur.com/IL3AR6s.jpeg",
        "Kyogre": "https://i.imgur.com/6N5r40r.jpeg",
        "Pikachu": "https://i.imgur.com/eOUEimi.jpeg",
        "Pichu": "https://i.imgur.com/frd6yed.png",
        "Gyarados": "https://i.imgur.com/EZlSIeM.png",
        "Wartortle": "https://i.imgur.com/Y2Ty1iP.png",
        // Examples (replace with your actual image URLs):
        // "Bulbasaur": "https://imgur.com/a/1yvDBO8",
        // "Charizard": "https://i.imgur.com/yourcharizard.jpg",
        // "Bulbasaur": "https://i.imgur.com/yourbulbasaur.jpg",
    }
};
