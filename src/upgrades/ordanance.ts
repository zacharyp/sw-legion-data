import { Upgrade } from '../types/index';

const upgrades: Upgrade[] = [
  {
    ldf: 'bunkerbustershells',
    name: '"Bunker Buster" Shells',
    slot: 'Ordnance',
    exhaust: true,
    points: 12,
    description: '',
    keywords: ['Blast', 'Cycle', 'Fixed: Front', 'Scatter'],
    weapon: {
      range: { from: 1, to: 2 },
      dice: { black: 1, white: 3 },
    },
  },
  {
    ldf: 'highenergyshells',
    name: 'High-Energy Shells',
    slot: 'Ordnance',
    exhaust: true,
    points: 8,
    description: '',
    keywords: ['Critical 1', 'Cycle', 'High Velocity', 'Fixed: Front'],
    weapon: {
      range: { from: 2, to: 4 },
      dice: { red: 2, white: 1 },
    },
  },
  {
    ldf: 'armorpiercingshells',
    name: 'Armor-Piercing Shells',
    slot: 'Ordnance',
    exhaust: true,
    points: 10,
    description: '',
    keywords: ['Cycle', 'Fixed: Front', 'Impact 3'],
    weapon: {
      range: { from: 2, to: 3 },
      dice: { red: 1, black: 2 },
    },
  },
];

export default upgrades;
