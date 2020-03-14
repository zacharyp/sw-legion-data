export type AttackDice = {
  white?: number;
  black?: number;
  red?: number;
};

export type DefenseDice = 'white' | 'red';

export type Keyword = {
  name: string;
  description: string;
  action?: boolean;
  affects?: String;
};

export type Rank =
  | 'Commander'
  | 'Operative'
  | 'Corps'
  | 'Special Forces'
  | 'Support'
  | 'Heavy';

export type RankKey =
  | 'commander'
  | 'operative'
  | 'corps'
  | 'special'
  | 'support'
  | 'heavy';

export type Faction = 'imperial' | 'rebel' | 'separatist' | 'republic';

export type Side = 'light' | 'dark' | 'neutral';

export type Format = 'Standard' | 'Grand' | 'Skirmish';

export type Slot =
  | 'Armament'
  | 'Command'
  | 'Comms'
  | 'Crew'
  | 'Force'
  | 'Hardpoint'
  | 'Heavy Weapon'
  | 'Gear'
  | 'Generator'
  | 'Grenades'
  | 'Ordnance'
  | 'Personnel'
  | 'Pilot'
  | 'Training';

export type SlotKey =
  | 'armament'
  | 'command'
  | 'comms'
  | 'crew'
  | 'force'
  | 'gear'
  | 'generator'
  | 'grenades'
  | 'hardpoint'
  | 'heavyweapon'
  | 'ordnance'
  | 'personnel'
  | 'pilot'
  | 'training';

export type Army = {
  uid: string;
  name: string;
  points: number;
  faction?: Faction;
  format?: Format;
  favourite: boolean;
  version?: string;
  commander: Unit[];
  operative: Unit[];
  corps: Unit[];
  special: Unit[];
  support: Unit[];
  heavy: Unit[];
  commandCards: CommandCard[];
};

export type Surge = { attack?: 'hit' | 'crit'; defense?: 'block' };

export type Unit = {
  uid?: string;
  ldf: string;
  factions: Faction[];
  unique?: boolean;
  name: string;
  subtitle?: string;
  type: UnitType;
  points: number;
  printed_points?: number;
  pointsWithUpgrades?: number;
  rank: Rank;
  minis: number;
  wounds: number;
  courage?: number;
  resilience?: number;
  defense: DefenseDice;
  surge: Surge;
  speed: number;
  slots: Slot[];
  keywords: KeywordType[];
  weapons: Weapon[];
  upgrades?: Upgrades;
  commandCards?: string[];
  entourage?: string[];
};

export type UnitType =
  | 'Trooper'
  | 'Emplacement Trooper'
  | 'Creature Trooper'
  | 'Clone Trooper'
  | 'Droid Trooper'
  | 'Vehicle'
  | 'Ground Vehicle'
  | 'Repulsor Vehicle';

export type Restriction = {
  name: string;
  ldf: string;
};

export type Upgrade = {
  ldf: string;
  name: string;
  side?: Side;
  unique?: boolean;
  description?: string;
  exhaust?: boolean;
  restrictions?: Restriction[];
  factionRestrictions?: Faction[];
  unitTypeExclusions?: UnitType[];
  unitTypeRestrictions?: UnitType[];
  slot: Slot;
  points: number;
  printed_points?: number;
  keywords?: KeywordType[];
  weapon?: Weapon;
};

export type Upgrades = {
  armament?: Upgrade[];
  command?: Upgrade[];
  comms?: Upgrade[];
  force?: Upgrade[];
  gear?: Upgrade[];
  generator?: Upgrade[];
  grenades?: Upgrade[];
  gunner?: Upgrade[];
  hardpoint?: Upgrade[];
  heavy?: Upgrade[];
  ordnance?: Upgrade[];
  personnel?: Upgrade[];
  pilot?: Upgrade[];
  training?: Upgrade[];
};

export type Weapon = {
  name?: string;
  range: { from: number; to?: number };
  dice: AttackDice;
  keywords?: KeywordType[];
  surge?: Surge;
};

export type CommandCard = {
  ldf: string;
  name: string;
  pips: number;
  orders: string;
  description?: string;
  restrictions?: Restriction[];
  weapon?: Weapon;
  keywords?: KeywordType[];
};

