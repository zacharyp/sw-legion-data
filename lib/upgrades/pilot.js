"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upgrades = [
    {
        ldf: 'generalweiss',
        name: 'General Weiss',
        slot: 'Pilot',
        points: 10,
        exhaust: true,
        restrictions: { name: 'Imperial only', ldf: 'empire' },
        keywords: ['Arsenal 2'],
        description: '[action] Until the end of your activation, you gain <strong>ARSENAL 2</strong> (While attacking, each of your minis can use up to 2 of its weapons.)',
    },
    {
        ldf: 'wedgeantilles',
        name: 'Wedge Antilles',
        slot: 'Pilot',
        points: 5,
        exhaust: true,
        restrictions: { name: 'Rebel only', ldf: 'rebel' },
        keywords: ['Full Pivot'],
        description: '[action] Until the end of your activation, you gain <strong>FULL PIVOT</strong> (When you pivot, you can pivot up to 360 degrees.',
    },
    {
        ldf: 'firstsergeantarbmab',
        name: 'First Sergeant Arbmab',
        slot: 'Pilot',
        points: 5,
        unique: true,
        restrictions: { name: 'Imperial only', ldf: 'empire' },
        keywords: ['Tactical 1'],
        description: 'Imperial only.\nGround Vehicle only.\n\nYou gain Tactical 1 (After you perform a standard move, gain 1 aim token.)',
    },
    {
        ldf: 'imperialhammerselitearmorpilot',
        name: 'Imperial Hammers Elite Armor Pilot',
        slot: 'Pilot',
        points: 10,
        restrictions: { name: 'Imperial only', ldf: 'empire' },
        description: 'Imperial only.\nGround Vehicle only.\n\nYou gain "[Surge Attack]: [Hit]"',
    },
    {
        ldf: 'ryderazadi',
        name: 'Ryder Azadi',
        exhaust: true,
        slot: 'Pilot',
        points: 5,
        unique: true,
        restrictions: { name: 'Rebel only', ldf: 'rebel' },
        description: 'Rebel only.\nRepulsor Vehicle only.\n\nWhile performing a move, increase or decrease your maximum speed by 1.',
    },
    {
        ldf: 'outerrimspeederjockey',
        name: 'Outer Rim Speeder Jockey',
        slot: 'Pilot',
        points: 10,
        restrictions: { name: 'Imperial only', ldf: 'empire' },
        keywords: ['Cover 1'],
        description: 'Rebel only.\nRepulsor Vehicle only.\n\nYou gain Cover 1 (While defending against a ranged attack, improve your cover by 1.)',
    },
];
exports.default = upgrades;
//# sourceMappingURL=pilot.js.map