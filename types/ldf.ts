import { Faction, Format, Rank } from '.';

export type ArmyLDF = {
  uid: string,
  name: string,
  description: string,
  points: number,
  faction: Faction,
  format: Format,
  favourite: boolean,
  commander: UnitLDF[],
  operative: UnitLDF[],
  corps: UnitLDF[],
  special: UnitLDF[],
  support: UnitLDF[],
  heavy: UnitLDF[],
};

export type UnitLDF = {
  uid: string,
  ldf: string,
  rank: Rank;
  upgrades: SlotsLDF,
  points?: number,
};

export type SlotsLDF = {
  command?: UpgradeLDF[],
  comms?: UpgradeLDF[],
  force?: UpgradeLDF[],
  gear?: UpgradeLDF[],
  generator?: UpgradeLDF[],
  grenades?: UpgradeLDF[],
  hardpoint?: UpgradeLDF[],
  heavy?: UpgradeLDF[],
  personnel?: UpgradeLDF[],
  pilot?: UpgradeLDF[],
  training?: UpgradeLDF[],
};

export type UpgradeLDF = {
  ldf: string,
};
