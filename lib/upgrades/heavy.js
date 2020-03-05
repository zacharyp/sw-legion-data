"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrades = [
    {
        ldf: 'dlt19stormtrooper',
        name: 'DLT-19 Stormtrooper',
        slot: 'Heavy Weapon',
        points: 24,
        restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
        description: 'Add 1 DLT-19 Stormtrooper mini',
        keywords: ['Impact 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 2 },
        },
    },
    {
        ldf: 'hh12stormtrooper',
        name: 'HH-12 Stormtrooper',
        exhaust: true,
        slot: 'Heavy Weapon',
        restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
        description: 'Add 1 HH-12 Stormtrooper mini',
        points: 26,
        keywords: ['Cumbersome', 'Impact 3'],
        weapon: {
            range: { from: 2, to: 4 },
            dice: { black: 3 },
        },
    },
    {
        ldf: 'mpl57iontrooper',
        name: 'MPL-57 Ion Trooper',
        side: 'light',
        slot: 'Heavy Weapon',
        points: 24,
        exhaust: true,
        restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
        description: 'Add 1 MPL-57 ion trooper figure',
        keywords: ['Impact 1', 'Ion 1'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { red: 2 },
        },
    },
    {
        ldf: 'z6trooper',
        name: 'Z-6 Trooper',
        slot: 'Heavy Weapon',
        restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
        points: 22,
        description: 'Add 1 Z-6 Trooper mini',
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 6 },
        },
    },
    {
        ldf: 't7ionsnowtrooper',
        name: 'T-7 Ion Snowtrooper',
        slot: 'Heavy Weapon',
        points: 26,
        exhaust: true,
        restrictions: [{ name: 'Snowtroopers only', ldf: 'snowtroopers' }],
        description: 'Add 1 T-7 Ion trooper figure',
        keywords: ['Impact 1', 'Ion 1'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 1, white: 2 },
        },
    },
    {
        ldf: 'scatterguntrooper',
        name: 'Scatter Gun Trooper',
        slot: 'Heavy Weapon',
        points: 23,
        restrictions: [{ name: 'Fleet Troopers only', ldf: 'fleettroopers' }],
        description: 'Add 1 Scatter Gun Trooper figure',
        keywords: ['Pierce 1'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { red: 2 },
        },
    },
    {
        ldf: 'mpl57barragetrooper',
        name: 'MPL-57 Barrage Trooper',
        slot: 'Heavy Weapon',
        points: 25,
        restrictions: [{ name: 'Fleet Troopers only', ldf: 'fleettroopers' }],
        description: 'Add 1 MPL-57 barrage trooper mini',
        exhaust: true,
        keywords: ['Blast', 'Impact 2'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 1, white: 2 },
        },
    },
    {
        ldf: 'flametrooper',
        name: 'Flametrooper',
        slot: 'Heavy Weapon',
        points: 20,
        restrictions: [{ name: 'Snowtroopers only', ldf: 'snowtroopers' }],
        description: 'Add 1 Flametrooper figure',
        keywords: ['Blast', 'Spray'],
        weapon: {
            range: { from: 1 },
            dice: { black: 1 },
        },
    },
    {
        ldf: 'dh447sniper',
        name: 'DH-447 Sniper',
        slot: 'Heavy Weapon',
        points: 28,
        restrictions: [
            { name: 'Rebel Commandos only', ldf: 'rebelcommandos' },
            { name: 'Rebel Commandos only', ldf: 'rebelcommandosstriketeam' },
        ],
        description: 'Add 1 DH-447 Sniper mini',
        keywords: ['High Velocity', 'Pierce 1'],
        weapon: {
            range: { from: 1, to: 5 },
            dice: { black: 1, white: 1 },
        },
    },
    {
        ldf: 'protonchargesaboteur',
        name: 'Proton Charge Saboteur',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [
            { name: 'Rebel Commandos only', ldf: 'rebelcommandos' },
            { name: 'Rebel Commandos only', ldf: 'rebelcommandosstriketeam' },
        ],
        description: 'Add 1 Proton Charge Saboteur mini',
        keywords: [
            'Arm 1: Proton Charge',
            'Detonate 1: Proton Charge',
            'Blast',
            'Impact 1',
        ],
        weapon: {
            range: { from: 1, to: 1 },
            dice: { red: 1, white: 2 },
        },
    },
    {
        ldf: 'electrostaffguard',
        name: 'Electrostaff Guard',
        slot: 'Heavy Weapon',
        points: 25,
        restrictions: [
            {
                name: 'Imperial Royal Guards only',
                ldf: 'imperialroyalguards',
            },
        ],
        description: 'Add 1 electrostaff guard mini. While defending against a melee attack, you gain <strong>Immune: Pierce</strong> (Pierce cannot be used against you.)',
        keywords: ['Sidearm: Melee'],
        weapon: {
            range: { from: 0 },
            dice: { black: 2 },
        },
    },
    {
        ldf: 'dlt19xsniper',
        name: 'DLT-19x Sniper',
        slot: 'Heavy Weapon',
        points: 28,
        restrictions: [
            { name: 'Scout Troopers only', ldf: 'scouttroopers' },
            { name: 'Scout Troopers only', ldf: 'scouttroopersstriketeam' },
        ],
        description: 'Add 1 DLT-19x sniper mini.',
        keywords: ['High Velocity', 'Pierce 1'],
        weapon: {
            range: { from: 1, to: 5 },
            dice: { black: 2 },
        },
    },
    {
        ldf: 'sonicchargesaboteur',
        name: 'Sonic Charge Saboteur',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [
            { name: 'Scout Troopers only', ldf: 'scouttroopers' },
            { name: 'Scout Troopers only', ldf: 'scouttroopersstriketeam' },
        ],
        description: 'Add 1 sonic charge saboteur mini.',
        keywords: [
            'Arm 1: Sonic Charge',
            'Detonate 1: Sonic Charge',
            'Blast',
            'Suppressive',
        ],
        weapon: {
            range: { from: 1 },
            dice: { black: 1, red: 1 },
        },
    },
    {
        ldf: 'bowcasterwookiee',
        name: 'Bowcaster Wookiee',
        slot: 'Heavy Weapon',
        points: 35,
        restrictions: [{ name: 'Wookiee Warriors only', ldf: 'bowcasterwookiee' }],
        description: 'Add 1 bowcaster wookiee mini.',
        keywords: ['Impact 1', 'Pierce 1'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { red: 1, white: 1 },
        },
    },
    {
        ldf: 'bistan',
        name: 'Bistan',
        slot: 'Heavy Weapon',
        points: 32,
        unique: true,
        restrictions: [{ name: 'Rebel Pathfinders only', ldf: 'rebelpathfinders' }],
        description: 'Add 1 Bistan mini.',
        exhaust: true,
        keywords: ['Impact 1', 'Ion 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { black: 1, white: 4 },
        },
    },
    {
        ldf: 'pao',
        name: 'Pao',
        side: 'light',
        slot: 'Heavy Weapon',
        points: 22,
        unique: true,
        restrictions: [{ name: 'Rebel Pathfinders only', ldf: 'rebelpathfinders' }],
        description: 'Add 1 Pao mini.',
        exhaust: true,
        keywords: ['Inspire 1', 'Leader'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 1, white: 1 },
        },
    },
    {
        ldf: 'dtf16',
        name: 'DT-F16',
        slot: 'Heavy Weapon',
        points: 22,
        unique: true,
        restrictions: [
            {
                name: 'Imperial Death Troopers only',
                ldf: 'imperialdeathtroopers',
            },
        ],
        description: 'Add 1 DT-F16 mini.',
        keywords: ['Compel', 'Leader'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 1, white: 1 },
        },
    },
    {
        ldf: 'dlt19dtrooper',
        name: 'DLT-19D Trooper',
        slot: 'Heavy Weapon',
        points: 34,
        restrictions: [
            {
                name: 'Imperial Death Troopers only',
                ldf: 'imperialdeathtroopers',
            },
        ],
        description: 'Add 1 DLT-19D trooper mini.',
        keywords: ['Impact 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 2, white: 1 },
        },
    },
    {
        ldf: 'cmo93trooper',
        name: 'CM-O/93 Trooper',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [
            {
                name: 'Rebel Veterans only',
                ldf: 'rebelveterans',
            },
        ],
        description: 'Add 1 CM-O/93 trooper mini.',
        keywords: ['Critical 2'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 4 },
        },
    },
    {
        ldf: 't21btrooper',
        name: 'T-21B Trooper',
        slot: 'Heavy Weapon',
        points: 32,
        restrictions: [
            {
                name: 'Shoretroopers only',
                ldf: 'shoretroopers',
            },
        ],
        description: 'Add 1 T-21B trooper mini.',
        keywords: ['Critical 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { white: 2, black: 2 },
        },
    },
    {
        ldf: 'dc15phaseitrooper',
        name: 'DC-15 Phase I Trooper',
        slot: 'Heavy Weapon',
        points: 30,
        restrictions: [
            {
                name: 'Phase I Clone Troopers only',
                ldf: 'phaseiclonetroopers',
            },
        ],
        description: 'Add 1 DC-15 Phase I trooper mini.',
        keywords: ['Critical 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 2 },
        },
    },
    {
        ldf: 'z6phaseitrooper',
        name: 'Z-6 Phase I Trooper',
        slot: 'Heavy Weapon',
        points: 25,
        restrictions: [
            {
                name: 'Phase I Clone Troopers only',
                ldf: 'phaseiclonetroopers',
            },
        ],
        description: 'Add 1 Z-6 Phase I trooper mini.',
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 6 },
        },
    },
    {
        ldf: 'e5cb1trooper',
        name: 'E-5C B1 Trooper',
        slot: 'Heavy Weapon',
        points: 18,
        restrictions: [
            {
                name: 'B1 Battle Droids only.',
                ldf: 'b1battledroids',
            },
        ],
        description: 'Add 1 E-5C B1 trooper mini.',
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 3 },
        },
    },
    {
        ldf: 'e60rb1trooper',
        name: 'E-60R B1 Trooper',
        slot: 'Heavy Weapon',
        points: 20,
        exhaust: true,
        restrictions: [
            {
                name: 'B1 Battle Droids only.',
                ldf: 'b1battledroids',
            },
        ],
        description: 'Add 1 E-60R B1 trooper mini.',
        keywords: ['Impact 2'],
        weapon: {
            range: { from: 2, to: 4 },
            dice: { red: 1, black: 2 },
        },
    },
    {
        ldf: 't21stormtrooper',
        name: 'T-21 Stormtrooper',
        slot: 'Heavy Weapon',
        points: 27,
        restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
        description: 'Add 1 T-21 Stormtrooper mini',
        keywords: ['Critical 2'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 4 },
        },
    },
    {
        ldf: 'rt97cstormtrooper',
        name: 'RT-97C Stormtrooper',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
        description: 'Add 1 RT-97C Stormtrooper mini',
        keywords: [],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { white: 3, red: 1 },
        },
    },
    {
        ldf: 'sx21trooper',
        name: 'SX-21 Trooper',
        slot: 'Heavy Weapon',
        points: 20,
        restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
        description: 'Add 1 SX-21 trooper figure',
        keywords: ['Impact 1'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { red: 2, white: 2 },
        },
    },
    {
        ldf: 'dlt20atrooper',
        name: 'DLT-20A Trooper',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
        description: 'Add 1 DLT-20A trooper figure',
        keywords: ['Critical 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { black: 2, white: 1 },
        },
    },
    {
        ldf: 'radiationcannonb1trooper',
        name: 'Radiation Cannon B1 Trooper',
        slot: 'Heavy Weapon',
        points: 22,
        restrictions: [
            {
                name: 'B1 Battle Droids only.',
                ldf: 'b1battledroids',
            },
        ],
        description: 'Add 1 Radiation Cannon B1 trooper mini.',
        keywords: ['Poison 1'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { red: 2 },
        },
    },
    {
        ldf: 'e5sb1trooper',
        name: 'E-5s B1 Trooper',
        slot: 'Heavy Weapon',
        points: 20,
        restrictions: [
            {
                name: 'B1 Battle Droids only.',
                ldf: 'b1battledroids',
            },
        ],
        description: 'Add 1 E-5s B1 trooper mini.',
        keywords: ['Critical 1'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 1, white: 1 },
        },
    },
    {
        ldf: 'rps6phaseitrooper',
        name: 'RPS-6 Phase I Trooper',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [
            {
                name: 'Phase I Clone Troopers only',
                ldf: 'phaseiclonetroopers',
            },
        ],
        description: 'Add 1 RPS-6 Phase I trooper mini.',
        keywords: ['Cumbersome', 'Impact 2'],
        weapon: {
            range: { from: 2, to: 4 },
            dice: { red: 1, black: 1, white: 1 },
        },
    },
    {
        ldf: 'dp23phaseitrooper',
        name: 'DP-23 Phase I Trooper',
        slot: 'Heavy Weapon',
        points: 27,
        restrictions: [
            {
                name: 'Phase I Clone Troopers only',
                ldf: 'phaseiclonetroopers',
            },
        ],
        description: 'Add 1 DP-23 Phase I trooper mini.',
        keywords: ['Pierce 1'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { black: 2, white: 1 },
        },
    },
    {
        ldf: 'b2acmtrooper',
        name: 'B2-ACM Trooper',
        slot: 'Heavy Weapon',
        points: 26,
        restrictions: [
            {
                name: 'B2 Super Battle Droids only.',
                ldf: 'b2superbattlebattledroids',
            },
        ],
        description: 'Add 1 B2-ACM trooper mini.',
        keywords: [],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { red: 3 },
        },
    },
    {
        ldf: 'b2hatrooper',
        name: 'B2-HA Trooper',
        slot: 'Heavy Weapon',
        exhaust: true,
        points: 32,
        restrictions: [
            {
                name: 'B2 Super Battle Droids only.',
                ldf: 'b2superbattlebattledroids',
            },
        ],
        description: 'Add 1 B2-HA trooper mini.',
        keywords: ['Blast', 'Cycle', 'Impact 2'],
        weapon: {
            range: { from: 2, to: 3 },
            dice: { red: 2, white: 1 },
        },
    },
    {
        ldf: 'phaseiimortartrooper',
        name: 'Phase II Mortar Trooper',
        slot: 'Heavy Weapon',
        points: 25,
        restrictions: [
            {
                name: 'Phase II Clone Troopers only.',
                ldf: 'phaseiiclonetroopers',
            },
        ],
        description: 'Add 1 Phase II mortar trooper mini.',
        keywords: ['Critical 1', 'Suppressive', 'Cumbersome'],
        weapon: {
            range: { from: 2, to: 4 },
            dice: { black: 2 },
        },
    },
    {
        ldf: 'z6phaseiitrooper',
        name: 'Z-6 Phase II Trooper',
        slot: 'Heavy Weapon',
        points: 27,
        restrictions: [
            {
                name: 'Phase II Clone Troopers only.',
                ldf: 'phaseiiclonetroopers',
            },
        ],
        description: 'Add 1 Z-6 Phase II trooper mini.',
        keywords: [],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 6 },
        },
    },
    {
        ldf: 'dp15xarctrooper',
        name: 'DC-15x ARC Trooper',
        slot: 'Heavy Weapon',
        points: 31,
        restrictions: [
            {
                name: 'ARC Troopers only',
                ldf: 'arctroopers',
            },
            {
                name: 'ARC Troopers only',
                ldf: 'arctroopersstriketeam',
            },
        ],
        description: 'Add 1 DP-15x ARC trooper mini.',
        keywords: ['Critical 1', 'Immune: Deflect', 'Lethal 1'],
        weapon: {
            range: { from: 1, to: 5 },
            dice: { black: 1, red: 1 },
        },
    },
];
exports.default = upgrades;
//# sourceMappingURL=heavy.js.map