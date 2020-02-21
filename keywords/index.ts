import { Keyword } from '../types';

const keywords: Keyword[] = [

  {
    name: 'Agile 1',
    description: 'After you perform a standard move, gain 1 dodge token.',
  },
  {
    name: 'AI: Attack',
    description:
      'Unless you have a faceup order token, your first action must be an attack, if able.',
  },
  {
    name: 'AI: Attack, Move',
    description:
      'Unless you have a faceup order token, your first action must be an attack, if able.',
  },
  {
    name: 'Arm 1: Proton Charge',
    description:
      'Place Proton Charge token(s) within range 1 and in line of sight of your unit leader.',
  },
  {
    name: 'Arm 1: Sonic Charge',
    description:
      'Place 1 sonic charge token within range 1 and in line of sifght of your unit leader.',
  },
  {
    name: 'Armor',
    description: 'While defending, cancel all [hit] results',
  },
  {
    name: 'Arsenal 2',
    description:
      'While attacking, each model on this unit can use up to 2 of its weapons',
  },
  {
    name: 'Blast',
    description:
      '',
  },
  {
    name: 'Block',
    description:
      'While defending, if you spend a dodge token, you gain "[Block Surge] : [Block]".',
  },
  {
    name: 'Bounty',
    description:
      'After setup, place a victory token on an enemy commander or operative. If you defeat a unit with a victory token, move that token to you. At the end of the game, if you have a victory token, gain that token.',
  },
  {
    name: 'Charge',
    description:
      'After you perform a move action, you may perform a free melee attack.',
  },
  {
    name: 'Climbing Vehicle',
    description:
      'You are treated as a trooper for the purpose of vertical movement.',
  },

  {
    name: 'Compel',
    description:
      'After another friendly unit at range 1-2 rallies, if it is suppressed but not panicked, it may gain 1 suppression token to perform a free move action.',
  },
  {
    name: 'Coordinate',
    description:
      'Emplacement Trooper (After you are issued an order, you may issue an order to a friendly emplacement trooper unit at range 1.)',
  },
  {
    name: 'Coordinate: Droid Trooper',
    description:
      'After you are issued an order, you may issue an order to a friendly droid trooper unit at range 1',
  },
  {
    name: 'Coordinate: Emplacement Trooper',
    description:
      'After you are issued an order, you may issue an order to a friendly emplacement trooper unit at range 1.',
  },
  {
    name: 'Cover 1',
    description: '',
  },
  {
    name: 'Cunning',
    description:
      'When your commander specific command cards are played, if there would be a bid for priority, treat your command card as though it had 1 fewer pip.',
  },
  {
    name: 'Critical 1',
    description:
      '',
  },
  {
    name: 'Critical 2',
    description:
      '',
  },
  {
    name: 'Cumbersome',
    description:
      '',
  },
  {
    name: 'Danger Sense 3',
    description:
      'You may choose not to remove your suppression tokens. While defending against a ranged attack, roll 1 extra defense die for each suppression token you have, adding up to 3 extra dice.',
  },
  {
    name: 'Danger Sense 4',
    description:
      'You may choose not to remove your suppression tokens. While defending against a ranged attack, roll 1 extra defense die for each suppression token you have, adding up to 4 extra dice.',
  },
  {
    name: 'Dauntless',
    description:
      'After you rally, if you are suppressed but not panicked, you may gain 1 suppression token to perform a free move action.',
  },
  {
    name: 'Defend 1',
    description: 'After you are issued an order, gain 1 dodge token.',
  },
  {
    name: 'Deflect',
    description:
      'While defending, if you spend a dodge token, you gain "[defense_surge]:[block]"; if it\'s a ranged attack, the attacker suffers 1 wound for each [defense_surge] rolled',
  },
  {
    name: 'Detachment: Rebel Veterans',
    description: '',
  },
  { 
    name: 'Detachment: Shoretroopers',
    description: ''
  },
  {
    name: 'Detonate 1: Proton Charge',
    description:
      'Detonate Proton Charge token(s) within range 1 and in line of sight of your unit leader.',
  },
  {
    name: 'Detonate 1: Sonic Charge',
    description: ''
  },
  {
    name: 'Disciplined 1',
    description:
      'When you are issued an order, you may remove up to 1 suppression token.',
  },
  {
    name: 'Disciplined 2',
    description:
      'When you are issued an order, you may remove up to 2 suppression tokens.',
  },
  {
    name: 'Emergency Stims',
    description:
      'During an attack, when you would suffer wounds, prevent up to 2 wounds and place an equal number of wound tokens on this card instead. If you do, at the end of your activation, discard each token on this card and suffer wounds equal to the number of tokens discarded.',
  },
  {
    name: 'Enrage',
    description:
      "While you have 3 or more wound tokens, treat your courage as ' - ' and gain Charge.",
  },
  {
    name: 'Enrage 4',
    description:
      'While you have 4 or more wound tokens, treat your courage as "-" and gain Charge.',
  },
  {
    name: 'Entourage: Imperial Death Troopers',
    description:
      'While building an army, ignore the rank of 1 Imperial Death Troopers unit. During the Command Phase, you may issue an order to a friendly Imperial Death Troopers unit at range 1-2.',
  },
  {
    name: 'Entourage: Imperial Royal Guards',
    description:
      'While building an army, ignore the rank of 1 Imperial Royal Guards unit. During the Command Phase, you may issue an order to a friendly Imperial Royal Guards unit at range 1-2.',
  },
  {
    name: 'Expert Climber',
    description:
      'While clambering, do not roll defense dice or suffer wounds.',
  },
  {
    name: 'Fire Support',
    description:
      'When another friendly unit performs a ranged attack, if you have a faceup order token, each mini in your unit may add an eliglble wapon to the attack pool. If you do, flip your order token facedown. Limit 1 Fire Support per attack pool.',
  },
  {
    name: 'Fixed: Front',
    description:
      '',
  },
  {
    name: 'Fixed: Rear',
    description:
      '',
  },
  {
    name: 'Fixed: Front, Rear',
    description:
      '',
  },
  {
    name: 'Full Pivot',
    description: 'When you pivot you can pivot up to 360°.',
  },
  {
    name: 'Generator 1',
    description: 'During the End Phase, flip 1 inactive shield token',
  },
  {
    name: 'Guardian 2',
    description:
      'When a friendly unit at range 1 is defending against a ranged attack, you may choose up to 2 [Hit] results. For each result chosen, roll a defense die as though you were the defender.',
  },
  {
    name: 'Guardian 3',
    description:
      'When a friendly unit at range 1 is defending against a ranged attack, you may choose up to 3 [Hit] results. For each result chosen, roll a defense die as though you were the defender.',
  },
  {
    name: 'Gunslinger',
    description:
      'After you perform a ranged attack action, you may perform an additional ranged attack action against a different unit.',
  },
  {
    name: 'Heavy Weapon Team',
    description:
      'You must equip a Heavy Weapon upgrade card. The mini added by that card is the unit leader.',
  },
  {
    name: 'High Velocity',
    description:
      'While attacking, if each weapon in your attack pool has High Velocity, the defender cannot spend dodge tokens.',
  },
  {
    name: 'Immune: Blast, Melee',
    description: '',
  },
  {
    name: 'Immune: Deflect',
    description: '',
  },
  {
    name: 'Immune: Pierce',
    description: 'Pierce cannot be used against you',
  },
  {
    name: 'Immune: Range 1 Weapons',
    description: '',
  },
  {
    name: 'Impact 1',
    description: '',
  },
  {
    name: 'Impact 2',
    description: '',
  },
  {
    name: 'Impact 3',
    description: '',
  },
  {
    name: 'Impervious',
    description:
      'While defending, if the attack pool has Pierce X, roll x additional defense dice.',
  },
  {
    name: 'Indomitable',
    description:
      'During your Rally step, roll red defense dice instead of white.',
  },
  {
    name: 'Infiltrate',
    description:
      'You may deploy anywhere beyond range 3 of all enemy units.',
  },
  {
    name: 'Inspire 1',
    description:
      'After your Rally step, remove up to 1 suppression token from another friendly unit at range 1-2.',
  },
  {
    name: 'Inspire 2',
    description:
      '',
  },
  {
    name: 'Ion 1',
    description:
      'A vehicle or droid wounded by this attack gains 1 ion token.',
  },
  {
    name: 'Jedi Hunter',
    description:
      'While attacking a unit that has a Force upgrade icon, you gain "[Surge] : [Crit]".',
  },
  {
    name: 'Jump 1',
    description:
      'Perform a move during which you ignore terrain that is height 1 or lower. This is treated as a move action.',
    action: true,
  },
  {
    name: 'Jump 2',
    description:
      'Perform a move during which you ignore terrain that is height 2 or lower. This is treated as a move action.',
    action: true,
  },
  {
    name: 'Jump 3',
    description:
      'Perform a move during which you ignore terrain that is height 3 or lower. This is treated as a move action.',
    action: true,
  },
  {
    name: 'Leader',
    description: 'This mini is your unit leader.',
  },
  {
    name: 'Light Transport 1: Open',
    description:
      'You may transport one friendly trooper unit that consists of exactly 1 small base unit. After defending, if you suffered 1 or more wounds, each unit you were transporting suffers 1 wound.',
  },
  {
    name: 'Low Profile',
    description:
      'While you are defending, if you have light cover, improve your cover by 1.',
  },
  {
    name: 'Makashi Mastery',
    description:
      'While performing a melee attack, you may reduce the Pierce value of your melee weapon by 1. If you do, the defender cannot use Immune: Pierce.',
  },
  {
    name: 'Master of the Force 1',
    description:
      'During the End Phase, you may ready one of your [force] upgrade cards.',
  },
  {
    name: 'Master of the Force 2',
    description:
      'During the End Phase, you may ready 2 of your Force upgrade cards.',
  },
  {
    name: 'Nimble',
    description:
      'After defending, if you spent 1 or more dodge tokens, gain 1 dodge token.',
  },
  {
    name: 'Noncombatant',
    description:
      'The mini added by that upgrade cannot use any weapons and wounds must be assigned to other non-unit leader minis first.',
  },
  {
    name: 'Pierce 1',
    description: '',
  },
  {
    name: 'Pierce 2',
    description: '',
  },
  {
    name: 'Precise 1',
    description: '',
  },
  {
    name: 'Pulling the Strings',
    description:
      'Choose a friendly trooper unit at range 1-2. That unit may perform a free attack action of a free move action.',
  },
  {
    name: 'Quick Thinking',
    description: 'Gain 1 aim token and 1 dodge token.',
  },
  {
    name: 'Ram 1',
    description: '',
  },
  {
    name: 'Ready 1',
    description: 'After you perform a standby action, gain 1 aim tokens.',
  },
  {
    name: 'Reconfigure',
    description: 'When you recover, you may flip this card.',
  },
  {
    name: 'Regenerate 3',
    description:
      'At the end of your activation, roll 1 white defense die for each wound token you have, up to 3. For each Defense Surge or Block result, remove 1 wound token.',
  },
  {
    name: 'Relentless',
    description:
      'After you perform a move action, you may perform a free attack action.',
  },
  {
    name: 'Repair 1: Capacity 2',
    description:
      'Place a wound token on this card to remove 1 wound, ion, or vehicle damage token from a friendly ground vehicle at range 1 and in line of sight. Limit 2 tokens.',
  },
  {
    name: 'Repair 2: Capacity 2',
    description:
      'Place a wound token on this card to remove 2 wound, ion, or vehicle damage tokens from a friendly ground vehicle at range 1 and in line of sight. Limit 2 tokens.',
  },
  {
    name: 'Reposition',
    description:
      'Either before or after you perform a standard move, you may perform a free pivot action.',
  },
  {
    name: 'Scale',
    description:
      'You gain Unhindered and Expert Climber. You may perform a free clamber maneuver before or after you move.',
  },
  {
    name: 'Scatter',
    description:
      '',
  },
  {
    name: 'Scout 1',
    description: 'After you deploy, you may perform a speed 1 move.',
  },
  {
    name: 'Scouting Party 2',
    description:
      'After you use Scout, choose up to 2 friendly troopers at range 1-2. Each friendly unit may perform a move with a speed equal to your Scout value.',
  },
  {
    name: 'Sentinel',
    description: 'Your standby range is 1-3.',
  },
  {
    name: 'Sharpshooter 1',
    description:
      'While performing a ranged attack, reduce the defenders cover by 1.',
  },
  {
    name: 'Sharpshooter 2',
    description:
      'While performing a ranged attack, reduce the defenders cover by 2.',
  },
  {
    name: 'Shielded',
    description: 'You have 4 shield tokens.',
  },
  {
    name: 'Sidearm: Melee',
    description:
      'While performing a melee attack, this model can only use the weapon on this card.',
  },
  {
    name: 'Smoke 1',
    description: '',
  },
  {
    name: 'Soresu Mastery',
    description:
      'While defending or using Guardian, if you spend a dodge token, you gain "[Block Surge] : [Block]" and the attacker suffers 1 wound for each [Block Surge] rolled.',
  },
  {
    name: 'Speeder 1',
    description:
      'While moving, ignore terrain that is height 1 or lower. When you activate, perform a compulsory move.',
  },
  {
    name: 'Speeder 2',
    description:
      'While moving, ignore terrain that is height 2 or lower. When you activate, perform a compulsory move.',
  },
  {
    name: 'Spotter 1',
    description:
      'Choose up to 1 friendly units at range 1. Each chosen unit gains an aim token.',
    action: true,
  },
  {
    name: 'Spotter 2',
    description:
      'Choose up to 2 friendly units at range 1. Each chosen unit gains an aim token.',
    action: true,
  },
  {
    name: 'Spray',
    description:
      '',
  },
  {
    name: 'Spur',
    description:
      'While performing a move, you may gain 1 suppression token to increase your maximum speed by 1.',
  },
  {
    name: 'Stationary',
    description: 'You cannot perform moves, except pivots.',
  },
  {
    name: 'Steady',
    description:
      'After you perform a move action, you may perform a free ranged attack action.',
  },
  {
    name: 'Suppressive',
    description:
      '',
  },
  {
    name: 'Tactical 1',
    description: 'After you perform a standard move, gain 1 aim token.',
  },
  {
    name: 'Take Cover 1',
    description:
      'Choose up to 1 friendly trooper unit at range 1. Each chosen unit gains a dodge token.',
    action: true,
  },  {
    name: 'Take Cover 2',
    description:
      'Choose up to 2 friendly trooper units at range 1. Each chosen unit gains a dodge token.',
    action: true,
  },
  {
    name: 'Target 1',
    description: 'After you are issued an order, gain 1 aim token',
  },
  {
    name: 'Teamwork: Han Solo',
    description:
      'While you are at range 1-2 of Han Solo, when you or Han Solo gains an aim or dodge token, then other unit gains a token of the same type.',
  },
  {
    name: 'Transport 1: Open',
    description:
      'You may transport one friendly trooper unit. After defending, if you suffered 1 or more wounds, each unit you were transporting suffers 1 wound.',
  },
  {
    name: 'Treat 1: Capacity 2',
    description:
      'Place a wound token on this card to remove 1 wound token from or restore 1 mini to a friendly non-emplacement trooper unit at range 1 and in line of sight. Limit 2 tokens.',
  },
  {
    name: 'Tow Cable',
    description:
      'After a vehicle is wounded by an attack that includes this weapon, perform a pivot with that vehicle.',
  },
  {
    name: 'Uncanny Luck 2',
    description: 'While defending, you may reroll up to 2 defense dice.',
  },
  {
    name: 'Unhindered',
    description: 'You ignore the effects of difficult terrain.',
  },
  {
    name: 'Versatile',
    description: '',
  },
  {
    name: 'Weak Point 1: Rear',
    description:
      "While defending, if the attacker's unit leader is inside your rear arc, the attack pool gains <strong>IMPACT 1</strong>",
  },
  {
    name: 'Weak Point 1: Sides',
    description:
      "While defending, if the attacker's unit leader is inside your side arcs, the attack pool gains Impact 1",
  },
  {
    name: 'Wheel Mode',
    description:
      'When you activate, you may increase you maximum speed to 3. If you do, until the end of the round, you gain Cover 2 and cannot attack or flip active shield tokens',
  },

];

export default keywords;
