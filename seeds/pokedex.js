const { Pokedex } = require('../models');

const pokedex = [
      {
        "id": 1,
        "name": "Turtwig",
        "image": "assets/pokedex/387.png",
        "types": "Grass",
        "superEffective": "Water",
        "notEffective": "Fire"
    },
    {
        "id": 2,
        "name": "Grotle",
        "image": "assets/pokedex/388.png",
        "types": "Grass",
        "superEffective": "Water",
        "notEffective": "Fire"
    },
    {
        "id": 3,
        "name": "Torterra",
        "image": "assets/pokedex/389.png",
        "types": "Grass, Ground",
        "superEffective": "Water",
        "notEffective": "Fire"
    },
    {
        "id": 4,
        "name": "Chimchar",
        "image": "assets/pokedex/390.png",
        "types": "Fire",
        "superEffective": "Grass",
        "notEffective": "Water"
    },
    {
        "id": 5,
        "name": "Monferno",
        "image": "assets/pokedex/391.png",
        "types": "Fire, Fighting",
        "superEffective": "Grass",
        "notEffective": "Water"
    },
    {
        "id": 6,
        "name": "Infernape",
        "image": "assets/pokedex/392.png",
        "types": "Fire, Fighting",
        "superEffective": "Grass",
        "notEffective": "Water"
    },
    {
        "id": 7,
        "name": "Piplup",
        "image": "assets/pokedex/393.png",
        "types": "Water",
        "superEffective": "Fire",
        "notEffective": "Grass"
    },
    {
        "id": 8,
        "name": "Prinplup",
        "image": "assets/pokedex/394.png",
        "types": "Water",
        "superEffective": "Fire",
        "notEffective": "Grass"
    },
    {
        "id": 9,
        "name": "Empoleon",
        "image": "assets/pokedex/395.png",
        "types": "Water, Steel",
        "superEffective": "Fire",
        "notEffective": "Grass"
    },
    {
        "id": 10,
        "name": "Starly",
        "image": "assets/pokedex/396.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 11,
        "name": "Staravia",
        "image": "assets/pokedex/397.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 12,
        "name": "Staraptor",
        "image": "assets/pokedex/398.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 13,
        "name": "Bidoof",
        "image": "assets/pokedex/399.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 14,
        "name": "Bibarel",
        "image": "assets/pokedex/400.png",
        "types": "Normal, Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 15,
        "name": "Kricketot",
        "image": "assets/pokedex/401.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 16,
        "name": "Kricketot",
        "image": "assets/pokedex/402.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 17,
        "name": "Shinx",
        "image": "assets/pokedex/403.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 18,
        "name": "Luxio",
        "image": "assets/pokedex/404.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 19,
        "name": "Luxray",
        "image": "assets/pokedex/405.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 20,
        "name": "Abra",
        "image": "assets/pokedex/063.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 21,
        "name": "Kadabra",
        "image": "assets/pokedex/064.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 22,
        "name": "Alakazam",
        "image": "assets/pokedex/064.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 23,
        "name": "Magikarp",
        "image": "assets/pokedex/129.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 24,
        "name": "Gyarados",
        "image": "assets/pokedex/130.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 25,
        "name": "Budew",
        "image": "assets/pokedex/406.png",
        "types": "Grass, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 26,
        "name": "Roselia",
        "image": "assets/pokedex/315.png",
        "types": "Grass, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 27,
        "name": "Roserade",
        "image": "assets/pokedex/407.png",
        "types": "Grass, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 28,
        "name": "Zubat",
        "image": "assets/pokedex/041.png",
        "types": "Poison, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 29,
        "name": "Golbat",
        "image": "assets/pokedex/042.png",
        "types": "Poison, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 30,
        "name": "Crobat",
        "image": "assets/pokedex/169.png",
        "types": "Poison, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 31,
        "name": "Geodude",
        "image": "assets/pokedex/074.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 32,
        "name": "Graveler",
        "image": "assets/pokedex/075.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 33,
        "name": "Golem",
        "image": "assets/pokedex/076.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 34,
        "name": "Onix",
        "image": "assets/pokedex/095.png",
        "types": "Rock, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 35,
        "name": "Steelix",
        "image": "assets/pokedex/208.png",
        "types": "Steel, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 36,
        "name": "Cranidos",
        "image": "assets/pokedex/408.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 37,
        "name": "Rampardos",
        "image": "assets/pokedex/409.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 38,
        "name": "Shieldon",
        "image": "assets/pokedex/410.png",
        "types": "Rock, Steel",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 39,
        "name": "Bastiodon",
        "image": "assets/pokedex/411.png",
        "types": "Rock, Steel",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 40,
        "name": "Machop",
        "image": "assets/pokedex/066.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 41,
        "name": "Machoke",
        "image": "assets/pokedex/067.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 42,
        "name": "Machamp",
        "image": "assets/pokedex/068.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 43,
        "name": "Psyduck",
        "image": "assets/pokedex/054.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 44,
        "name": "Golduck",
        "image": "assets/pokedex/055.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 45,
        "name": "Burmy",
        "image": "assets/pokedex/412.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 46,
        "name": "Wormadam",
        "image": "assets/pokedex/413.png",
        "types": "Bug, Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 47,
        "name": "Mothim",
        "image": "assets/pokedex/414.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 48,
        "name": "Wurmple",
        "image": "assets/pokedex/265.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 49,
        "name": "Silcoon",
        "image": "assets/pokedex/266.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 50,
        "name": "Beautifly",
        "image": "assets/pokedex/267.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 51,
        "name": "Cascoon",
        "image": "assets/pokedex/268.png",
        "types": "Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 52,
        "name": "Dustox",
        "image": "assets/pokedex/269.png",
        "types": "Bug, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 53,
        "name": "Combee",
        "image": "assets/pokedex/415.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 54,
        "name": "Vespiquen",
        "image": "assets/pokedex/416.png",
        "types": "Bug, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 55,
        "name": "Pachirisu",
        "image": "assets/pokedex/417.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 56,
        "name": "Buizel",
        "image": "assets/pokedex/418.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 57,
        "name": "Floatzel",
        "image": "assets/pokedex/419.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 58,
        "name": "Cherubi",
        "image": "assets/pokedex/420.png",
        "types": "Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 59,
        "name": "Cherrim",
        "image": "assets/pokedex/421.png",
        "types": "Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 60,
        "name": "Shellos",
        "image": "assets/pokedex/422.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 61,
        "name": "Gastrodon",
        "image": "assets/pokedex/423.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 62,
        "name": "HeraCross",
        "image": "assets/pokedex/214.png",
        "types": "Bug, Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 63,
        "name": "Aipom",
        "image": "assets/pokedex/190.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 64,
        "name": "Ambipom",
        "image": "assets/pokedex/424.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 65,
        "name": "Drifloon",
        "image": "assets/pokedex/425.png",
        "types": "Ghost, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 66,
        "name": "Drifblim",
        "image": "assets/pokedex/426.png",
        "types": "Ghost, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 67,
        "name": "Buneary",
        "image": "assets/pokedex/427.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 68,
        "name": "Lopunny",
        "image": "assets/pokedex/428.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 69,
        "name": "Gastly",
        "image": "assets/pokedex/092.png",
        "types": "Ghost, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 70,
        "name": "Haunter",
        "image": "assets/pokedex/093.png",
        "types": "Ghost, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 71,
        "name": "Gengar",
        "image": "assets/pokedex/094.png",
        "types": "Ghost, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 72,
        "name": "Misdreavus",
        "image": "assets/pokedex/200.png",
        "types": "Ghost",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 73,
        "name": "Mismagius",
        "image": "assets/pokedex/429.png",
        "types": "Ghost",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 74,
        "name": "Murkrow",
        "image": "assets/pokedex/198.png",
        "types": "Dark, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 75,
        "name": "Honchkrow",
        "image": "assets/pokedex/430.png",
        "types": "Dark, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 76,
        "name": "Glameow",
        "image": "assets/pokedex/431.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 77,
        "name": "Purugly",
        "image": "assets/pokedex/432.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 78,
        "name": "Goldeen",
        "image": "assets/pokedex/118.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 79,
        "name": "Seaking",
        "image": "assets/pokedex/119.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 80,
        "name": "Barboach",
        "image": "assets/pokedex/339.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 81,
        "name": "Whiscash",
        "image": "assets/pokedex/340.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 82,
        "name": "Chingling",
        "image": "assets/pokedex/433.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 83,
        "name": "Chimecho",
        "image": "assets/pokedex/358.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 84,
        "name": "Stunky",
        "image": "assets/pokedex/434.png",
        "types": "Poison, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 85,
        "name": "Skuntank",
        "image": "assets/pokedex/435.png",
        "types": "Poison, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 86,
        "name": "Meditite",
        "image": "assets/pokedex/307.png",
        "types": "Fighting, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 87,
        "name": "Medicham",
        "image": "assets/pokedex/308.png",
        "types": "Fighting, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 88,
        "name": "Bronzor",
        "image": "assets/pokedex/436.png",
        "types": "Steel, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 89,
        "name": "Bronzong",
        "image": "assets/pokedex/437.png",
        "types": "Steel, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 90,
        "name": "Ponyta",
        "image": "assets/pokedex/077.png",
        "types": "Fire",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 91,
        "name": "Rapidash",
        "image": "assets/pokedex/078.png",
        "types": "Fire",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 92,
        "name": "Bonsly",
        "image": "assets/pokedex/438.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 93,
        "name": "Sudowoodo",
        "image": "assets/pokedex/185.png",
        "types": "Rock",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 94,
        "name": "Mime Jr.",
        "image": "assets/pokedex/439.png",
        "types": "Psychic, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 95,
        "name": "Mr. Mime",
        "image": "assets/pokedex/122.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 96,
        "name": "Happiny",
        "image": "assets/pokedex/440.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 97,
        "name": "Chansey",
        "image": "assets/pokedex/113.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 98,
        "name": "Blissey",
        "image": "assets/pokedex/242.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 99,
        "name": "Cleffa",
        "image": "assets/pokedex/173.png",
        "types": "Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 100,
        "name": "Clefairy",
        "image": "assets/pokedex/035.png",
        "types": "Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 101,
        "name": "Clefable",
        "image": "assets/pokedex/036.png",
        "types": "Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 102,
        "name": "Chatot",
        "image": "assets/pokedex/441.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 103,
        "name": "Pichu",
        "image": "assets/pokedex/172.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 104,
        "name": "Pikachu",
        "image": "assets/pokedex/025.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 105,
        "name": "Raichu",
        "image": "assets/pokedex/026.png",
        "types": "Electric",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 106,
        "name": "Hoothoot",
        "image": "assets/pokedex/163.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 107,
        "name": "Noctowl",
        "image": "assets/pokedex/164.png",
        "types": "Normal, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 108,
        "name": "Spiritomb",
        "image": "assets/pokedex/442.png",
        "types": "Ghost, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 109,
        "name": "Gible",
        "image": "assets/pokedex/443.png",
        "types": "Dragon, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 110,
        "name": "Gabite",
        "image": "assets/pokedex/164.png",
        "types": "Dragon, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 111,
        "name": "Garchomp",
        "image": "assets/pokedex/445.png",
        "types": "Dragon, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 112,
        "name": "Munchlax",
        "image": "assets/pokedex/446.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 113,
        "name": "Snorlax",
        "image": "assets/pokedex/143.png",
        "types": "Normal",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 114,
        "name": "Unkown",
        "image": "assets/pokedex/201.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 115,
        "name": "Riolu",
        "image": "assets/pokedex/447.png",
        "types": "Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 116,
        "name": "Lucario",
        "image": "assets/pokedex/448.png",
        "types": "Fighting, Steel",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 117,
        "name": "Wooper",
        "image": "assets/pokedex/194.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 118,
        "name": "Quagsire",
        "image": "assets/pokedex/195.png",
        "types": "Water, Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 119,
        "name": "Wingull",
        "image": "assets/pokedex/278.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 120,
        "name": "Pelipper",
        "image": "assets/pokedex/279.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 121,
        "name": "Girafarig",
        "image": "assets/pokedex/203.png",
        "types": "Normal, Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 122,
        "name": "Hippopotas",
        "image": "assets/pokedex/449.png",
        "types": "Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 123,
        "name": "Hippowdon",
        "image": "assets/pokedex/450.png",
        "types": "Ground",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 124,
        "name": "Azurill",
        "image": "assets/pokedex/298.png",
        "types": "Normal, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 125,
        "name": "Marill",
        "image": "assets/pokedex/183.png",
        "types": "Water, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 126,
        "name": "Azumarill",
        "image": "assets/pokedex/184.png",
        "types": "Water, Fairy",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 127,
        "name": "Skorupi",
        "image": "assets/pokedex/451.png",
        "types": "Poison, Bug",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 128,
        "name": "Drapion",
        "image": "assets/pokedex/452.png",
        "types": "Poison, Dark",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 129,
        "name": "Croagunk",
        "image": "assets/pokedex/453.png",
        "types": "Poison, Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 130,
        "name": "Toxicroak",
        "image": "assets/pokedex/454.png",
        "types": "Poison, Fighting",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 131,
        "name": "Carnivine",
        "image": "assets/pokedex/455.png",
        "types": "Grass",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 132,
        "name": "Remoraid",
        "image": "assets/pokedex/223.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 133,
        "name": "Octillery",
        "image": "assets/pokedex/224.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 134,
        "name": "Finneon",
        "image": "assets/pokedex/456.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 135,
        "name": "Lumineon",
        "image": "assets/pokedex/457.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 136,
        "name": "Tentacool",
        "image": "assets/pokedex/072.png",
        "types": "Water, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 137,
        "name": "Tentacruel",
        "image": "assets/pokedex/073.png",
        "types": "Water, Poison",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 138,
        "name": "Feebas",
        "image": "assets/pokedex/349.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 139,
        "name": "Milotic",
        "image": "assets/pokedex/350.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 140,
        "name": "Mantyke",
        "image": "assets/pokedex/458.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 141,
        "name": "Mantine",
        "image": "assets/pokedex/226.png",
        "types": "Water, Flying",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 142,
        "name": "Snover",
        "image": "assets/pokedex/459.png",
        "types": "Grass, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 143,
        "name": "Abomasnow",
        "image": "assets/pokedex/460.png",
        "types": "Grass, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 144,
        "name": "Sneasel",
        "image": "assets/pokedex/215.png",
        "types": "Dark, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 145,
        "name": "Weavile",
        "image": "assets/pokedex/461.png",
        "types": "Dark, Ice",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 146,
        "name": "Uxie",
        "image": "assets/pokedex/480.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 147,
        "name": "Mesprit",
        "image": "assets/pokedex/481.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 148,
        "name": "Azelf",
        "image": "assets/pokedex/482.png",
        "types": "Psychic",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 149,
        "name": "Dialga",
        "image": "assets/pokedex/483.png",
        "types": "Steel, Dragon",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 150,
        "name": "Dialga",
        "image": "assets/pokedex/484.png",
        "types": "Water, Dragon",
        "superEffective": "",
        "notEffective": ""
    },
    {
        "id": 151,
        "name": "Manaphy",
        "image": "assets/pokedex/490.png",
        "types": "Water",
        "superEffective": "",
        "notEffective": ""
    }
]

const seedPokedex = () => Pokedex.bulkCreate(pokedex);
  
module.exports = seedPokedex;