import Commander from './commander';
import Operative from './operative';
import Corps from './corps';
import Special from './special';
import Support from './support';
import Heavy from './heavy';
export var unitsRecord = {
    'Commander': Commander,
    'Operative': Operative,
    'Corps': Corps,
    'Special Forces': Special,
    'Support': Support,
    'Heavy': Heavy
};
export var allUnits = [Commander, Operative, Corps, Special, Support, Heavy].reduce(function (a, b) { return a.concat(b); });
export default allUnits;
//# sourceMappingURL=index.js.map