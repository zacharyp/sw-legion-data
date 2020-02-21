import { Unit } from '../types';

const units: Unit[] = [
  {
    ldf: 'rebeltroopers',
    name: 'Rebel Troopers',
    factions: ["rebel"],
    points: 40,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: { defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: ['Nimble'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
  {
    ldf: 'stormtroopers',
    name: 'Stormtroopers',
    factions: ["imperial"],
    points: 44,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'red',
    surge: { attack: 'hit' },
    speed: 2,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: ['Precise 1'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-11 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 1 },
      },
    ],
  },
  {
    ldf: 'snowtroopers',
    name: 'Snowtroopers',
    factions: ["imperial"],
    points: 48,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'red',
    surge: { attack: 'hit' },
    speed: 1,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: ['Steady'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-11 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 1 },
      },
    ],
  },
  {
    ldf: 'fleettroopers',
    name: 'Fleet Troopers',
    factions: ["rebel"],
    points: 44,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 2,
    slots: ['Heavy Weapon', 'Personnel', 'Gear', 'Grenades'],
    keywords: ['Ready 1'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'DH-17 Blaster Pistol',
        range: { from: 1, to: 2 },
        dice: { white: 2 },
      },
    ],
  },
  {
    ldf: 'rebelveterans',
    name: 'Rebel Veterans',
    factions: ["rebel"],
    points: 48,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: {
      attack: 'hit',
      defense: 'block',
    },
    speed: 2,
    slots: ['Gear', 'Grenades', 'Heavy Weapon', 'Personnel', 'Training'],
    keywords: ['Coordinate', 'Defend 1'],
    weapons: [
      {
        name: 'Unarmed',
        range: {
          from: 0,
        },
        dice: {
          black: 1,
        },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: {
          from: 1,
          to: 3,
        },
        dice: {
          black: 1,
        },
      },
    ],
  },
  {
    ldf: 'markiimediumblastertrooper',
    name: 'Mark II Medium Blaster Trooper',
    factions: ["rebel"],
    points: 38,
    rank: 'Corps',
    type: 'Emplacement Trooper',
    minis: 1,
    wounds: 3,
    courage: 2,
    defense: 'white',
    surge: {
      attack: 'hit',
      defense: 'block',
    },
    speed: 1,
    slots: ['Comms'],
    keywords: ['Detachment: Rebel Veterans', 'Fire Support', 'Full Pivot', 'Reposition', 'Sentinel'],
    weapons: [
      {
        name: 'Unarmed',
        range: {
          from: 0,
        },
        dice: {
          black: 1,
        },
      },
      {
        name: 'A-280 Blaster Rifle',
        range: {
          from: 1,
          to: 3,
        },
        dice: {
          black: 1,
        },
      },
      {
        name: 'Mark II Medium Blaster',
        range: {
          from: 1,
          to: 3,
        },
        dice: {
          black: 4,
        },
        keywords: ['Critical 2', 'Cumbersome', 'Fixed: Front'],
      },
    ],
  },
  {
    ldf: 'shoretroopers',
    name: 'Shoretroopers',
    factions: ["imperial"],
    points: 52,
    rank: 'Corps',
    type: 'Trooper',
    minis: 4,
    wounds: 1,
    courage: 1,
    defense: 'red',
    surge: {},
    speed: 2,
    slots: ['Gear', 'Grenades', 'Heavy Weapon', 'Personnel', 'Training'],
    keywords: ['Coordinate: Emplacement Trooper', 'Target 1'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-22 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
  {
    ldf: 'df90mortartrooper',
    name: 'DF-90 Mortar Trooper',
    factions: ["imperial"],
    points: 36,
    rank: 'Corps',
    type: 'Trooper',
    minis: 1,
    wounds: 3,
    courage: 2,
    defense: 'red',
    surge: {},
    speed: 2,
    slots: ['Comms'],
    keywords: ['Detachment: Shoretroopers', 'Fire Support', 'Full Pivot', 'Reposition', 'Sentinel'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0 },
        dice: { black: 1 },
      },
      {
        name: 'E-22 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
      {
        name: 'DF-90 Mortar',
        range: { from: 3, to: 4 },
        dice: { white: 3 },
        keywords: ['Critical 1', 'Cumbersome', 'Suppressive', 'Fixed: Front'],
      },
    ],
  },
  {
    ldf: 'b1battledroids',
    name: 'B1 Battle Droids',
    factions: ["separatist"],
    points: 36,
    rank: 'Corps',
    type: 'Droid Trooper',
    minis: 6,
    wounds: 1,
    courage: 1,
    defense: 'white',
    surge: {},
    speed: 2,
    slots: ['Comms', 'Heavy Weapon', 'Personnel'],
    keywords: ['AI: Attack', 'Coordinate: Droid Trooper'],
    weapons: [
      {
        name: 'Bludgeon',
        range: { from: 0, to: 0 },
        dice: { white: 1 },
      },
      {
        name: 'E-5 Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { white: 1 },
      },
    ],
  },
  {
    ldf: 'phaseiclonetroopers',
    name: 'Phase I Clone Troopers',
    factions: ["republic"],
    points: 52,
    rank: 'Corps',
    type: 'Trooper',
    minis: 6,
    wounds: 1,
    courage: 1,
    defense: 'red',
    surge: {},
    speed: 2,
    slots: ['Gear', 'Grenades', 'Heavy Weapon', 'Personnel'],
    keywords: ['Fire Support'],
    weapons: [
      {
        name: 'Unarmed',
        range: { from: 0, to: 0 },
        dice: { black: 1 },
      },
      {
        name: 'DC-15A Blaster Rifle',
        range: { from: 1, to: 3 },
        dice: { black: 1 },
      },
    ],
  },
];

export default units;
