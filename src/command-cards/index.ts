import { CommandCard } from '../types/index';

export default commandCards;

export const commandCards: CommandCard[] = [
  {
    ldf: 'ambush',
    name: 'Ambush',
    pips: 1,
    orders: '1 Unit',
  },
  {
    ldf: 'push',
    name: 'Push',
    pips: 2,
    orders: '2 Units',
  },
  {
    ldf: 'assault',
    name: 'Assault',
    pips: 3,
    orders: '3 Units',
  },
  {
    ldf: 'standingorders',
    name: 'Standing Orders',
    pips: 4,
    orders: '1 Unit',
    description:
      'At the end of the Command Phase, return this card to your hand.',
  },
  {
    ldf: 'sonofskywalker',
    name: 'Son of Skywalker',
    pips: 1,
    orders: 'Luke Skywalker',
    description:
      'When Luke performs his first attack he may make an additional attack.',
  },
  {
    ldf: 'myallyistheforce',
    name: 'My Ally is the Force',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly trooper unit is activated it gains a dodge token.',
  },
  {
    ldf: 'returnofthejedi',
    name: 'Return of the Jedi',
    pips: 3,
    orders: '2 Units and Luke Skywalker',
    description:
      'When Luke Skywalker is issued an order, he gains 1 dodge token. When Luke Skywalker activates, each friendly trooper at range 1-3 of him may remove 1 suppression token.',
  },
  {
    ldf: 'implacable',
    name: 'Implacable',
    pips: 1,
    orders: 'Darth Vader',
    description:
      "At the end of Darth Vader's first activation, he may suffer 1 wound to shuffle his order token into the order pool. During Darth Vader's second activation, he performs 1 fewer action.",
  },
  {
    ldf: 'newwaystomotivatethem',
    name: 'New Ways to Motivate Them',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly non-Darth Vader trooper unit with a faceup order token activates, it may suffer 1 wound to perform 1 free action.',
  },
  {
    ldf: 'masterofevil',
    name: 'Master of Evil',
    pips: 3,
    orders: '2 Units and Darth Vader',
    description:
      'When Darth Vader is issued an order, he gains 1 dodge token. When Darth Vader activates, each enemy trooper at range 1-2 of him gains 3 suppression tokens.',
  },
  {
    ldf: 'maximumfirepower',
    name: 'Maximum Firepower',
    pips: 1,
    orders: 'General Veers',
    description:
      'At the end of General Veers´ activation, he may perform an attack using the following weapon:',
    weapon: {
      range: { from: 4 },
      dice: { red: 4 },
      keywords: ['Impact 2', 'Immune: Deflect'],
    },
  },
  {
    ldf: 'evasivemaneuvers',
    name: 'Evasive Maneuvers',
    pips: 2,
    orders: '2 Vehicles',
    description:
      'When a friendly vehicle unit is issued an order it gains 1 dodge token. Friendly vehicle units can spend dodge tokens to cancel critical hit results.',
  },
  {
    ldf: 'imperialdiscipline',
    name: 'Imperial Discipline',
    pips: 3,
    orders: 'General Veers and 2 units',
    description: 'When a friendly unit is issued an order it may recover.',
  },
  {
    ldf: 'coordinatedbombardment',
    name: 'Coordinated Bombardment',
    pips: 1,
    orders: 'Leia Organa',
    description:
      "At the end of Leia Organa's activation, you may perform up to 3 attacks against different enemy units using the following weapon:",
    weapon: {
      range: { from: 4 },
      dice: { red: 2 },
      keywords: ['Immune: Deflect'],
    },
  },
  {
    ldf: 'notimeforsorrows',
    name: 'No Time for Sorrows',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly Trooper unit is issued an order, it may perform a speed-1 move.',
  },
  {
    ldf: 'somebodyhastosaveourskins',
    name: 'Somebody Has to Save Our Skins',
    pips: 3,
    orders: 'Leia Organa and 2 Units',
    description:
      "After Leia Organa's activation, you may choose a friendly unit at range 1-2 with a faceup order token and activate it.",
  },
  {
    ldf: 'sorryaboutthemess',
    name: 'Sorry About the Mess',
    pips: 0,
    orders: 'Han Solo',
    description:
      'While building a command hand, treat this card as though it has 1 pip. When Han Solo is issued an order, he gains 1 aim token and 1 dodge token.',
  },
  {
    ldf: 'recklessdiversion',
    name: 'Reckless Diversion',
    pips: 2,
    orders: 'Han Solo and 1 Trooper',
    description:
      'When an enemy unit performs an attack, it must attack a trooper unit that has a faceup order token, if available.',
  },
  {
    ldf: 'changeofplans',
    name: 'Change of Plans',
    pips: 3,
    orders: 'Han Solo and 2 Units',
    description:
      'When this card is revealed, you may discard it to return an opponents command card to their hand. If you do, return to the Select Command Card step. That opponent cannot select the command card that was returned to their hand.',
  },
  {
    ldf: 'andnowyouwilldie',
    name: 'And Now... You Will Die',
    pips: 1,
    orders: 'Emperor Palpatine',
    description:
      "During Emperor Palpatine's activation, he may suffer 1 wound and gain 1 suppression token to perform an attack. He may do this any number of times. After Emperor Palpatine performs an attack, the defender gains 1 immobilized token.",
  },
  {
    ldf: 'giveintoyouranger',
    name: 'Give in to Your Anger',
    pips: 2,
    orders: 'Emperor Palpatine',
    description:
      "Before an opponent would activate their first unit, you may choose an enemy trooper unit. If you do, your opponent must activate that unit instead. Assign it an order token from its order pool unless it has a faceup order token. At the end of that unit's activation, if it did not perform an attack, it gains 4 suppression tokens.",
  },
  {
    ldf: 'anentirelegion',
    name: 'An Entire Legion',
    pips: 3,
    orders: 'Each eligible Unit',
  },
  {
    ldf: 'whipcordlauncher',
    name: 'Whipcord Launcher',
    pips: 1,
    orders: 'Boba Fett',
    description:
      "Boba Fett can perform moves while engaged with a unit that has 1 or more immobilized tokens. During Boba Fett's activation he gains: [card action] Choose an enemy trooper unit at range 1 and in line of sight. It gains 2 immobilized tokens and 2 suppression tokens.",
  },
  {
    ldf: 'zxflameprojector',
    name: 'ZX Flame Projector',
    pips: 2,
    orders: 'Boba Fett',
    description:
      "During Boba Fett's activation he gains the following weapons:",
    weapon: {
      range: { from: 0, to: 1 },
      dice: { red: 1 },
      keywords: ['Blast', 'Spray'],
    },
  },
  {
    ldf: 'z6jetpackrocket',
    name: 'Z-6 Jetpack Rocket',
    pips: 3,
    orders: 'Boba Fett',
    description:
      "During Boba Fett's activation he gains the following weapons:",
    weapon: {
      range: { from: 3, to: 4 },
      dice: { red: 3 },
      keywords: ['Blast', 'Impact 2'],
    },
  },
  {
    ldf: 'commoncause',
    name: 'Common Cause',
    pips: 1,
    orders: 'Chewbacca & Luke Skywalker',
    description:
      'After Chewbacca activates, if Luke Skywalker has a faceup order token, he may activate. After Luke Skywalker activates, if Chewbacca has a faceup order token, he may activate.',
  },
  {
    ldf: 'brainsandbrawn',
    name: 'Brains and Brawn',
    pips: 2,
    orders: 'Chewbacca & Leia Organa',
    description:
      'While Leia Organa is performing a ranged attack, if Chewbacca is not engaged and has line of sight to and is at range 1-3 of the defender, add one of his ranged weapons to the attack pool.',
  },
  {
    ldf: 'notoriousscoundrels',
    name: 'Notorious Scoundrels',
    pips: 3,
    orders: 'Chewbacca & Han Solo',
    description:
      "Choose one of Han Solo's command cards in your discard pile. Return that card to your hand.",
  },
  {
    ldf: 'sabotagedcommunications',
    name: 'Sabotaged Communications',
    pips: 1,
    orders: '1 Special Forces or Operative Unit',
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description:
      'Your opponent must issue orders to 1 fewer unit than is indicated on their command card to a minimum of 1.',
  },
  {
    ldf: 'turningthetide',
    name: 'Turning the Tide',
    pips: 2,
    orders: '2 Support or Heavy Units',
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description: 'Each friendly support or heavy unit gains Inspire 2.',
  },
  {
    ldf: 'coveringfire',
    name: 'Covering Fire',
    pips: 3,
    orders: '3 Corps Units',
    restrictions: [{ name: 'Rebel only', ldf: 'rebels' }],
    description:
      'After a friendly corps unit performs a ranged attack, another friendly unit at range 1-2 may gain 1 dodge token.',
  },
  {
    ldf: 'covertobservation',
    name: 'Covert Observation',
    pips: 1,
    orders: '1 Special Forces or Operative Unit',
    restrictions: [{ name: 'Imperial only', ldf: 'empire' }],
    description:
      "Look at up to 2 random command cards from an opponent's hand.",
  },
  {
    ldf: 'coordinatedfire',
    name: 'Coordinated Fire',
    pips: 3,
    orders: '3 Corps Units',
    restrictions: [{ name: 'Imperial only', ldf: 'empire' }],
    description:
      'After a friendly corps unit performs a ranged attack, if it spent 1 or more aim tokens, another friendly unit at range 1–2 may gain 1 aim token.',
  },
  {
    ldf: 'rebellious',
    name: 'Rebellious',
    pips: 1,
    orders: 'Jyn Erso',
    description:
      'Jyn Erso gains <strong>Charge</strong>. Once per round, when an enemy unit at range 1-2 and in line of sight of Jyn Erso activates, before it performs its Rally step, Jyn Erso may gain 1 suppression token to either perform an attack against that unit or to perform a free move action.',
  },
  {
    ldf: 'trustgoesbothways',
    name: 'Trust Goes Both Ways',
    pips: 2,
    orders: 'Jyn Erso & 1 Trooper',
    description:
      'Jyn Erso gains <strong>Inspire 2</strong>. When Jyn Erso issues an order to another friendly trooper unit, that unit gains <strong>Teamwork: Jyn Erso</strong>.',
  },
  {
    ldf: 'completethemission',
    name: 'Complete the Mission',
    pips: 3,
    orders: '3 Troopers',
    description:
      "Jyn Erso gains <strong>Low Profile</strong>. When a friendly trooper unit is issued an order, it may gain 1 suppression token. When a friendly trooper unit with a faceup order token activates, during its activation, it cannot become panicked or suppressed. At the end of that unit's activation, it may remove 1 suppression token.",
  },
  {
    ldf: 'voraciousambition',
    name: 'Voracious Ambition',
    pips: 1,
    orders: 'Director Orson Krennic',
    description:
      'At the start of the Activation Phase place 3 random order tokens from your order pool face down on this card. You may look at these order tokens at any time. When you would draw an order token from your order pool, you may choose 1 order token on this card and use that order token instead.',
  },
  {
    ldf: 'deploythegarrison',
    name: 'Deploy the Garrison',
    pips: 2,
    orders: '2 Troopers',
    description:
      'At the start of the Activation Phase, choose up to 2 friendly trooper units that have faceup order tokens. Each chosen unit may perform a free standby action.',
  },
  {
    ldf: 'annihilationlooms',
    name: 'Annihilation Looms',
    pips: 3,
    orders: 'Director Orson Krennic & 2 Units',
    description:
      'Each trooper unit gains 1 suppression token. If it is round 5 or 6, each trooper unit gains 1 additional suppression token.',
  },
  {
    ldf: 'explosions',
    name: 'Explosions!',
    pips: 1,
    orders: 'Sabine Wren',
    description:
      'During the round this card is played Sabine Wren gains →Arm 2: Thermal Charge. After she performs this action, she may perform a speed-1 move. Until the end of the game Sabine Wren gains Detonate 2: Thermal Charge. Do not discard this card from play.',
    weapon: {
      range: { from: 1, to: 1 },
      dice: { red: 1, white: 1 },
      surge: { attack: 'crit' },
      keywords: ['Blast'],
    },
  },
  {
    ldf: 'symbolofrebellion',
    name: 'Symbol of Rebellion',
    pips: 2,
    orders: 'Sabine Wren',
    description:
      "When Sabine Wren activates she recovers. During Sabine Wren's activation, you may place 1 grafiti token at range 1 and in line of sight of her, touching a piece of non-area terrain.",
  },
  {
    ldf: 'legacyofmandalore',
    name: 'Legacy of Mandalore',
    pips: 3,
    orders: 'Sabine Wren & 2 Troopers',
    description:
      'Sabine Wren gains Inspire 1. When Sabine Wren issues an order to a Commander, Operative, or Special Forces unit, she gains either 1 aim token or 1 dodge token.',
  },
  {
    ldf: 'mercilessmunitions',
    name: 'Merciless Munitions',
    pips: 1,
    orders: 'Bossk',
    description:
      'During the round this card is played Bossk gains →Arm 1: Dioxis Charge. After he performs this action, he may perform a speed-1 move. Until the end of the game Bossk gains Detonate 1: Dioxis Charge.\n\nAfter a trooper unit defends against an attack made by your dioxis charge, it gains 1 poison token.Do not discard this card from play.',
    weapon: {
      range: { from: 1, to: 1 },
      surge: { attack: 'crit' },
      dice: { red: 1, black: 1 },
      keywords: ['Blast'],
    },
  },
  {
    ldf: 'reptillianrampage',
    name: 'Reptillian Rampage',
    pips: 2,
    orders: 'Bossk',
    description:
      "During Bossk's activation he can perform up to 2 attack actions and he may suffer 1 wound to perform a free move action.",
  },
  {
    ldf: 'lyinginwait',
    name: 'Lying in Wait',
    pips: 3,
    orders: 'Bossk',
    description:
      'Bossk gains Sharpshooter 1. After an enemy unit activates, Bossk gains 1 aim token.',
  },
  {
    ldf: 'trainedinyourjediarts',
    name: 'Trained in Your Jedi Arts',
    pips: 1,
    orders: 'General Grievous',
    description:
      'General Grievous gains Disengage and 1 dodge token. At the end of his activation he may perform an attack against each enemy unit at range 1 using the following weapon:',
    weapon: {
      range: { from: 0, to: 1 },
      dice: { red: 1, black: 2, white: 1 },
      keywords: ['Suppressive', 'Versatile'],
    },
  },
  {
    ldf: 'supremecommander',
    name: 'Supreme Commander',
    pips: 2,
    orders: '2 Troopers',
    description:
      'General Grievous gains 1 surge token for each friendly trooper unit at range 1. While another friendly trooper unit has a faceup order token, it gains Guardian 2 and can use Guardian during a melee attack.',
  },
  {
    ldf: 'crushthem',
    name: 'Crush Them!',
    pips: 3,
    orders: 'General Grievous & 2 Units',
    description:
      'When General Grievous issues an order to a unit, that unit gains 1 surge token for each defeated enemy unit.',
  },
  {
    ldf: 'hellothere',
    name: 'Hello There',
    pips: 1,
    orders: 'Obi-Wan Kenobi',
    description:
      'Obi-Wan Kenobi gains Nimble. At the start of the Activation Phase, Obi-Wan Kenobi gains 1 aim, 1 dodge, 1 standby, or 1 surge token for each enemy unit at range 1-2.',
  },
  {
    ldf: 'knowledgeanddefense',
    name: 'Knowledge and Defense',
    pips: 2,
    orders: '2 Troopers',
    description:
      'Obi-Wan Kenobi gains 1 dodge token for each other friendly trooper unit at range 1. Obi-Wan Kenobi can use Guardian during a melee attack.',
  },
  {
    ldf: 'generalkenobi',
    name: 'General Kenobi',
    pips: 3,
    orders: 'Obi-Wan Kenobi & 2 Units',
    description:
      'When Obi-Wan Kenobi issues an order to a unit, that unit gains 1 surge token for each other friendly unit at range 1 of it.',
  },
  {
    ldf: 'fearsurpriseintimidation',
    name: 'Fear, Surprise, Intimidation',
    pips: 1,
    orders: 'Count Dooku',
    description:
      'Count Dooku gains Arsenal 2 and Relentless, and each of his ranged weapons gains Versatile. After he performs an attack, each defender gains 2 suppression tokens.',
  },
  {
    ldf: 'doublethefall',
    name: 'Double the Fall',
    pips: 2,
    orders: 'Count Dooku & 1 Unit',
    description:
      'At the start of Activation phase, if Count Dooku has a faceup order token, he may return it to his order pool to choose up to 2 enemy units at range 1-2 and return their order tokens to their order pool.',
  },
  {
    ldf: 'youdisappointme',
    name: 'You Disappoint Me',
    pips: 3,
    orders: 'Count Dooku & 2 Units',
    description:
      'When Count Dooku issues an order to a unit, that unit gains 1 dodge token. After Count Dooku performs a ranged attack against a trooper unit, he may perform a speed-2 move with that unit.',
  },
  {
    ldf: 'youcancallmecaptain',
    name: 'You Can Call Me Captain',
    pips: 1,
    orders: 'Clone Captain Rex',
    description:
      'Captain Rex gains Fire Support. When using Fire Support, his order token is not flipped upside down. When a friendly unit attacks in melee, Rex can use Fire Support to add a ranged weapon to that attack.',
  },
  {
    ldf: 'eatthisclankers',
    name: 'Eat this, Clankers!',
    pips: 2,
    orders: '2 Troopers',
    description:
      'When a friendly trooper unit performs a ranged attack while having a faceup order token and an Aim token, during the "gather a attack dice pool" step that unit can increase the maximum range of every weapon by 1 (to a maximum of 4).',
  },
  {
    ldf: 'werenotprogrammed',
    name: "We're Not Programmed",
    pips: 3,
    orders: '4 Clone Troopers',
    description:
      'Clone Captain Rex gains Inspire 2 and 2 surge tokens. When Clone Captain Rex activates, he recovers.',
    keywords: ['Inspire 2'],
  },

  {
    ldf: 'youserveyourmasterwell',
    name: 'You Serve Your Master Well',
    pips: 1,
    orders: 'Luke Skywalker',
    description:
      'Luke Skywalker gains: [action] Choose a friendly non-Commander, non-Operative trooper unit at range 1, or a suppressed enemy non-Commander, non-Operative trooper unit at range 1. Performa 1 free move or attack action with that unit. If it is an enemy unit, it can attack and start a melee with other enemy units.',
  },
  {
    ldf: 'fullofsurprises',
    name: 'Full of Surprises',
    pips: 2,
    orders: 'Luke Skywalker',
    description:
      'Luke Skywalker gains 1 dodge token. While defending, he rolls a number of additional dice equal to his courage value minus the number of suppression tokens he has.',
  },
  {
    ldf: 'iamajedi',
    name: 'I Am a Jedi',
    pips: 3,
    orders: 'Luke Skywalker',
    description:
      'Luke Skywalker gains "[Block Surge] : [Block]" and cannot perform attacks. When he is issued an order, he may choose up to 2 enemy troopers units at range 1. Those units cannot perform attacks.',
  },
  {
    ldf: 'vadersmight',
    name: "Vader's Might",
    pips: 1,
    orders: 'Darth Vader',
    description:
      'Darth Vader gains: [action] Choose another non-heavy unit at range 1 and place that unit on the battlefield within range 1 and height 1 of its current position. Then, if it is an enemy unit, roll 1 white defense die for each mini in the unit. The unit suffers 1 wound for each [block] and [Block Surge] result.',
  },
  {
    ldf: 'fearanddeadmen',
    name: 'Fear and Dead Men',
    pips: 2,
    orders: 'Darth Vader',
    description:
      'While Darth Vader uses Deflect, the attacker suffers 1 wound for each blank result, instead of each [Block Surge] result. When an enemy unit at range 1-2 and in line of sight of Darth Vader activates, Darth Vader gains 1 dodge token.',
  },
  {
    ldf: 'darknessdescends',
    name: 'Darkness Descends',
    pips: 3,
    orders: 'Darth Vader',
    description:
      'When Darth Vader is issued an order, he gains 2 surge tokens. This card may be revealed at the start of the Deploy Units step. If it is, it must be selected during round 1. Darth Vader gains Infiltrate and Scout 1. and he must be deployed at the end of setup.',
  },
  {
    ldf: 'blastoff',
    name: 'Blast Off!',
    pips: 1,
    orders: 'R2-D2',
    description:
      'R2-D2 increases his maximum speed by 1, and gains 1 dodge token, 1 suppression token, Disengage, and Card Action icon-2Jump 1',
  },
  {
    ldf: 'impromptuimmolation',
    name: 'Impromptu Immolation',
    pips: 2,
    orders: 'R2-D2',
    description:
      "After R2-D2 performs an attack, he may perform a free move action. During R2-D2's activation, he gains the following weapon",
    weapon: {
      range: { from: 0, to: 1 },
      dice: { white: 2 },
      keywords: ['Suppressive', 'Spray', 'Blast'],
    },
  },
  {
    ldf: 'smokescreen',
    name: 'Smoke Screen',
    pips: 3,
    orders: 'R2-D2',
    description:
      'When R2-D2 issues an order to another friendliy trooper unit, it may perform speed-1-move. At the start of the Activation Phase, R2-D2 may perfom the following: Smoke 1',
  },
  {
    ldf: 'crackshot',
    name: 'Crack Shot',
    pips: 1,
    orders: 'Cassian Andor',
    description:
      'Cassian Andor gains [Gunslinger] and 1 aim token. At the end of his activation, he may gain 1 supression token and he gains 1 standby token.',
  },
  {
    ldf: 'sacrifice',
    name: 'Sacrifice',
    pips: 1,
    orders: 'Cassian Andor & K-2SO',
    description:
      "K-2SO gains [Guardian 4]. At the end of K-2SO's activation, you may choose another friendly [Commander] or [Operative] unit at range 1 and in line of sight of K-2SO. If you do, defeat K-2SO and enemy units cannon perform ranged attacks against the chosen unit until the end of this round.",
  },
  {
    ldf: 'laststand',
    name: 'Last Stand',
    pips: 2,
    orders: 'Cassian Andor & 1 Trooper',
    description:
      'When Cassian Andor issues and order to a [Commander] or [Operative] unit, that unit gains [Indomitable] and gains 1 aim, 1 dodge, or 1 supression token for each wound token that unit has up to 3.',
  },
  {
    ldf: 'volunteermission',
    name: 'Volunteer Mission',
    pips: 3,
    orders: 'Cassian Andor & 2 Troopers',
    description:
      'When Cassian Andor issues an order to a [Commander], [Operative], or [Special Forces] unit, that unit recovers, gains [Danger Sense 1], and may gain 1 supression token.',
  },
  {
    ldf: 'incapacitate',
    name: 'Incapacitate',
    pips: 2,
    orders: 'Iden Versio',
    description:
      "During Iden Versio's activation, you may choose an enemy trooper unit at range 1 and in line of sight of Iden's ID10 Seeker Droid. That unit gains 3 supression tokens. Then, if it is a [Corps] unit that has not activated this round, assign it a facedown order token from its order pool or flip its order token facedown.",
  },
  {
    ldf: 'pulsescan',
    name: 'Pulse Scan',
    pips: 1,
    orders: 'Iden Versio',
    description:
      'Iden Versio gains [Sharpshooter 2] and 1 aim token. At the end of her activation, she gains 1 dodge token and 1 standby token.',
  },
  {
    ldf: 'concussiveblast',
    name: 'Concussive Blast',
    pips: 2,
    orders: 'Iden Versio',
    description:
      "When Iden Versio activates, she recovers. During Iden Versio's activation, she gains the following weapon",
    weapon: {
      range: { from: 1, to: 2 },
      dice: { red: 5 },
      keywords: ['Blast', 'Scatter', 'Suppressive'],
    },
  },
  {
    ldf: 'tacticalstrike',
    name: 'Tactical Strike',
    pips: 3,
    orders: 'Iden Versio & 3 Troopers',
    description:
      'When Iden Versio or a friendly [Operative] unit that has a faceup order token activates, it may reduce its maximum speed to 1. If it does, it gains [Steady] and [Tactical 1].',
  },
];
