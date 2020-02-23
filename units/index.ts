import { Unit } from '../types'

import Commander from './commander';
import Operative from './operative';
import Corps from './corps';
import Special from './special';
import Support from './support';
import Heavy from './heavy';

export default {
  Commander,
  Operative,
  Corps,
  'Special Forces': Special,
  Support,
  Heavy,
};

export const allUnits: Unit[] = [Commander, Operative, Corps, Special, Support, Heavy].reduce((a, b) => a.concat(b))
