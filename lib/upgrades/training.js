"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrades = [
    {
        ldf: 'duckandcover',
        name: 'Duck and Cover',
        slot: 'Training',
        points: 4,
        printed_points: 8,
        description: 'While defending against a ranged attack, during the Apply Dodge and Cover step, you may gain 1 suppression token.',
    },
    {
        ldf: 'hunter',
        name: 'Hunter',
        slot: 'Training',
        points: 6,
        description: 'While attacking a wounded trooper unit, during the Roll Attack Dice step, you may gain 1 aim token.',
    },
    {
        ldf: 'tenacity',
        name: 'Tenacity',
        slot: 'Training',
        points: 4,
        description: 'While performing a melee attack, if you are wounded or if one or more of your minis have been defeated, add 1 red attack die to your attack pool.',
    },
    {
        ldf: 'overwatch',
        name: 'Overwatch',
        slot: 'Training',
        points: 4,
        keywords: ['Sentinel'],
        description: 'You gain Sentinel. (Your standby range is 1-3.)',
    },
    {
        ldf: 'endurance',
        name: 'Endurance',
        slot: 'Training',
        points: 6,
        description: 'At the end of the Activation phase, you may remove 1 suppression token.',
    },
    {
        ldf: 'offensivepush',
        name: 'Offensive Push',
        slot: 'Training',
        points: 4,
        description: 'While performaing a move, gain Tactical 1 (After you perform a standard move, gain 1 aim token.)',
    },
];
exports.default = upgrades;
//# sourceMappingURL=training.js.map