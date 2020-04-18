import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

type InfoType =
  | 'dependencies'
  | 'deprecated'
  | 'description'
  | 'dist'
  | 'dist-tags'
  | 'keywords'
  | 'license'
  | 'maintainers'
  | 'name'
  | 'repository'
  | 'version'
  | 'versions';

interface Options {
  name: string;
  version?: string;
  parseOutput?: boolean;
  info: InfoType[];
}

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
}: Options): Promise<string | Record<InfoType, any>> => {
  const { stdout, stderr } = await execAsync(
    `npm view ${name}${version ? `@${version}` : ''} ${info.join(' ')} -json`
  );

  if (stderr) return stderr;

  return parseOutput ? JSON.parse(stdout) : stdout;
};

export default npmGetPackageInfo;
