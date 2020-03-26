import { exec } from 'child_process';

const npmPackageInfo = async (name: string, version?: string) => {
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

  exec(
    `npm view ${name}${version && `@${version}`} ${info.join(' ')}`,
    (error, stdout, stderr) => {
      if (error) {
        return console.log(error);
      }

      if (stderr) {
        return console.log(stderr);
      }

      stdout.split('\n').map((line) => {
        const [key, value] = line.split(' = ').map((_) => _.trim());

        data[key] = value;
      });
    }
  );

  return data;
};

export default npmPackageInfo;
