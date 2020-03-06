"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrades = [
    {
        ldf: 'concussiongrenades',
        name: 'Concussion Grenades',
        slot: 'Grenades',
        points: 5,
        keywords: ['Blast'],
        weapon: {
            range: { from: 1, to: 1 },
            dice: { black: 1 },
        },
    },
    {
        ldf: 'impactgrenades',
        name: 'Impact Grenades',
        slot: 'Grenades',
        points: 5,
        keywords: ['Impact 1'],
        weapon: {
            range: { from: 1, to: 1 },
            dice: { black: 1 },
        },
    },
    {
        ldf: 'fragmentationgrenades',
        name: 'Fragmentation Grenades',
        slot: 'Grenades',
        points: 5,
        description: 'While this weapon is in your attack pool, you gain attack "[surge]: [crit]."',
        keywords: ['Impact 1'],
        weapon: {
            range: { from: 1, to: 1 },
            dice: { red: 1 },
        },
    },
    {
        ldf: 'smokegrenades',
        name: 'Smoke Grenades',
        slot: 'Grenades',
        points: 6,
        description: 'You gain [Card Action] Smoke 1 (Place 1 smoke token within range 1 and in line of sight of your unit leader.)',
        keywords: ['Smoke 1']
    },
    {
        ldf: 'empdroidpoppers',
        name: 'EMP "Droid Poppers"',
        slot: 'Grenades',
        points: 3,
        description: 'While',
        keywords: ['Ion 1'],
        weapon: {
            range: { from: 1, to: 1 },
            dice: { black: 1 },
        },
    },
];
exports.default = upgrades;
//# sourceMappingURL=grenades.js.map