var upgrades = [
    {
        ldf: 'grapplinghooks',
        name: 'Grappling Hooks',
        slot: 'Gear',
        points: 3,
        keywords: ['Expert Climber'],
    },
    {
        ldf: 'targetingscopes',
        name: 'Targeting Scopes',
        slot: 'Gear',
        points: 4,
        printed_points: 6,
        keywords: ['Precise 1'],
    },
    {
        ldf: 'environmentalgear',
        name: 'Environmental Gear',
        slot: 'Gear',
        points: 3,
        keywords: ['Unhindered'],
    },
    {
        ldf: 'emergencystims',
        name: 'Emergency Stims',
        slot: 'Gear',
        points: 12,
        printed_points: 8,
        exhaust: true,
        keywords: ['Emergency Stims'],
    },
    {
        ldf: 'reconintel',
        name: 'Recon Intel',
        slot: 'Gear',
        points: 2,
        exhaust: false,
        keywords: ['Scout 1'],
    },
    {
        ldf: 'electrograpplingline',
        name: 'Electro Grappling Line',
        slot: 'Gear',
        points: 5,
        exhaust: true,
        description: '[Action] Choose an enemy trooper unit at range 1 and in line of sight. It gains 2 immobilize tokens and 2 suppression tokens.',
        restrictions: [
            {
                name: 'Sabine Wren only',
                ldf: 'sabinewren',
            },
        ],
    },
    {
        ldf: 'personalcombatshield',
        name: 'Personal Combat Shield',
        slot: 'Gear',
        points: 10,
        description: 'You gain Shielded 1 (You have 1 shield token.) and Recharge 1 (When you recover flip 1 inactive shield token.)',
        restrictions: [
            {
                name: 'Sabine Wren only',
                ldf: 'sabinewren',
            },
        ],
    },
    {
        ldf: 'electrobinoculars',
        name: 'Electrobinoculars',
        slot: 'Gear',
        points: 8,
        description: "You gain [Card Action] Spotter 1 (Choose 1 friendly unit at range 1. That unit gains 1 aim token.) B1 Battle Droids can ignore this card's Gear upgrade icon requirement.",
        keywords: ['Spotter 1'],
    },
    {
        ldf: 'jt12jetpacks',
        name: 'JT-12 Jetpacks',
        slot: 'Gear',
        points: 10,
        description: 'While equipped to Clone Captain Rex, reduce this cards points by 5.  You gain [Jump 2]',
        restrictions: [
            {
                name: 'Clone Captain Rex only',
                ldf: 'clonecaptainrex',
            },
            {
                name: 'Arc Troopers only',
                ldf: 'arctroopers',
            },
            {
                name: 'Arc Troopers Strike Team only',
                ldf: 'arctroopersstriketeam',
            },
        ],
    },
];
export default upgrades;
//# sourceMappingURL=gear.js.map