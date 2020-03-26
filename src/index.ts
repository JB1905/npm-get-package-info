import { exec } from 'child_process';

const npmPackageInfo = async (name: string) => {
  const data: { [key: string]: string } = {};

  const info = [
    'repository',
    'dependencies',
    'maintainers',
    'name',
    'description',
    'license',
    'keywords',
    'versions',
    'version',
    'dist-tags',
    'deprecated',
  ];

  exec(`npm view ${name} ${info.join(' ')}`, (error, stdout, stderr) => {
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
  });

  return data;
};

export default npmPackageInfo;
