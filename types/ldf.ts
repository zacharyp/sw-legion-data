import { Faction, Format, Rank } from '.';

export type ArmyLDF = {
  uid?: string;
  name?: string;
  description?: string;
  points: number;
  faction: Faction;
  format?: Format;
  favourite?: boolean;
  version?: string;
  commander: UnitLDF[];
  operative: UnitLDF[];
  corps: UnitLDF[];
  special: UnitLDF[];
  support: UnitLDF[];
  heavy: UnitLDF[];
  commandCards?: LDFString[];
};

export type UnitLDF = {
  uid?: string;
  ldf: LDFString;
  rank: Rank;
  upgrades: UpgradesLDF;
  points?: number;
};

export type UpgradesLDF = {
  armament?: LDFString[];
  command?: LDFString[];
  comms?: LDFString[];
  force?: LDFString[];
  gear?: LDFString[];
  generator?: LDFString[];
  grenades?: LDFString[];
  gunner?: LDFString[];
  hardpoint?: LDFString[];
  heavy?: LDFString[];
  personnel?: LDFString[];
  pilot?: LDFString[];
  training?: LDFString[];
};

export type LDFString = string
