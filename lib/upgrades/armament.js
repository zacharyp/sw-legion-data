"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrades = [
    {
        ldf: 'a180pistolconfig',
        name: 'A-180 Pistol Config',
        points: 0,
        restrictions: [{ name: 'Jyn Erso only', ldf: 'jynerso' }],
        slot: 'Armament',
        weapon: {
            name: 'A-180 Pistol Config',
            range: { from: 1, to: 2 },
            dice: { red: 2, white: 1 },
            keywords: ['Pierce 1', 'Reconfigure'],
        },
    },
    {
        ldf: 'a180rifleconfig',
        name: 'A-180 Rifle Config',
        points: 0,
        restrictions: [{ name: 'Jyn Erso only', ldf: 'jynerso' }],
        slot: 'Armament',
        weapon: {
            name: 'A-180 Rifle Config',
            range: { from: 1, to: 3 },
            dice: { black: 2, white: 1 },
            keywords: ['Pierce 1', 'Reconfigure'],
        },
    },
    {
        ldf: 'a300shortrangeconfig',
        name: 'A-300 Short Range Config',
        points: 0,
        printed_points: 6,
        restrictions: [{ name: 'Rebel Pathfinders only', ldf: 'rebelpathfinders' }],
        slot: 'Armament',
        weapon: {
            name: 'A-300 Short Range Config',
            range: { from: 1, to: 2 },
            dice: { red: 1 },
            keywords: ['Reconfigure'],
        },
    },
    {
        ldf: 'a300longrangeconfig',
        name: 'A-300 Long Range Config',
        points: 0,
        printed_points: 6,
        restrictions: [{ name: 'Rebel Pathfinders only', ldf: 'rebelpathfinders' }],
        slot: 'Armament',
        weapon: {
            name: 'A-300 Long Range Config',
            range: { from: 1, to: 4 },
            dice: { white: 1 },
            keywords: ['Reconfigure'],
        },
    },
    {
        ldf: 'e11dgrenadelauncherconfig',
        name: 'E-11D Grenade Launcher Config',
        points: 8,
        restrictions: [
            {
                name: 'Imperial Death Troopers only',
                ldf: 'imperialdeathtroopers',
            },
        ],
        slot: 'Armament',
        exhaust: true,
        weapon: {
            name: 'E-11D Grenade Launcher Config',
            range: { from: 1, to: 2 },
            dice: { red: 1 },
            keywords: ['Blast', 'Reconfigure'],
        },
    },
    {
        ldf: 'e11dfocusedfireconfig',
        name: 'E-11D Focused Fire Config',
        points: 8,
        restrictions: [
            {
                name: 'Imperial Death Troopers only',
                ldf: 'imperialdeathtroopers',
            },
        ],
        slot: 'Armament',
        exhaust: true,
        weapon: {
            name: 'E-11D Focused Fire Config',
            range: { from: 1, to: 4 },
            dice: { black: 1 },
            keywords: ['Suppressive', 'Reconfigure'],
        },
    },
    {
        ldf: 'thedarksaber',
        name: 'The Darksaber',
        points: 25,
        restrictions: [
            {
                name: 'Sabine Wren',
                ldf: 'sabinewren',
            },
        ],
        slot: 'Armament',
        description: 'You gain Dauntless (After you rally, if you are suppressed but not panicked, you may gain 1 suppression token to perform a free move action.)\n\nWhile defending against a melee attack, you gain Immune: Pierce.',
        keywords: ['Impact 1', 'Pierce 1'],
        weapon: {
            range: { from: 0, to: 0 },
            dice: { black: 5 },
        },
    },
    {
        ldf: 'dt57annihilator',
        name: 'DT-57 "Annihilator"',
        points: 12,
        restrictions: [
            {
                name: 'General Grievous only',
                ldf: 'generalgrievous',
            },
        ],
        slot: 'Armament',
        keywords: ['Critical 1', 'Pierce 1', 'Versatile'],
        weapon: {
            range: { from: 0, to: 2 },
            dice: { black: 2, white: 2 },
        },
    },
    {
        ldf: 't21blasterrifle',
        name: 'T-21 Blaster Rifle',
        points: 10,
        restrictions: [
            {
                name: 'Dewback Rider only',
                ldf: 'dewbackrider',
            },
        ],
        slot: 'Armament',
        keywords: ['Critical 2'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 4 },
        },
    },
    {
        ldf: 'rt97cblasterrifle',
        name: 'RT-97C Blaster Rifle',
        points: 15,
        restrictions: [
            {
                name: 'Dewback Rider only',
                ldf: 'dewbackrider',
            },
        ],
        slot: 'Armament',
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 1, white: 3 },
        },
    },
    {
        ldf: 'cr24flamerifle',
        name: 'CR-24 Flame Rifle',
        points: 20,
        restrictions: [
            {
                name: 'Dewback Rider only',
                ldf: 'dewbackrider',
            },
        ],
        slot: 'Armament',
        keywords: ['Blast', 'Spray'],
        weapon: {
            range: { from: 1, to: 1 },
            dice: { black: 1, white: 1 },
        },
    },
    {
        ldf: 'deflectorshields',
        name: 'Deflector Shields',
        points: 18,
        restrictions: [
            {
                name: 'BX-Series Droid Commandos only',
                ldf: 'bxseriesdroidcommandos',
            },
        ],
        slot: 'Armament',
        keywords: ['Shielded 2', 'Recharge 2'],
    },
    {
        ldf: 'vibroswords',
        name: 'Vibroswords',
        points: 6,
        restrictions: [
            {
                name: 'BX-Series Droid Commandos only',
                ldf: 'bxseriesdroidcommandos',
            },
        ],
        slot: 'Armament',
        keywords: [],
        weapon: {
            range: { from: 0 },
            dice: { red: 1, white: 1 },
        },
    },
    {
        ldf: 'a280cfepistolconfig',
        name: 'A280-CFE Pistol Config',
        points: 10,
        restrictions: [{ name: 'Cassian Andor only', ldf: 'cassianandor' }],
        slot: 'Armament',
        weapon: {
            name: 'A280-CFE Pistol Config',
            range: { from: 1, to: 2 },
            dice: { red: 2, black: 1 },
            keywords: ['Pierce 1', 'Reconfigure', 'Long Shot 1'],
        },
    },
    {
        ldf: 'a280cfesniperconfig',
        name: 'A280-CFE Sniper Config',
        points: 10,
        restrictions: [{ name: 'Cassian Andor only', ldf: 'cassianandor' }],
        slot: 'Armament',
        weapon: {
            name: 'A280-CFE Sniper Config',
            range: { from: 1 },
            dice: { black: 1, red: 1 },
            keywords: ['Cumbersome', 'High Velocity', 'Pierce 1', 'Reconfigure'],
        },
    },
    {
        ldf: 'jynsse14blaster',
        name: "Jyn's SE-14 Blaster",
        description: "While Jyn Erso is in your army, reduce this card's points by 5.",
        points: 10,
        restrictions: [
            { name: 'Jyn Erso only', ldf: 'jynerso' },
            { name: 'K-2SO only', ldf: 'k2so' },
        ],
        slot: 'Armament',
        weapon: {
            name: "Jyn's SE-14 Blaster",
            range: { from: 1, to: 2 },
            dice: { white: 5 },
            keywords: ['Pierce 1', 'Suppressive'],
        },
    },
    {
        ldf: 'idenstl50repeater',
        name: "Iden's TL-50 Repeater",
        points: 15,
        restrictions: [
            { name: 'Iden Versio only', ldf: 'idenversio' },
        ],
        slot: 'Armament',
        weapon: {
            name: "Iden's TL-50 Repeater",
            range: { from: 1, to: 3 },
            dice: { black: 1, red: 2, white: 2 },
            keywords: ['Critical 1', 'Impact 1'],
        },
    },
    {
        ldf: 'idensdlt20arifle',
        name: "Iden's DLT-20A Rifle",
        points: 15,
        restrictions: [
            { name: 'Iden Versio only', ldf: 'idenversio' },
        ],
        slot: 'Armament',
        weapon: {
            name: "Iden's DLT-20A Rifle",
            range: { from: 1 },
            dice: { black: 2 },
            keywords: ['High Velocity', 'Pierce 1'],
        },
    },
];
exports.default = upgrades;
//# sourceMappingURL=armament.js.map