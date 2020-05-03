import { exec } from 'child_process';
import { promisify } from 'util';

import { Options } from './interfaces/Options';

import { Info } from './types/Info';

const execAsync = promisify(exec);

const npmGetPackageInfo = async ({
  name,
  version,
  parseOutput = true,
  info = [
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
  ],
}: Options): Promise<Record<Info, any>> => {
  try {
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
  } catch (err) {
    return err;
  }
};

export default npmGetPackageInfo;
