import { mkdir, writeFile } from 'fs';
import { keywords, units, upgrades, commandCards, sources } from '../src/index';

const unifiedData = {
  units: units,
  keywords: keywords,
  upgrades: upgrades,
  commandCards: commandCards,
  sources: sources,
};

const dataJson = JSON.stringify(unifiedData);

mkdir('src/out', err => {
  if (err && err.code !== 'EEXIST') console.error(err);
});

writeFile('src/out/legion-data.json', dataJson, err => {
  if (err) console.error(err);
  console.log('Data written to file src/out/legion-data.json');
});
