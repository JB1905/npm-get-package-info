import { exec } from 'child_process';
import { promisify } from 'util';

import { Options } from './interfaces/Options';

const execAsync = promisify(exec);

async function npmGetPackageInfo({
  name,
  version,
  parseOutput = true,
  info = [],
}: Options) {
  const { stdout, stderr } = await execAsync(
    `npm view ${name}${version ? `@${version}` : ''} --json`
  );

  if (stderr) {
    throw new Error(stderr);
  }

  if (stdout === '') {
    throw new Error('Data not found for provided package');
  }

  let results: any;

  const data = JSON.parse(stdout);

  if (Array.isArray(info) && info.length > 0) {
    if (Array.isArray(data)) {
      results = [];

      data.map((dataItem) => {
        const helperObj: Record<string, any> = {};

        info.map((infoItem) => (helperObj[infoItem] = dataItem[infoItem]));

        results.push(helperObj);
      });
    } else if (typeof data === 'object') {
      results = {};

      info.map((infoItem) => (results[infoItem] = data[infoItem]));
    }
  } else if (typeof info === 'string') {
    if (Array.isArray(data)) {
      results = [];

      data.map((dataItem) => results.push(dataItem[info]));
    } else if (typeof data === 'object') {
      results = data[info];
    }
  } else {
    results = data;
  }

  return parseOutput ? results : JSON.stringify(results);
}

export default npmGetPackageInfo;
