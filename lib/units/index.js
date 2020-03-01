"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("./commander");
var operative_1 = require("./operative");
var corps_1 = require("./corps");
var special_1 = require("./special");
var support_1 = require("./support");
var heavy_1 = require("./heavy");
exports.unitsRecord = {
    'Commander': commander_1.default,
    'Operative': operative_1.default,
    'Corps': corps_1.default,
    'Special Forces': special_1.default,
    'Support': support_1.default,
    'Heavy': heavy_1.default
};
exports.allUnits = [commander_1.default, operative_1.default, corps_1.default, special_1.default, support_1.default, heavy_1.default].reduce(function (a, b) { return a.concat(b); });
exports.default = exports.allUnits;
//# sourceMappingURL=index.js.map