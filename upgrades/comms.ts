import { Upgrade } from '../types';

const upgrades: Upgrade[] = [
  {
    ldf: 'commsjammer',
    name: 'Comms Jammer',
    description:
      'Enemy units at range 1 cannot be issued orders, unless they are issuing an order to themselves.',
    slot: 'Comms',
    points: 5,
    printed_points: 15,
  },
  {
    ldf: 'longrangecomlink',
    name: 'Long-Range Comlink',
    slot: 'Comms',
    points: 5,
    printed_points: 10,
    description:
      'During the Command Phase, you can be issued orders by friendly commander or operative units regardless of range.',
  },
  {
    ldf: 'hquplink',
    name: 'HQ Uplink',
    slot: 'Comms',
    points: 10,
    exhaust: true,
    description:
      'During the Issue Orders Step of the Command Phase, issue an order to yourself.',
  },
  {
    ldf: 'commsrelay',
    name: 'Comms Relay',
    slot: 'Comms',
    points: 5,
    description:
      'When you would be issued an order, you may choose a friendly unit at range 1-2. Issue an order to the chosen unit instead.',
    unitTypeExclusions: ['Emplacement Trooper']
  },
  {
    ldf: 'integratedcommsantenna',
    name: 'Integrated Comms Antenna',
    slot: 'Comms',
    points: 3,
    description:
      'During the Command Phase, you can be issued orders by friendly Commander or Operative inits at range 1-4.',
    unitTypeRestrictions: ['Droid Trooper']
  },
];

export default upgrades;
