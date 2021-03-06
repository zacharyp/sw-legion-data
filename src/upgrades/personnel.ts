import { Upgrade } from '../types/index';

const upgrades: Upgrade[] = [
  {
    ldf: 'rebeltrooper',
    name: 'Rebel Trooper',
    slot: 'Personnel',
    points: 10,
    restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
    description: 'Add 1 Rebel Trooper mini',
  },
  {
    ldf: 'stormtrooper',
    name: 'Stormtrooper',
    slot: 'Personnel',
    points: 11,
    restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
    description: 'Add 1 Stormtrooper mini.',
  },
  {
    ldf: 'snowtrooper',
    name: 'Snowtrooper',
    slot: 'Personnel',
    points: 12,
    restrictions: [{ name: 'Snowtroopers only', ldf: 'snowtroopers' }],
    description: 'Add 1 Snowtrooper mini.',
  },
  {
    ldf: 'fleettrooper',
    name: 'Fleet Trooper',
    slot: 'Personnel',
    points: 11,
    restrictions: [{ name: 'Fleet Troopers only', ldf: 'fleettroopers' }],
    description: 'Add 1 Fleet Trooper mini.',
  },
  {
    ldf: 'rebelofficer',
    name: 'Rebel Officer',
    slot: 'Personnel',
    points: 19,
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description: 'Add 1 Rebel Officer mini.',
    keywords: ['Inspire 1', 'Leader'],
  },
  {
    ldf: 'rebelcommstechnician',
    name: 'Rebel Comms Technician',
    slot: 'Personnel',
    points: 9,
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description:
      'Add 1 Rebel comms technician mini. You gain a comms upgrade icon. You must equip a comms upgrade card.',
  },
  {
    ldf: 'r5astromechdroid',
    name: 'R5 Astromech Droid',
    slot: 'Personnel',
    points: 8,
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description: 'Add 1 R5 astromech mini.',
    keywords: ['Repair 1: Capacity 2', 'Noncombatant'],
  },
  {
    ldf: '21bmedicaldroid',
    name: '2-1B Medical Droid',
    slot: 'Personnel',
    points: 18,
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description: 'Add 1 2-1B medical droid mini.',
    keywords: ['Treat 1: Capacity 2', 'Noncombatant'],
  },
  {
    ldf: 'imperialofficer',
    name: 'Imperial Officer',
    slot: 'Personnel',
    points: 20,
    restrictions: [{ name: 'Imperial only', ldf: 'empire' }],
    description: 'Add 1 Imperial Officer mini.',
    keywords: ['Inspire 1', 'Leader'],
  },
  {
    ldf: 'imperialcommstechnician',
    name: 'Imperial Comms Technician',
    slot: 'Personnel',
    points: 10,
    restrictions: [{ name: 'Imperial only', ldf: 'empire' }],
    description:
      'Add 1 Imperial comms technician mini. You gain a comms upgrade icon. You must equip a comms upgrade card.',
  },
  {
    ldf: 'r4astromechdroid',
    name: 'R4 Astromech Droid',
    slot: 'Personnel',
    points: 9,
    restrictions: [{ name: 'Imperial only', ldf: 'empire' }],
    description: 'Add 1 R4 astromech mini.',
    keywords: ['Repair 1: Capacity 2', 'Noncombatant'],
  },
  {
    ldf: 'fx9medicaldroid',
    name: 'FX-9 Medical Droid',
    slot: 'Personnel',
    points: 19,
    restrictions: [{ name: 'Imperial only', ldf: 'empire' }],
    description: 'Add 1 FX-9 medical droid mini.',
    keywords: ['Treat 1: Capacity 2', 'Noncombatant'],
  },
  {
    ldf: 'rebelveteran',
    name: 'Rebel Veteran',
    slot: 'Personnel',
    points: 12,
    restrictions: [{ name: 'Rebel Veterans only', ldf: 'rebelveterans' }],
    description: 'Add 1 rebel veteran mini.',
  },
  {
    ldf: 'shoretrooper',
    name: 'Shoretrooper',
    slot: 'Personnel',
    points: 13,
    restrictions: [{ name: 'Shoretroopers only', ldf: 'shoretroopers' }],
    description: 'Add 1 Shoretrooper mini.',
  },
  {
    ldf: 'phaseiclonetrooper',
    name: 'Phase I Clone Trooper',
    slot: 'Personnel',
    points: 13,
    restrictions: [
      {
        name: 'Phase I Clone Troopers only',
        ldf: 'phaseiclonetroopers',
      },
    ],
    description: 'Add 1 Phase I Clone trooper mini.',
  },
  {
    ldf: 'b1battledroid',
    name: 'B1 Battle Droid',
    slot: 'Personnel',
    points: 6,
    restrictions: [
      {
        name: 'B1 Battle Droids only',
        ldf: 'b1battledroids',
      },
    ],
    description: 'Add 1 B1 Battle Droid mini.',
  },
  {
    ldf: 'rebeltroopercaptain',
    name: 'Rebel Trooper Captain',
    slot: 'Personnel',
    points: 14,
    exhaust: true,
    restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
    description:
      'Add 1 Rebel Trooper Captain mini. You gain a Training upgrade icon. When you activate, you cannot remove supression tokens or be supressed during this activation.',
    keywords: ['Leader'],
  },
  {
    ldf: 'rebeltrooperspecialist',
    name: 'Rebel Trooper Specialist',
    slot: 'Personnel',
    points: 14,
    exhaust: true,
    restrictions: [{ name: 'Rebel Troopers only', ldf: 'rebeltroopers' }],
    description:
      'Add 1 Rebel Trooper Captain mini. You gain a Gear upgrade icon. [action] Gain 1 aim, dodge, or surge token.',
    keywords: [],
  },
  {
    ldf: 'stormtroopercaptain',
    name: 'Storm Trooper Captain',
    slot: 'Personnel',
    points: 15,
    exhaust: true,
    restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
    description:
      'Add 1 Storm Trooper Captain mini. You gain a Training upgrade icon. When you activate, you cannot remove supression tokens or be supressed during this activation.',
    keywords: ['Leader'],
  },
  {
    ldf: 'stormtrooperspecialist',
    name: 'Stormtrooper Specialist',
    slot: 'Personnel',
    points: 15,
    exhaust: true,
    restrictions: [{ name: 'Stormtroopers only', ldf: 'stormtroopers' }],
    description:
      'Add 1 stormtrooper specialist mini. You gain a Gear upgrade icon. [action] Gain 1 aim token or 1 surge token.',
    keywords: [],
  },
  {
    ldf: 'oomseriesbattledroid',
    name: 'OOM-Series Battle Droid',
    slot: 'Personnel',
    points: 12,
    restrictions: [
      {
        name: 'B1 Battle Droids only',
        ldf: 'b1battledroids',
      },
    ],
    description:
      'Add 1 OOM-Series Battle Droid mini. When you use Coordinate, you can issue an order at range 1-2 instead of range 1.',
    keywords: ['Leader'],
  },
  {
    ldf: 'b1securitydroid',
    name: 'B1 Security Droid',
    slot: 'Personnel',
    points: 9,
    restrictions: [
      {
        name: 'B1 Battle Droids only',
        ldf: 'b1battledroids',
      },
    ],
    description:
      'Add 1 B1 Security Droid mini. When you activate, lose AI: Attack until the end of this activation.',
    keywords: [],
  },
  {
    ldf: 'phaseiclonespecialist',
    name: 'Phase I Clone Specialist',
    slot: 'Personnel',
    points: 17,
    exhaust: true,
    restrictions: [
      {
        name: 'Phase I Clone Troopers only',
        ldf: 'phaseiclonetroopers',
      },
    ],
    description:
      'Add 1 Phase I Clone Specialist mini. You gain a Gear upgrade icon. [action] Gain 1 aim, dodge, or surge token.',
    keywords: [],
  },
  {
    ldf: 'phaseiclonecaptain',
    name: 'Phase I Clone Captain',
    slot: 'Personnel',
    points: 17,
    exhaust: true,
    restrictions: [
      {
        name: 'Phase I Clone Troopers only',
        ldf: 'phaseiclonetroopers',
      },
    ],
    description:
      'Add 1 Phase I Clone captain mini. You gain a Training upgrade icon. When you activate, you cannot remove supression tokens or be supressed during this activation.',
    keywords: ['Leader'],
  },
  {
    ldf: 'b2superbattledroid',
    name: 'B2 Super Battle Droid',
    slot: 'Personnel',
    points: 16,
    restrictions: [
      {
        name: 'B2 Super Battle Droids only.',
        ldf: 'b2superbattlebattledroids',
      },
    ],
    description: 'Add 1 B2 Super Battle Droid mini.',
    keywords: [],
  },
  {
    ldf: 'phaseiiclonetrooper',
    name: 'Phase II Clone Trooper',
    slot: 'Personnel',
    points: 15,
    restrictions: [
      {
        name: 'Phase II Clone Troopers only.',
        ldf: 'phaseiiclonetroopers',
      },
    ],
    description: 'Add 1 Phase II Clone trooper mini.',
    keywords: [],
  },
];

export default upgrades;
