var upgrades = [
    {
        ldf: 'a300riflegunner',
        name: 'A-300 Rifle Gunner',
        points: 9,
        slot: 'Crew',
        restrictions: {
            name: 'X-34 Landspeeder only',
            ldf: 'x34landspeeder',
        },
        weapon: {
            range: { from: 1, to: 3 },
            dice: { white: 2 },
        },
    },
    {
        ldf: 'rps6rocketgunner',
        name: 'RPS-6 Rocket Gunner',
        points: 36,
        slot: 'Crew',
        restrictions: {
            name: 'X-34 Landspeeder only',
            ldf: 'x34landspeeder',
        },
        keywords: ['Impact 2'],
        weapon: {
            range: { from: 2, to: 4 },
            dice: { white: 1, black: 1, red: 1 },
        },
    },
    {
        ldf: 'barctwinlasergunner',
        name: 'BARC Twin Laser Gunner',
        points: 18,
        slot: 'Crew',
        description: 'Reduce your maximum speed by 1.',
        restrictions: {
            name: 'BARC Speeder only',
            ldf: 'barcspeeder',
        },
        keywords: ['Fixed: Front, Rear'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 2, white: 2 },
        },
    },
    {
        ldf: 'barcrps6gunner',
        name: 'BARC RPS-6 Gunner',
        points: 24,
        slot: 'Crew',
        description: 'Reduce your maximum speed by 1.',
        restrictions: {
            name: 'BARC Speeder only',
            ldf: 'barcspeeder',
        },
        keywords: ['Impact 2'],
        weapon: {
            range: { from: 2, to: 4 },
            dice: { red: 1, black: 1, white: 1 },
        },
    },
    {
        ldf: 'barciongunner',
        name: 'BARC Ion Gunner',
        points: 28,
        slot: 'Crew',
        exhaust: true,
        description: 'Reduce your maximum speed by 1.',
        restrictions: {
            name: 'BARC Speeder only',
            ldf: 'barcspeeder',
        },
        keywords: ['Fixed: Front, Rear', 'Impact 1', 'Ion 1'],
        weapon: {
            range: { from: 1, to: 3 },
            dice: { black: 3, white: 1 },
        },
    },
];
export default upgrades;
//# sourceMappingURL=crew.js.map