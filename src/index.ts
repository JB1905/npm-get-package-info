import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const npmGetPackageInfo = async (name: string, version?: string) => {
  const info = [
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

  const { stdout, stderr } = await execAsync(
    `npm view ${name}${version ? `@${version}` : ''} ${info.join(' ')} -json`
  );

  if (stderr) {
    return console.log(stderr);
  }

  return stdout;
};

export default npmGetPackageInfo;
