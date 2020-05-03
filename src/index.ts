import { exec } from 'child_process';
import { promisify } from 'util';

import { Options } from './interfaces/Options';

import { Info } from './types/Info';

const execAsync = promisify(exec);

const defaultInfo: Info[] = [
  'dependencies',
  'deprecated',
  'description',
  'dist',
  'dist-tags',
  'keywords',
  'license',
  'maintainers',
  'name',
  'repository',
  'version',
  'versions',
];

const npmGetPackageInfo = async ({
  name,
  version,
  parseOutput = true,
  info = defaultInfo,
}: Options): Promise<Record<Info, any>> => {
  const notAvailableInfoValues = info.filter(
    (value) => !defaultInfo.includes(value)
  );

  if (notAvailableInfoValues.length > 0) {
    throw new Error(
      `${notAvailableInfoValues.join(', ')} ${
        notAvailableInfoValues.length > 1 ? 'are' : 'is'
      } not available as info value${
        notAvailableInfoValues.length > 1 ? 's' : ''
      }`
    );
  }

  const { stdout, stderr } = await execAsync(
    `npm view ${name}${version ? `@${version}` : ''} ${info.join(' ')} -json`
  );

  if (stderr) {
    throw new Error(stderr);
  }

  if (stdout === '') {
    throw new Error('Data not found for provided package');
  }

  return parseOutput ? JSON.parse(stdout) : stdout;
};

export default npmGetPackageInfo;
