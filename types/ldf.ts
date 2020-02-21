import { Faction, Format, Rank } from '.';

export type ArmyLDF = {
  uid: string;
  name: string;
  description: string;
  points: number;
  faction?: Faction;
  format?: Format;
  favourite: boolean;
  version?: string;
  commander: UnitLDF[];
  operative: UnitLDF[];
  corps: UnitLDF[];
  special: UnitLDF[];
  support: UnitLDF[];
  heavy: UnitLDF[];
  commandCards: LDFContainer[];
};

export type UnitLDF = {
  uid: string;
  ldf: string;
  rank: Rank;
  upgrades: UpgradesLDF;
  points?: number;
};

export type UpgradesLDF = {
  armament?: LDFContainer[];
  command?: LDFContainer[];
  comms?: LDFContainer[];
  force?: LDFContainer[];
  gear?: LDFContainer[];
  generator?: LDFContainer[];
  grenades?: LDFContainer[];
  gunner?: LDFContainer[];
  hardpoint?: LDFContainer[];
  heavy?: LDFContainer[];
  personnel?: LDFContainer[];
  pilot?: LDFContainer[];
  training?: LDFContainer[];
};

export type LDFContainer = {
  ldf: string;
};
