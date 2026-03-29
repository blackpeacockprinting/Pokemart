// ============================================
// POKÉ MART CONFIGURATION FILE
// WITH N3D API INTEGRATION
// ============================================

const CONFIG = {
    // PRICING
    pricing: {
        standard: 8,
        mega: 10,
        special: 10,
        event: 8,
        mystery: 6,
        teamDiscount: 0.15
    },
    
    // BUNDLE DEALS
    bundles: {
        "Starter Trio": {
            items: ["Bulbasaur", "Charmander", "Squirtle"],
            price: 20,
            description: "The classic Kanto starters!"
        },
        "Eeveelution Pack": {
            items: ["Eevee", "Vaporeon", "Jolteon", "Flareon"],
            price: 28,
            description: "All original Eeveelutions"
        },
        "Legendary Birds": {
            items: ["Articuno", "Zapdos", "Moltres"],
            price: 20,
            description: "The legendary trio"
        },
        "Dragon Masters": {
            items: ["Dragonite", "Salamence", "Garchomp", "Rayquaza"],
            price: 30,
            description: "Powerful dragon types"
        }
    },
    
    // POKEMON LISTS
    pokemon: {
        standard: [
            "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
            "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
            "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
            "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok",
            "Pikachu", "Female Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
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
            "Magikarp", "Gyarados", "Shiny Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon",
            "Jolteon", "Flareon", "Snorlax", "Articuno", "Zapdos", "Moltres",
            "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita",
            "Cyndaquil", "Totodile", "Furret", "Pichu", "Togepi", "Wooper",
            "Espeon", "Umbreon", "Raikou", "Entei", "Suicune", "Tyranitar",
            "Lugia", "Ho-Oh", "Celebi", "Blaziken", "Gardevoir", "Absol",
            "Salamence", "Metagross", "Shiny Metagross", "Latias", "Latios", "Kyogre", "Groudon",
            "Rayquaza", "Shiny Rayquaza", "Jirachi", "Piplup", "Bidoof", "Garchomp", "Lucario",
            "Leafeon", "Glaceon", "Dialga", "Palkia", "Giratina", "Darkrai",
            "Arceus", "Trubbish", "Zorua", "Zoroark", "Chandelure", "Zekrom",
            "Greninja", "Sylveon", "Mimikyu", "Dragapult", "Ceruledge", "Tinkaton",
            "Deoxys", "Sprigatito"
        ],
        mega: [
            "Mega Charizard X", "Mega Charizard Y", "Mega Blastoise", "Mega Raichu X",
            "Mega Raichu Y", "Mega Gengar", "Mega Rayquaza", "Shiny Mega Rayquaza", "Mega Lucario"
        ],
        special: [
            "Ash Greninja"
        ],
        event: [
            "Galarian Ponyta", "Halloween Bulbasaur", "Christmas Bulbasaur", "Love Bulbasaur"
        ]
    },
    
    // IMAGES
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
        "Gardevoir": "https://i.imgur.com/awewaW6.jpeg",
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
        "Shiny Rayquaza": "https://i.imgur.com/cp5j8qp.png",
        "Shiny Gyarados": "https://i.imgur.com/O6XENFn.png",
        "Shiny Metagross": "https://i.imgur.com/jwx4AXx.png",
        "Charmander": "https://i.imgur.com/Q1UBK4m.png",
        "Female Pikachu": "https://i.imgur.com/jnf3hqX.png",
        "Shiny Mega Rayquaza": "https://i.imgur.com/wqK51ei.png"
    },
    
    // N3D SYNCED DESIGNS (populated dynamically)
    n3dDesigns: [],
    lastSync: null
};

// ============================================
// N3D DESIGN LOADER
// ============================================

async function loadN3DDesigns() {
    try {
        const response = await fetch('data/n3d-designs.json');
        if (!response.ok) {
            console.log('No N3D designs file found, using base config only');
            return;
        }
        
        const data = await response.json();
        CONFIG.n3dDesigns = data.designs || [];
        CONFIG.lastSync = data.lastUpdated;
        
        console.log(`✅ Loaded ${CONFIG.n3dDesigns.length} N3D designs`);
        
        mergeN3DDesigns();
        
    } catch (error) {
        console.warn('⚠️ Failed to load N3D designs:', error);
    }
}

function mergeN3DDesigns() {
    CONFIG.n3dDesigns.forEach(design => {
        const name = design.name || design.title;
        const category = mapN3DCategory(design.category);
        
        if (!CONFIG.pokemon[category].includes(name)) {
            CONFIG.pokemon[category].push(name);
            console.log(`➕ Added ${name} to ${category}`);
        }
    });
}

function mapN3DCategory(n3dCategory) {
    const categoryMap = {
        'standard': 'standard',
        'mega': 'mega',
        'special': 'special',
        'event': 'event',
        'legendary': 'standard',
        'starter': 'standard',
        'character': 'standard'
    };
    
    return categoryMap[n3dCategory?.toLowerCase()] || 'standard';
}

// ============================================
// INIT FUNCTION (in config.js for N3D loading)
// ============================================

async function init() {
    // Load N3D designs FIRST (before rendering)
    try {
        await loadN3DDesigns();
    } catch (e) {
        console.log('N3D load failed, continuing with base config:', e);
    }
    
    createFloatingBalls();
    
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
    
    document.getElementById('price-standard').textContent = CONFIG.pricing.standard;
    document.getElementById('price-mega').textContent = CONFIG.pricing.mega;
    document.getElementById('price-special').textContent = CONFIG.pricing.special;
    document.getElementById('price-event').textContent = CONFIG.pricing.event;
    
    document.getElementById('section-price-standard').textContent = CONFIG.pricing.standard;
    document.getElementById('section-price-mega').textContent = CONFIG.pricing.mega;
    document.getElementById('section-price-special').textContent = CONFIG.pricing.special;
    document.getElementById('section-price-event').textContent = CONFIG.pricing.event;
    
    createTypeFilters();
    renderProducts();
    initTeamBuilder();
    renderBundles();
    loadCartFromURL();
}
