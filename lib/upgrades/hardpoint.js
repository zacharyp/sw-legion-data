"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrades = [
    {
        ldf: 'atrtlasercannon',
        name: 'AT-RT Laser Cannon',
        slot: 'Hardpoint',
        points: 20,
        restrictions: [{ name: 'AT-RT only', ldf: 'atrt' }],
        keywords: ['Impact 3', 'Fixed: Front'],
        weapon: {
            range: { from: 1, to: 4 },
            dice: { red: 1, black: 2 },
        },
    },
    {
        ldf: 'atrtrotaryblaster',
        name: 'AT-RT Rotary Blaster',
        slot: 'Hardpoint',
        exhaust: false,
        restrictions: [{ name: 'AT-RT only', ldf: 'atrt' }],
        points: 20,
        keywords: ['Fixed: Front'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 5 },
        },
    },
    {
        ldf: 'atrtflamethrower',
        name: 'AT-RT Flame Thrower',
        slot: 'Hardpoint',
        restrictions: [{ name: 'AT-RT only', ldf: 'atrt' }],
        points: 20,
        keywords: ['Blast', 'Fixed: Front', 'Spray'],
        weapon: {
            range: { from: 0, to: 1 },
            dice: { black: 2 },
        },
    },
    {
        ldf: '88twinlightblastercannon',
        name: '88 Twin Light Blaster Cannon',
        slot: 'Hardpoint',
        points: 20,
        restrictions: [{ name: 'AT-ST only', ldf: 'atst' }],
        keywords: ['Impact 1', 'Fixed: Front'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { red: 1, black: 1, white: 1 },
        },
    },
    {
        ldf: 'atstmortarlauncher',
        name: 'AT-ST Mortar Launcher',
        slot: 'Hardpoint',
        points: 10,
        restrictions: [{ name: 'AT-ST only', ldf: 'atst' }],
        keywords: ['Suppressive', 'Fixed: Front'],
        weapon: {
            range: { from: 4 },
            dice: { white: 3 },
        },
    },
    {
        ldf: 'dw3concussiongrenadelauncher',
        name: 'DW-3 Concussion Grenade Launcher',
        slot: 'Hardpoint',
        points: 15,
        restrictions: [{ name: 'AT-ST only', ldf: 'atst' }],
        keywords: ['Blast', 'Fixed: Front'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { black: 2 },
        },
    },
    {
        ldf: 'ax108groundbuzzer',
        name: 'Ax-108 Ground Buzzer',
        slot: 'Hardpoint',
        points: 10,
        restrictions: [{ name: 'T-47 Airspeeder only', ldf: 't47airspeeder' }],
        keywords: ['Fixed: Rear'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { black: 4 },
        },
    },
    {
        ldf: 'modkpowerharpoon',
        name: 'Mo/Dk Power Harpoon',
        slot: 'Hardpoint',
        points: 3,
        restrictions: [{ name: 'T-47 Airspeeder only', ldf: 't47airspeeder' }],
        keywords: ['Impact 1', 'Fixed: Rear', 'Tow Cable'],
        weapon: {
            range: { from: 1, to: 2 },
            dice: { red: 1 },
        },
    },
    {
        ldf: 'dlt19riflepintle',
        name: 'DLT-19 Rifle Pintle',
        slot: 'Hardpoint',
        points: 18,
        restrictions: [{
                name: 'TX-225 GAVw Occupier Combat Assault Tank only.',
                ldf: 'tx225gavwoccupiercombatassaulttank',
            }],
        keywords: ['Impact 1'],
        weapon: {
            range: {
                from: 1,
                to: 4,
            },
            dice: {
                red: 2,
            },
        },
    },
    {
        ldf: 'rt97criflepintle',
        name: 'RT-97C Rifle Pintle',
        slot: 'Hardpoint',
        points: 14,
        restrictions: [{
                name: 'TX-225 GAVw Occupier Combat Assault Tank only.',
                ldf: 'tx225gavwoccupiercombatassaulttank',
            }],
        weapon: {
            range: {
                from: 1,
                to: 4,
            },
            dice: {
                white: 3,
                red: 2,
            },
        },
    },
    {
        ldf: 'markiimediumblaster',
        name: 'Mark II Medium Blaster',
        slot: 'Hardpoint',
        points: 34,
        restrictions: [{
                name: 'X-34 Landspeeder only',
                ldf: 'x34landspeeder',
            }],
        keywords: ['Fixed: Front'],
        weapon: {
            range: {
                from: 1,
                to: 3,
            },
            dice: {
                black: 4,
            },
        },
    },
    {
        ldf: 'm45ionblaster',
        name: 'M-45 Ion Blaster',
        slot: 'Hardpoint',
        points: 38,
        exhaust: true,
        restrictions: [{
                name: 'X-34 Landspeeder only',
                ldf: 'x34landspeeder',
            }],
        keywords: ['Fixed: Front', 'Impact 1', 'Ion 1'],
        weapon: {
            range: {
                from: 1,
                to: 4,
            },
            dice: {
                white: 4,
                black: 1,
            },
        },
    },
    {
        ldf: 'tx130beamcannonturret',
        name: 'TX-130 Beam Cannon Turret',
        slot: 'Hardpoint',
        points: 30,
        restrictions: [{
                name: 'TX-130 Saber-class Fighter Tank only',
                ldf: 'tx130saberclassfightertank',
            }],
        keywords: ['Beam 2'],
        weapon: {
            range: {
                from: 1,
                to: 4,
            },
            dice: {
                red: 2,
            },
        },
    },
    {
        ldf: 'tx130twinlaserturret',
        name: 'TX-130 Twin Laser Turret',
        slot: 'Hardpoint',
        points: 14,
        restrictions: [{
                name: 'TX-130 Saber-class Fighter Tank only',
                ldf: 'tx130saberclassfightertank',
            }],
        keywords: ['Critical 1'],
        weapon: {
            range: {
                from: 1,
                to: 3,
            },
            dice: {
                black: 3,
            },
        },
    },
];
exports.default = upgrades;
//# sourceMappingURL=hardpoint.js.map