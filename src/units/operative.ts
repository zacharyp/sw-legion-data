import { Unit } from '../types/index';

const units: Unit[] = [
  {
    ldf: 'bobafett',
    unique: true,
    name: 'Boba Fett',
    subtitle: 'Infamous Bounty Hunter',
    factions: ['imperial'],
    type: 'Trooper',
    points: 160,
    rank: 'Operative',
    minis: 1,
    wounds: 5,
    courage: 3,
    defense: 'red',
    surge: { attack: 'crit', defense: 'block' },
    speed: 3,
    slots: ['Training', 'Training', 'Gear', 'Gear'],
    keywords: ['Jump 2', 'Arsenal 2', 'Sharpshooter 2', 'Bounty', 'Impervious'],
    weapons: [
      {
        name: 'Boot Spike',
        range: { from: 0 },
        dice: { red: 2 },
      },
      {
        name: "Fett's E-3 Carbine",
        range: { from: 1, to: 3 },
        dice: { black: 2 },
        keywords: ['Pierce 1'],
      },
      {
        name: 'Wrist Rocket',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
        keywords: ['Impact 1'],
      },
    ],
    commandCards: ['whipcordlauncher', 'zxflameprojector', 'z6jetpackrocket'],
  },
  {
    ldf: 'chewbacca',
    name: 'Chewbacca',
    factions: ['rebel'],
    points: 95,
    printed_points: 110,
    rank: 'Operative',
    type: 'Trooper',
    minis: 1,
    wounds: 9,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Training', 'Training', 'Gear'],
    keywords: [
      'Enrage 4',
      'Expert Climber',
      'Guardian 3',
      'Teamwork: Han Solo',
      'Unhindered',
    ],
    weapons: [
      {
        name: 'Overpower',
        range: { from: 0 },
        dice: { red: 4 },
      },
      {
        name: "Chewbacca's Bowcaster",
        range: { from: 1, to: 3 },
        dice: { red: 2, white: 2 },
        keywords: ['Impact 1', 'Pierce 1'],
      },
    ],
    commandCards: ['commoncause', 'brainsandbrawn', 'notoriousscoundrels'],
  },
  {
    ldf: 'sabinewren',
    name: 'Sabine Wren',
    factions: ['rebel'],
    points: 125,
    rank: 'Operative',
    type: 'Trooper',
    minis: 1,
    wounds: 5,
    courage: 2,
    defense: 'red',
    surge: { attack: 'crit', defense: 'block' },
    speed: 3,
    slots: ['Training', 'Gear', 'Gear', 'Armament'],
    keywords: ['Jump 2', 'Gunslinger', 'Impervious', 'Nimble'],
    weapons: [
      {
        name: 'Combat Expertise',
        range: { from: 0 },
        dice: { black: 2 },
      },
      {
        name: 'Dual Westar-35 Blaster Pistols',
        range: { from: 1, to: 2 },
        dice: { red: 1, black: 1, white: 1 },
        keywords: ['Pierce 1'],
      },
    ],
    commandCards: ['explosions', 'symbolofrebellion', 'legacyofmandalore'],
  },
  {
    ldf: 'bossk',
    name: 'Bossk',
    factions: ['imperial'],
    points: 115,
    rank: 'Operative',
    type: 'Trooper',
    minis: 1,
    wounds: 7,
    courage: 2,
    defense: 'white',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Training', 'Training', 'Gear'],
    keywords: [
      'Bounty',
      'Enrage',
      'Expert Climber',
      'Regenerate 3',
      'Unhindered',
    ],
    weapons: [
      {
        name: 'Frenzy',
        range: { from: 0, to: 0 },
        dice: { black: 2, red: 1, white: 1 },
        keywords: ['Pierce 1'],
      },
      {
        name: 'Relby-v10 Mortar Rifle',
        range: { from: 2, to: 4 },
        dice: { red: 1, white: 4 },
        keywords: ['Pierce 1', 'Suppressive'],
      },
    ],
    commandCards: ['mercilessmunitions', 'reptillianrampage', 'lyinginwait'],
  },
  {
    ldf: 'lukeskywalker-operative',
    unique: true,
    name: 'Luke Skywalker',
    subtitle: 'Jedi Knight',
    factions: ['rebel'],
    type: 'Trooper',
    points: 200,
    rank: 'Operative',
    minis: 1,
    wounds: 7,
    courage: 4,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Force', 'Force', 'Force', 'Training'],
    keywords: [
      'Jump 1',
      'Charge',
      'Deflect',
      'Deflect',
      'Immune: Pierce',
      'Master of the Force 1',
    ],
    weapons: [
      {
        name: "Luke's Lightsaber",
        range: { from: 0 },
        dice: { black: 7 },
        keywords: ['Impact 2', 'Pierce 2'],
      },
    ],
    commandCards: [
      'sonofskywalker',
      'myallyistheforce',
      'returnofthejedi',
      'youserveyourmasterwell',
      'iamajedi',
      'fullofsurprises',
    ],
  },
  {
    ldf: 'darthvader-operative',
    unique: true,
    name: 'Darth Vader',
    subtitle: 'The Emperors Apprentice',
    factions: ['imperial'],
    type: 'Trooper',
    points: 170,
    rank: 'Operative',
    minis: 1,
    wounds: 6,
    courage: 3,
    defense: 'red',
    surge: {},
    speed: 1,
    slots: ['Force', 'Force', 'Training'],
    keywords: [
      'Deflect',
      'Immune: Pierce',
      'Jedi Hunter',
      'Master of the Force 1',
      'Relentless',
      'Spur',
    ],
    weapons: [
      {
        name: "Vader's Lightsaber",
        range: { from: 0 },
        dice: { red: 5 },
        keywords: ['Impact 3', 'Pierce 3'],
      },
      {
        name: 'Force Throw',
        range: { from: 1, to: 2 },
        dice: { black: 2 },
        keywords: ['Blast', 'Scatter'],
      },
    ],
    commandCards: [
      'implacable',
      'newwaystomotivatethem',
      'masterofevil',
      'vadersmight',
      'fearanddeadmen',
      'darknessdescends',
    ],
  },
  {
    ldf: 'r2d2',
    unique: true,
    name: 'R2-D2',
    subtitle: '',
    factions: ['rebel', 'republic'],
    type: 'Droid Trooper',
    points: 35,
    rank: 'Operative',
    minis: 1,
    wounds: 4,
    courage: 2,
    defense: 'white',
    surge: { attack: 'hit', defense: 'block' },
    speed: 1,
    slots: ['Comms'],
    keywords: [
      'Repair 2: Capacity 2',
      'Secret Mission',
      'Grounded',
      'Inconspicuous',
    ],
    weapons: [
      {
        name: 'Electro-Shock',
        range: { from: 0 },
        dice: { white: 3 },
        keywords: ['Suppressive'],
      },
    ],
    commandCards: ['blastoff', 'impromptuimmolation', 'smokescreen'],
  },
  {
    ldf: 'c3po',
    unique: true,
    name: 'C-3PO',
    subtitle: 'Human-Cyborg Relations',
    factions: ['rebel', 'republic'],
    type: 'Droid Trooper',
    points: 15,
    rank: 'Operative',
    minis: 1,
    wounds: 2,
    defense: 'white',
    surge: {},
    speed: 1,
    slots: [],
    keywords: ['Calculate Odds', 'Distract', 'Counterpart: R2-D2'],
    weapons: [
      {
        name: 'Clumsy Kick',
        range: { from: 0 },
        dice: { white: 1 },
        keywords: [],
      },
    ],
    commandCards: [],
  },
  {
    ldf: 'k2so',
    unique: true,
    name: 'K-2SO',
    subtitle: 'Sardonic Security Droid',
    factions: ['rebel'],
    type: 'Droid Trooper',
    points: 70,
    rank: 'Operative',
    minis: 1,
    wounds: 5,
    courage: 2,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Comms', 'Armament'],
    keywords: [
      'Calculate Odds',
      'Armor 1',
      'Detachment: Cassian Andor',
      'Icognito',
      'Teamwork: Cassian Andor',
    ],
    weapons: [
      {
        name: 'Overpower',
        range: { from: 0 },
        dice: { red: 4 },
        keywords: [],
      },
    ],
    commandCards: ['sacrifice'],
  },
  {
    ldf: 'idensid10seekerdroid',
    unique: true,
    name: "Iden's ID10 Seeker Droid",
    subtitle: 'Droid',
    factions: ['imperial'],
    type: 'Droid Trooper',
    points: 15,
    rank: 'Operative',
    minis: 1,
    wounds: 1,
    defense: 'red',
    surge: { attack: 'crit' },
    speed: 2,
    slots: ['Comms'],
    keywords: ['Counterpart: Iden Versio', 'Recharge 1', 'Shielded 1', 'Small'],
    weapons: [
      {
        name: 'Electro-Shock',
        range: { from: 0 },
        dice: { white: 1 },
        keywords: ['Suppressive'],
      },
    ],
    commandCards: ['incapacitate'],
  },
];

export default units;
