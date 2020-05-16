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

  const parsedResults = JSON.parse(stdout);

  if (Array.isArray(info) && info.length > 0) {
    if (Array.isArray(parsedResults)) {
      results = [];

      parsedResults.map((parsedResult) => {
        const extractedFields: Record<string, any> = {};

        info.map(
          (infoItem) => (extractedFields[infoItem] = parsedResult[infoItem])
        );

        results.push(extractedFields);
      });
    } else if (typeof parsedResults === 'object') {
      results = {};

      info.map((infoItem) => (results[infoItem] = parsedResults[infoItem]));
    }
  } else if (typeof info === 'string') {
    if (Array.isArray(parsedResults)) {
      results = [];

      parsedResults.map((parsedResult) => results.push(parsedResult[info]));
    } else if (typeof parsedResults === 'object') {
      results = parsedResults[info];
    }
  } else {
    results = parsedResults;
  }

  return parseOutput ? results : JSON.stringify(results);
}

export default npmGetPackageInfo;