export type KeywordType =
  | 'Agile 1'
  | 'Agile 2'
  | 'AI: Attack'
  | 'AI: Attack, Move'
  | 'AI: Dodge, Move'
  | 'Arm 1: Proton Charge'
  | 'Arm 1: Sonic Charge'
  | 'Armor'
  | 'Armor 1'
  | 'Armor 2'
  | 'Arsenal 2'
  | 'Arsenal 3'
  | 'Barrage'
  | 'Beam 2'
  | 'Blast'
  | 'Block'
  | 'Bounty'
  | 'Calculate Odds'
  | 'Charge'
  | 'Climbing Vehicle'
  | 'Compel'
  | 'Coordinate'
  | 'Coordinate: Droid Trooper'
  | 'Coordinate: Emplacement Trooper'
  | 'Cover 1'
  | 'Covert Ops'
  | 'Counterpart: R2-D2'
  | 'Counterpart: Iden Versio'
  | 'Critical 1'
  | 'Critical 2'
  | 'Cumbersome'
  | 'Cunning'
  | 'Cycle'
  | 'Danger Sense 3'
  | 'Danger Sense 4'
  | 'Dauntless'
  | 'Defend 1'
  | 'Deflect'
  | 'Detachment: Cassian Andor'
  | 'Detachment: Rebel Veterans'
  | 'Detachment: Shoretroopers'
  | 'Detonate 1: Proton Charge'
  | 'Detonate 1: Sonic Charge'
  | 'Disciplined 1'
  | 'Disciplined 2'
  | 'Distract'
  | 'Emergency Stims'
  | 'Entourage: Imperial Death Troopers'
  | 'Entourage: Imperial Royal Guards'
  | 'Enrage'
  | 'Enrage 4'
  | 'Expert Climber'
  | 'Field Commander'
  | 'Fire Support'
  | 'Fixed: Front'
  | 'Fixed: Front, Rear'
  | 'Fixed: Rear'
  | 'Full Pivot'
  | 'Generator 1'
  | 'Grounded'
  | 'Guardian 2'
  | 'Guardian 3'
  | 'Gunslinger'
  | 'Heavy Weapon Team'
  | 'High Velocity'
  | 'Hover: Ground'
  | 'Icognito'
  | 'Immune: Blast, Melee'
  | 'Immune: Deflect'
  | 'Immune: Pierce'
  | 'Immune: Range 1 Weapons'
  | 'Inconspicuous'
  | 'Impact 1'
  | 'Impact 2'
  | 'Impact 3'
  | 'Impervious'
  | 'Indomitable'
  | 'Infiltrate'
  | 'Inspire 1'
  | 'Inspire 2'
  | 'Ion 1'
  | 'Jedi Hunter'
  | 'Jump 1'
  | 'Jump 2'
  | 'Jump 3'
  | 'Leader'
  | 'Lethal 1'
  | 'Light Transport 1: Closed'
  | 'Light Transport 1: Open'
  | 'Loadout'
  | 'Long Shot 1'
  | 'Low Profile'
  | 'Makashi Mastery'
  | 'Marksman'
  | 'Master of the Force 1'
  | 'Master of the Force 2'
  | 'Nimble'
  | 'Noncombatant'
  | 'Pierce 1'
  | 'Pierce 2'
  | 'Pierce 3'
  | 'Precise 1'
  | 'Precise 2'
  | 'Poison 1'
  | 'Pulling the Strings'
  | 'Quick Thinking'
  | 'Ram 1'
  | 'Ready 1'
  | 'Recharge 1'
  | 'Recharge 2'
  | 'Reconfigure'
  | 'Regenerate 3'
  | 'Relentless'
  | 'Reliable 1'
  | 'Repair 1: Capacity 2'
  | 'Repair 2: Capacity 2'
  | 'Reposition'
  | 'Scale'
  | 'Scatter'
  | 'Scout 1'
  | 'Scout 2'
  | 'Scout 3'
  | 'Scouting Party 2'
  | 'Secret Mission'
  | 'Sentinel'
  | 'Sharpshooter 1'
  | 'Sharpshooter 2'
  | 'Shielded'
  | 'Shielded 1'
  | 'Shielded 2'
  | 'Sidearm: Melee'
  | 'Small'
  | 'Smoke 1'
  | 'Soresu Mastery'
  | 'Speeder 1'
  | 'Speeder 2'
  | 'Spotter 1'
  | 'Spotter 2'
  | 'Spray'
  | 'Spur'
  | 'Stationary'
  | 'Steady'
  | 'Suppressive'
  | 'Tactical 1'
  | 'Take Cover 1'
  | 'Take Cover 2'
  | 'Target 1'
  | 'Teamwork: Cassian Andor'
  | 'Teamwork: Han Solo'
  | 'Transport 1: Closed'
  | 'Transport 1: Open'
  | 'Treat 1: Capacity 2'
  | 'Tow Cable'
  | 'Uncanny Luck 1'
  | 'Uncanny Luck 2'
  | 'Unhindered'
  | 'Versatile'
  | 'Weak Point 1: Rear'
  | 'Weak Point 2: Rear'
  | 'Weak Point 1: Sides'
  | 'Wheel Mode';
