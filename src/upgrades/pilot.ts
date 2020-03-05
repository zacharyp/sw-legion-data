import { Upgrade } from '../types/index';

const upgrades: Upgrade[] = [
  {
    ldf: 'generalweiss',
    name: 'General Weiss',
    slot: 'Pilot',
    points: 10,
    exhaust: true,
    factionRestrictions: ['imperial'],
    keywords: ['Arsenal 2'],
    description:
      '[action] Until the end of your activation, you gain [Arsenal 2]',
  },
  {
    ldf: 'wedgeantilles',
    name: 'Wedge Antilles',
    slot: 'Pilot',
    points: 5,
    exhaust: true,
    factionRestrictions: ['rebel'],
    keywords: ['Full Pivot'],
    description:
      '[action] Until the end of your activation, you gain [Full Pivot].',
  },
  {
    ldf: 'firstsergeantarbmab',
    name: 'First Sergeant Arbmab',
    slot: 'Pilot',
    points: 5,
    unique: true,
    factionRestrictions: ['imperial'],
    unitTypeRestrictions: ['Ground Vehicle'],
    keywords: ['Tactical 1'],
    description: 'Imperial only. Ground Vehicle only. You gain [Tactical 1]',
  },
  {
    ldf: 'imperialhammerselitearmorpilot',
    name: 'Imperial Hammers Elite Armor Pilot',
    slot: 'Pilot',
    points: 10,
    factionRestrictions: ['imperial'],
    unitTypeRestrictions: ['Ground Vehicle'],
    description:
      'Imperial only. Ground Vehicle only. You gain "[Surge Attack]: [Hit]"',
  },
  {
    ldf: 'ryderazadi',
    name: 'Ryder Azadi',
    exhaust: true,
    slot: 'Pilot',
    points: 5,
    unique: true,
    factionRestrictions: ['rebel'],
    unitTypeRestrictions: ['Repulsor Vehicle'],
    description:
      'Rebel only. Repulsor Vehicle only. While performing a move, increase or decrease your maximum speed by 1.',
  },
  {
    ldf: 'outerrimspeederjockey',
    name: 'Outer Rim Speeder Jockey',
    slot: 'Pilot',
    points: 10,
    factionRestrictions: ['rebel'],
    unitTypeRestrictions: ['Repulsor Vehicle'],
    keywords: ['Cover 1'],
    description: 'Rebel only. Repulsor Vehicle only. You gain [Cover 1]',
  },
  {
    ldf: 'veteranclonepilot',
    name: 'Veteran Clone Pilot',
    slot: 'Pilot',
    points: 7,
    exhaust: true,
    restrictions: [
      {
        name: 'TX-130 Saber-class Fighter Tank only',
        ldf: 'tx130saberclassfightertank',
      },
    ],
    keywords: [],
    description:
      "While you or a friendly clone trooper unit at range 1 and in line of sight attacks or defends, you and that units can spend each other's aim,dodge and surge tokens.  During the End Phase ready this card.",
  },
  {
    ldf: 'aaylasecura',
    name: 'Aayla Secura',
    slot: 'Pilot',
    points: 5,
    unique: true,
    restrictions: [
      {
        name: 'TX-130 Saber-class Fighter Tank only',
        ldf: 'tx130saberclassfightertank',
      },
    ],
    keywords: ['Inspire 2', 'Field Commander'],
    description: '',
  },
  {
    ldf: 'plokoon',
    name: 'Plo Koon',
    slot: 'Pilot',
    points: 9,
    unique: true,
    restrictions: [
      {
        name: 'TX-130 Saber-class Fighter Tank only',
        ldf: 'tx130saberclassfightertank',
      },
    ],
    keywords: [],
    description:
      'free action: until the end of you activation, you gain [Agile 2]',
  },
  {
    ldf: 'lokdurd',
    name: 'Lok Durd',
    slot: 'Pilot',
    points: 9,
    exhaust: true,
    unique: true,
    restrictions: [
      {
        name: 'AAT Trade Federation Battle Tank only',
        ldf: 'aattradefederationbattletank',
      },
    ],
    keywords: [],
    description:
      'You lose [AI: Attack], even while this card is exhausted. free action: Until the end of your activation, each of your weapons gains [Suppressive]',
  },
  {
    ldf: 'oomseriesdroidpilot',
    name: 'OOM-Series Droid Pilot',
    slot: 'Pilot',
    points: 7,
    restrictions: [
      {
        name: 'AAT Trade Federation Battle Tank only',
        ldf: 'aattradefederationbattletank',
      },
    ],
    keywords: ['Coordinate: Droid Trooper'],
    description: 'You gain [Coordinate: Droid Trooper]',
  },
  {
    ldf: 'tseriestacticaldroidpilot',
    name: 'T-Series Tactical Droid Pilot',
    slot: 'Pilot',
    points: 5,
    restrictions: [
      {
        name: 'AAT Trade Federation Battle Tank only',
        ldf: 'aattradefederationbattletank',
      },
    ],
    keywords: ['Field Commander'],
    description: 'You lose [AI: Attack].  You gain [Field Commander]',
  },
];

export default upgrades;
