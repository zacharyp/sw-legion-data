var units = [
    {
        ldf: 'lukeskywalker',
        unique: true,
        name: 'Luke Skywalker',
        subtitle: 'Hero of the Rebellion',
        factions: ["rebel"],
        type: 'Trooper',
        points: 160,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 3,
        defense: 'red',
        surge: { attack: 'crit' },
        speed: 2,
        slots: ['Force', 'Force', 'Gear'],
        keywords: ['Jump 1', 'Charge', 'Deflect', 'Immune: Pierce'],
        weapons: [
            {
                name: "Anakin's Lightsaber",
                range: { from: 0 },
                dice: { black: 6 },
                keywords: ['Impact 2', 'Pierce 2'],
            },
            {
                name: "Luke's DL-44 Blaster Pistol",
                range: { from: 1, to: 2 },
                dice: { red: 2 },
                keywords: ['Pierce 2'],
            },
        ],
        commandCards: ['sonofskywalker', 'myallyistheforce', 'returnofthejedi', 'youserveyourmasterwell', 'iamajedi', 'fullofsurprises'],
    },
    {
        ldf: 'darthvader',
        unique: true,
        name: 'Darth Vader',
        subtitle: 'Dark Lord of the Sith',
        factions: ["imperial"],
        type: 'Trooper',
        points: 190,
        printed_points: 200,
        rank: 'Commander',
        minis: 1,
        wounds: 8,
        courage: 0,
        defense: 'red',
        surge: {},
        speed: 1,
        slots: ['Force', 'Force', 'Force'],
        keywords: ['Deflect', 'Relentless', 'Master of the Force 1', 'Immune: Pierce'],
        weapons: [
            {
                name: "Vader's Lightsaber",
                range: { from: 0 },
                dice: { red: 6 },
                keywords: ['Impact 3', 'Pierce 3'],
            },
        ],
        commandCards: ['implacable', 'newwaystomotivatethem', 'masterofevil', 'vadersmight', 'fearanddeadmen', 'darknessdescends'],
    },
    {
        ldf: 'generalveers',
        unique: true,
        name: 'General Veers',
        subtitle: 'Master Tactician',
        factions: ["imperial"],
        type: 'Trooper',
        points: 80,
        rank: 'Commander',
        minis: 1,
        wounds: 5,
        courage: 2,
        defense: 'red',
        surge: { attack: 'crit' },
        speed: 2,
        slots: ['Command', 'Command', 'Gear'],
        keywords: ['Spotter 2', 'Inspire 1', 'Precise 1', 'Sharpshooter 1'],
        weapons: [
            {
                name: 'Combat Expertise',
                range: { from: 0 },
                dice: { black: 2 },
            },
            {
                name: 'Veers´ E-11 Blaster Rifle',
                range: { from: 1, to: 3 },
                dice: { white: 3 },
                keywords: ['Pierce 1'],
            },
        ],
        commandCards: [
            'maximumfirepower',
            'evasivemaneuvers',
            'imperialdiscipline',
        ],
    },
    {
        ldf: 'leiaorgana',
        name: 'Leia Organa',
        subtitle: 'Fearless and',
        unique: true,
        factions: ["rebel"],
        type: 'Trooper',
        points: 90,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 2,
        defense: 'white',
        surge: { attack: 'crit', defense: 'block' },
        speed: 2,
        slots: ['Command', 'Command', 'Gear'],
        keywords: ['Take Cover 2', 'Inspire 2', 'Nimble', 'Sharpshooter 2'],
        weapons: [
            {
                name: 'Martial Arts',
                range: { from: 0 },
                dice: { black: 3 },
            },
            {
                name: "Leia's Defender Sporting Blaster",
                range: { from: 1, to: 2 },
                dice: { black: 3 },
                keywords: ['Pierce 1'],
            },
        ],
        commandCards: [
            'coordinatedbombardment',
            'notimeforsorrows',
            'somebodyhastosaveourskins',
        ],
    },
    {
        ldf: 'hansolo',
        name: 'Han Solo',
        // subtitle: '',
        unique: true,
        factions: ["rebel"],
        type: 'Trooper',
        points: 120,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 2,
        defense: 'white',
        surge: { attack: 'crit', defense: 'block' },
        speed: 2,
        slots: ['Command', 'Training', 'Gear'],
        keywords: ['Low Profile', 'Gunslinger', 'Sharpshooter 2', 'Uncanny Luck 2'],
        weapons: [
            {
                name: 'Brawl',
                range: { from: 0 },
                dice: { white: 3 },
            },
            {
                name: "Han's DL-44 Blaster Pistol",
                range: { from: 1, to: 2 },
                dice: { red: 2 },
                keywords: ['Pierce 2'],
            },
        ],
        commandCards: ['sorryaboutthemess', 'recklessdiversion', 'changeofplans'],
    },
    {
        ldf: 'emperorpalpatine',
        name: 'Emperor Palpatine',
        // subtitle: '',
        unique: true,
        factions: ["imperial"],
        type: 'Trooper',
        points: 210,
        rank: 'Commander',
        minis: 1,
        wounds: 5,
        courage: 4,
        defense: 'red',
        surge: { attack: 'crit', defense: 'block' },
        speed: 1,
        slots: ['Force', 'Force', 'Force', 'Command'],
        keywords: ['Pulling the Strings', 'Entourage: Imperial Royal Guards', 'Immune: Pierce', 'Master of the Force 2'],
        weapons: [
            {
                name: 'Force Lightning',
                range: { from: 0, to: 2 },
                dice: { red: 2, black: 2, white: 2 },
                keywords: ['Pierce 2', 'Suppressive'],
            },
        ],
        commandCards: ['andnowyouwilldie', 'giveintoyouranger', 'anentirelegion'],
        entourage: ['imperialroyalguards'],
    },
    {
        ldf: 'rebelofficer',
        name: 'Rebel Officer',
        unique: false,
        factions: ["rebel"],
        type: 'Trooper',
        points: 50,
        rank: 'Commander',
        minis: 1,
        wounds: 4,
        courage: 2,
        defense: 'white',
        surge: { attack: 'hit', defense: 'block' },
        speed: 2,
        slots: ['Command', 'Gear'],
        keywords: ['Take Cover 1', 'Inspire 1', 'Sharpshooter 1'],
        weapons: [
            {
                name: 'Unarmed',
                range: { from: 0 },
                dice: { black: 1 },
            },
            {
                name: "Officer's A-180 Blaster Pistol",
                range: { from: 1, to: 2 },
                dice: { black: 1, white: 1 },
            },
        ],
    },
    {
        ldf: 'imperialofficer',
        name: 'Imperial Officer',
        unique: false,
        factions: ["imperial"],
        type: 'Trooper',
        points: 50,
        rank: 'Commander',
        minis: 1,
        wounds: 4,
        courage: 2,
        defense: 'white',
        surge: { attack: 'hit', defense: 'block' },
        speed: 2,
        slots: ['Command', 'Gear'],
        keywords: ['Spotter 1', 'Inspire 1', 'Sharpshooter 1'],
        weapons: [
            {
                name: 'Unarmed',
                range: { from: 0 },
                dice: { black: 1 },
            },
            {
                name: "Officer's RK-3 Blaster Pistol",
                range: { from: 1, to: 2 },
                dice: { black: 1, white: 1 },
            },
        ],
    },
    {
        ldf: 'jynerso',
        name: 'Jyn Erso',
        unique: true,
        factions: ["rebel"],
        type: 'Trooper',
        points: 110,
        printed_points: 130,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 3,
        defense: 'white',
        surge: { attack: 'crit', defense: 'block' },
        speed: 2,
        slots: ['Command', 'Gear', 'Training', 'Armament'],
        keywords: ['Quick Thinking', 'Danger Sense 4', 'Infiltrate'],
        weapons: [
            {
                name: 'Collapsible Tonfa',
                range: { from: 0 },
                dice: { black: 4 },
                keywords: ['Suppressive'],
            },
        ],
        commandCards: ['rebellious', 'trustgoesbothways', 'completethemission'],
    },
    {
        ldf: 'directororsonkrennic',
        name: 'Director Orson Krennic',
        unique: true,
        factions: ["imperial"],
        type: 'Trooper',
        points: 90,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 2,
        defense: 'white',
        surge: { attack: 'crit', defense: 'block' },
        speed: 2,
        slots: ['Command', 'Command', 'Gear'],
        keywords: ['Compel', 'Cunning', 'Entourage: Imperial Death Troopers', 'Sharpshooter 1'],
        weapons: [
            {
                name: 'Unarmed',
                range: { from: 0 },
                dice: { black: 1 },
            },
            {
                name: "Krennic's DT-29 Blaster Pistol",
                range: { from: 1, to: 2 },
                dice: { white: 1, black: 1, red: 1 },
                keywords: ['Pierce 1'],
            },
        ],
        commandCards: [
            'voraciousambition',
            'deploythegarrison',
            'annihilationlooms',
        ],
    },
    {
        ldf: 'generalgrievous',
        name: 'General Grievous',
        unique: true,
        factions: ["separatist"],
        rank: 'Commander',
        type: 'Trooper',
        points: 175,
        minis: 1,
        wounds: 8,
        courage: 2,
        speed: 2,
        defense: 'red',
        slots: ['Armament', 'Command', 'Command', 'Training'],
        surge: {},
        keywords: ['Arsenal 2', 'Block', 'Impervious', 'Jedi Hunter', 'Relentless', 'Scale'],
        weapons: [
            {
                name: 'Trophy Lightsabers',
                dice: { red: 1, black: 2, white: 1 },
                range: { from: 0, to: 0 },
                keywords: ['Impact 1', 'Pierce 1'],
            },
            {
                name: 'Trophy Lightsabers',
                dice: { red: 1, black: 2, white: 1 },
                range: { from: 0, to: 0 },
                keywords: ['Impact 1', 'Pierce 1'],
            },
        ],
        commandCards: ['trainedinyourjediarts', 'supremecommander', 'crushthem'],
    },
    {
        ldf: 'obiwankenobi',
        name: 'Obi-Wan Kenobi',
        unique: true,
        factions: ["republic"],
        rank: 'Commander',
        type: 'Trooper',
        points: 175,
        minis: 1,
        wounds: 6,
        courage: 3,
        speed: 2,
        defense: 'red',
        slots: ['Command', 'Force', 'Force', 'Training'],
        surge: {},
        keywords: ['Jump 1', 'Charge', 'Guardian 3', 'Immune: Pierce', 'Master of the Force 1', 'Soresu Mastery'],
        weapons: [
            {
                name: "Obi-Wan's Lightsaber",
                dice: { red: 2, black: 2, white: 2 },
                range: { from: 0, to: 0 },
                keywords: ['Critical 2', 'Impact 2', 'Pierce 2'],
            },
        ],
        commandCards: ['hellothere', 'knowledgeanddefense', 'generalkenobi'],
    },
    {
        ldf: 'countdooku',
        name: 'Count Dooku',
        unique: true,
        factions: ["separatist"],
        rank: 'Commander',
        type: 'Trooper',
        points: 205,
        minis: 1,
        wounds: 6,
        courage: 3,
        speed: 2,
        defense: 'red',
        slots: ['Command', 'Force', 'Force', 'Force'],
        surge: { attack: 'crit' },
        keywords: ['Cunning', 'Deflect', 'Immune: Pierce', 'Makashi Mastery', 'Master of the Force 2'],
        weapons: [
            {
                name: "Dooku's Lightsaber",
                dice: { red: 5 },
                range: { from: 0, to: 0 },
                keywords: ['Impact 2', 'Pierce 2'],
            },
            {
                name: "Dooku's Lightning",
                dice: { black: 5 },
                range: { from: 1, to: 2 },
                keywords: ['Scatter'],
            },
        ],
        commandCards: [
            'fearsurpriseintimidation',
            'doublethefall',
            'youdisappointme',
        ],
    },
    {
        ldf: 'clonecaptainrex',
        name: 'Clone Captain Rex',
        unique: true,
        factions: ["republic"],
        rank: 'Commander',
        type: 'Trooper',
        points: 90,
        minis: 1,
        wounds: 5,
        courage: 2,
        speed: 2,
        defense: 'red',
        slots: ['Command', 'Gear', 'Gear', 'Grenades', 'Training'],
        surge: { attack: 'crit' },
        keywords: ['Gunslinger', 'Scout 1', 'Scouting Party 2', 'Sharpshooter 1', 'Tactical 1'],
        weapons: [
            {
                name: 'Advanced Combat Training',
                dice: { red: 2 },
                range: { from: 0, to: 0 },
            },
            {
                name: 'Dual DC-17 Hand Blasters',
                dice: { red: 3 },
                range: { from: 1, to: 2 },
            },
        ],
        commandCards: [
            'youcancallmecaptain',
            'eatthisclankers',
            'werenotprogrammed',
        ],
    },
    {
        ldf: 'cassianandor',
        unique: true,
        name: 'Cassian Andor',
        subtitle: 'Capable Intelligence Agent',
        factions: ["rebel"],
        type: 'Trooper',
        points: 90,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 2,
        defense: 'white',
        surge: { attack: 'hit', defense: 'block' },
        speed: 2,
        slots: ['Training', 'Training', 'Gear', 'Armament'],
        keywords: ['Covert Ops', 'Danger Sense 3', 'Loadout', 'Marksman', 'Tactical 1'],
        weapons: [
            {
                name: 'Advanced Combat Training',
                range: { from: 0 },
                dice: { red: 2 },
                keywords: [],
            },
            {
                name: "Cassian's Covert Blaster",
                range: { from: 1, to: 2 },
                dice: { red: 1, white: 2 },
                keywords: ['Pierce 1'],
            },
        ],
        commandCards: ['crackshot', 'sacrifice', 'laststand', 'volunteermission'],
    },
    {
        ldf: 'idenversio',
        unique: true,
        name: 'Iden Versio',
        subtitle: 'Inerno Squad Leader',
        factions: ['imperial'],
        type: 'Trooper',
        points: 100,
        rank: 'Commander',
        minis: 1,
        wounds: 6,
        courage: 3,
        defense: 'red',
        surge: { attack: 'hit' },
        speed: 2,
        slots: ['Training', 'Training', 'Gear', 'Armament'],
        keywords: ['Quick Thinking', 'Covert Ops', 'Loadout', 'Marksman', 'Nimble'],
        weapons: [
            {
                name: 'Advanced Combat Training',
                range: { from: 0 },
                dice: { red: 2 },
                keywords: [],
            },
            {
                name: "Iden's E-11 Blaster Rifle",
                range: { from: 1, to: 2 },
                dice: { white: 3 },
                keywords: ['Pierce 1'],
            },
        ],
        commandCards: ['pulsescan', 'concussiveblast', 'tacticalstrike', 'incapacitate'],
    },
];
export default units;
//# sourceMappingURL=commander.js.map