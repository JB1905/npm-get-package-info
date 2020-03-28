import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const npmGetPackageInfo = async (name: string, version?: string) => {
  const data: { [key: string]: string } = {};

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
    `npm view ${name}${version ? `@${version}` : ''} ${info.join(' ')}`
  );

  if (stderr) {
    return console.log(stderr);
  }

  stdout.split('\n').map((line) => {
    const [key, value] = line.split(' = ').map((_) => _.trim());

    data[key] = value;
  });

  return data;
};

export default npmGetPackageInfo;
