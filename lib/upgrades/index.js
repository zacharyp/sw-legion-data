"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var armament_1 = require("./armament");
var command_1 = require("./command");
var comms_1 = require("./comms");
var crew_1 = require("./crew");
var force_1 = require("./force");
var gear_1 = require("./gear");
var generator_1 = require("./generator");
var grenades_1 = require("./grenades");
var hardpoint_1 = require("./hardpoint");
var heavy_1 = require("./heavy");
var ordanance_1 = require("./ordanance");
var personnel_1 = require("./personnel");
var pilot_1 = require("./pilot");
var training_1 = require("./training");
exports.upgradesRecord = {
    'Armament': armament_1.default,
    'Command': command_1.default,
    'Comms': comms_1.default,
    'Crew': crew_1.default,
    'Force': force_1.default,
    'Hardpoint': hardpoint_1.default,
    'Heavy Weapon': heavy_1.default,
    'Gear': gear_1.default,
    'Generator': generator_1.default,
    'Grenades': grenades_1.default,
    'Ordnance': ordanance_1.default,
    'Personnel': personnel_1.default,
    'Pilot': pilot_1.default,
    'Training': training_1.default,
};
exports.allUpgrades = [
    armament_1.default,
    command_1.default,
    comms_1.default,
    crew_1.default,
    force_1.default,
    gear_1.default,
    generator_1.default,
    grenades_1.default,
    hardpoint_1.default,
    heavy_1.default,
    ordanance_1.default,
    personnel_1.default,
    pilot_1.default,
    training_1.default
].reduce(function (a, b) { return a.concat(b); });
exports.default = exports.allUpgrades;
//# sourceMappingURL=index.js.map