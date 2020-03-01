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
export var upgradesRecord = {
    'Armament': Armament,
    'Command': Command,
    'Comms': Comms,
    'Crew': Crew,
    'Force': Force,
    'Hardpoint': Hardpoint,
    'Heavy Weapon': Heavy,
    'Gear': Gear,
    'Generator': Generator,
    'Grenades': Grenades,
    'Ordnance': Ordnance,
    'Personnel': Personnel,
    'Pilot': Pilot,
    'Training': Training,
};
export var allUpgrades = [
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
    Training
].reduce(function (a, b) { return a.concat(b); });
export default allUpgrades;
//# sourceMappingURL=index.js.map