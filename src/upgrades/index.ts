import { Slot, Upgrade } from '../types/index';

import Armament from './armament';
import Command from './command';
import Comms from './comms';
import Crew from './crew';
import Force from './force';
import Gear from './gear';
import Generator from './generator';
import Grenades from './grenades';
import Hardpoint from './hardpoint';
import Heavy from './heavy';
import Ordnance from './ordanance';
import Personnel from './personnel';
import Pilot from './pilot';
import Training from './training';

export const upgradesRecord: Record<Slot, Upgrade[]> = {
  Armament: Armament,
  Command: Command,
  Comms: Comms,
  Crew: Crew,
  Force: Force,
  Hardpoint: Hardpoint,
  'Heavy Weapon': Heavy,
  Gear: Gear,
  Generator: Generator,
  Grenades: Grenades,
  Ordnance: Ordnance,
  Personnel: Personnel,
  Pilot: Pilot,
  Training: Training,
};

export const allUpgrades: Upgrade[] = [
  Armament,
  Command,
  Comms,
  Crew,
  Force,
  Gear,
  Generator,
  Grenades,
  Hardpoint,
  Heavy,
  Ordnance,
  Personnel,
  Pilot,
  Training,
].reduce((a, b) => a.concat(b));

export default allUpgrades;
