
const gameDatabase = [
  {
    id: "wukong",
    name: "Black Myth: Wukong",
    coverImage: "images/wukong-cover.jpg",
    country: "China",
    genre: "Action RPG",
    developer: "Game Science",
    icon: "🐒",
    description: "An action RPG inspired by Chinese mythology.",
    
availability: {
  
Philippines: {
  status: "unverified",
  officialDownload: null,
  accountRequirements: null,
  phoneVerification: null,
  identityVerification: null,
  internationalServer: null,
  evidenceSources: [
  {
    title: "Black Myth: Wukong - Steam Store",
    url: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    sourceType: "authorized_store",
    verificationStatus: "pending",
    checkedAt: null,
    notes: "Steam store page displays a price and purchase button. Regional purchase and installation eligibility remain unverified.",

  }
],
  lastChecked: null,
notes: "Regional availability has not been verified.",
storeObservation: {
  purchaseButtonVisible: true,
  priceVisible: true,
  observedAt: "2026-11-09",
  observationType: "manual",
  accountCountryConfirmed: true
  }
},

  Malaysia: {
    status: "unverified",
    officialDownload: null,
    accountRequirements: null,
    notes: "Regional availability has not been verified."
  },
  Singapore: {
    status: "unverified",
    officialDownload: null,
    accountRequirements: null,
    notes: "Regional availability has not been verified."
  }
},
officialSources: [ {
    name: "Steam Official Store",
    type: "authorized_store",
    url: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    verified: true
  }],
lastVerified: null,
verificationStatus: "unverified"
  },
  {
    id: "elden",
    name: "Elden Ring",
    coverImage: "images/elden-cover.jpg",
    country: "Japan",
    genre: "Action RPG",
    developer: "FromSoftware",
    icon: "⚔️",
    description: "Explore a vast fantasy world.",
availability: {},

officialSources: [
  {
    name: "Steam Official Store",
    type: "authorized_store",
    url: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    verified: true
  }
],

lastVerified: null,
verificationStatus: "unverified"
  },
  {
    id: "pubg",
    name: "PUBG: BATTLEGROUNDS",
    coverImage: "images/pubg-cover.jpg",
    country: "Korea",
    genre: "Battle Royale",
    developer: "PUBG Studios",
    icon: "🪖",
    description: "A multiplayer battle royale game.",
    availability: {},

officialSources: [
  {
    name: "Steam Official Store",
    type: "authorized_store",
    url: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
    verified: true
  }
],

lastVerified: null,
verificationStatus: "unverified"
  },
  {
    id: "stardew",
    name: "Stardew Valley",
    coverImage: "images/stardew-cover.jpg",
    country: "USA",
    genre: "Simulation",
    developer: "ConcernedApe",
    icon: "🌾",
    description: "Build a farm and enjoy village life.",
availability: {},

officialSources: [
  {
    name: "Steam Official Store",
    type: "authorized_store",
    url: "https://store.steampowered.com/app/413150/Stardew_Valley/",
    verified: true
  }
],

lastVerified: null,
verificationStatus: "unverified"
  },
  {
    id: "lies",
    name: "Lies of P",
    coverImage: "images/lies-cover.jpg",
    country: "Korea",
    genre: "Action RPG",
    developer: "NEOWIZ / ROUND8 Studio",
    icon: "🎭",
    description: "A dark fantasy action game.",
availability: {},

officialSources: [
  {
    name: "Steam Official Store",
    type: "authorized_store",
    url: "https://store.steampowered.com/app/1627720/Lies_of_P/",
    verified: true
  }
],

lastVerified: null,
verificationStatus: "unverified"
  },
  {
    id: "palworld",
    name: "Palworld",
    coverImage: "images/palworld-cover.jpg",
    country: "Japan",
    genre: "Survival",
    developer: "Pocketpair",
    icon: "🐾",
    description: "Explore, build and collect creatures.",
availability: {},

officialSources: [
  {
    name: "Steam Official Store",
    type: "authorized_store",
    url: "https://store.steampowered.com/app/1623730/Palworld/",
    verified: true
  }
],

lastVerified: null,
verificationStatus: "unverified"
    },
  {
    id: "wuchang",
    name: "WUCHANG: Fallen Feathers",
    coverImage: "images/wuchang-cover.jpg",
    country: "China",
    genre: "Action RPG",
    developer: "Leenzee",
    icon: "⚔️",
    description: "A soulslike action RPG set in the late Ming Dynasty.",

    availability: {},

    officialSources: [
      {
        name: "Steam Official Store",
        type: "authorized_store",
        url: "https://store.steampowered.com/app/2277560/WUCHANG_Fallen_Feathers/",
        verified: true
      }
    ],

    lastVerified: null,
    verificationStatus: "unverified"
  },
 {
    id: "stellar-blade",
    name: "Stellar Blade",
    coverImage: "images/stellar-blade-cover.jpg",
    country: "South Korea",
    genre: "Action Adventure",
    developer: "SHIFT UP Corporation",
    icon: "⚔️",
    description: "A post-apocalyptic action adventure following EVE on a mission to reclaim Earth.",

    availability: {},

    officialSources: [
      {
        name: "Steam Official Store",
        type: "authorized_store",
        url: "https://store.steampowered.com/app/3489700/Stellar_Blade/",
        verified: true
      }
    ],

    lastVerified: null,
    verificationStatus: "unverified"
  },
  {
    id: "naraka-bladepoint",
    name: "NARAKA: BLADEPOINT",
    coverImage: "images/naraka-cover.jpg",
    country: "China",
    genre: "Battle Royale",
    developer: "24 Entertainment",
    icon: "⚔️",
    description: "A free-to-play multiplayer battle royale featuring martial arts, melee combat, and fast-paced action.",

    availability: {},

    officialSources: [
      {
        name: "Steam Official Store",
        type: "authorized_store",
        url: "https://store.steampowered.com/app/1203220/",
        verified: true
      }
    ],

    lastVerified: null,
    verificationStatus: "unverified"
  },
  {
    id: "monster-hunter-wilds",
    name: "Monster Hunter Wilds",
    coverImage: "images/monster-hunter-wilds-cover.jpg",
    country: "Japan",
    genre: "Action RPG",
    developer: "CAPCOM Co., Ltd.",
    icon: "🐉",
    description: "An action RPG where players hunt powerful monsters in dynamic environments, craft equipment, and explore the Forbidden Lands.",

    availability: {},

    officialSources: [
      {
        name: "Steam Official Store",
        type: "authorized_store",
        url: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
        verified: true
      }
    ],

    lastVerified: null,
    verificationStatus: "unverified"
  
  },
  {
    id: "the-first-berserker-khazan",
    name: "The First Berserker: Khazan",
    coverImage: "images/the-first-berserker-khazan-cover.jpg",
    country: "South Korea",
    genre: "Action RPG",
    developer: "Neople",
    icon: "⚔️",
    description: "A hardcore action RPG set in the Dungeon & Fighter universe. Play as Khazan, a legendary general seeking revenge through challenging battles and powerful combat skills.",

    availability: {},

    officialSources: [
      {
        name: "Steam Official Store",
        type: "authorized_store",
        url: "https://store.steampowered.com/app/2680010/The_First_Berserker_Khazan/",
        verified: true
      }
          ],


    lastVerified: null,
    verificationStatus: "unverified"
  },
  {
    id: "inzoi",
    name: "inZOI",
    coverImage: "images/inzoi-cover.jpg",
    country: "South Korea",
    genre: "Life Simulation",
    developer: "inZOI Studio",
    icon: "🏙️",
    description: "A realistic life simulation game where players create characters, build homes, manage relationships, and shape their own stories in a living virtual world.",

    availability: {},

    officialSources: [
      {
        name: "Steam Official Store",
        type: "authorized_store",
        url: "https://store.steampowered.com/app/2456740/inZOI/",
        verified: true
      }
    ],

    lastVerified: null,
    verificationStatus: "unverified"
  }

];

if (typeof module !== "undefined" && module.exports) {
  module.exports = gameDatabase;
}
