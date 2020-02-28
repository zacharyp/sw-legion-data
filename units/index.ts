import { Rank, Unit } from '../types/index';

import Commander from './commander';
import Operative from './operative';
import Corps from './corps';
import Special from './special';
import Support from './support';
import Heavy from './heavy';

export const unitsRecord: Record<Rank, Unit[]> = {
  'Commander': Commander,
  'Operative': Operative,
  'Corps': Corps,
  'Special Forces': Special,
  'Support': Support,
  'Heavy': Heavy
}

export const allUnits: Unit[] = [Commander, Operative, Corps, Special, Support, Heavy].reduce((a, b) => a.concat(b))

export default allUnits
