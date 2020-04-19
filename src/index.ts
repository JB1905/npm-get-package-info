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
}: Options): Promise<string | Record<Info, any>> => {
  const { stdout, stderr } = await execAsync(
    `npm view ${name}${version ? `@${version}` : ''} ${info.join(' ')} -json`
  );

  if (stderr) return stderr;

  return parseOutput ? JSON.parse(stdout) : stdout;
};

export default npmGetPackageInfo;
