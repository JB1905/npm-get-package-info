import { exec } from 'child_process';

const npmPackageInfo = async (name: string) => {
  exec(
    `npm view ${name} repository dependencies contributors versions deprecated`,
    (error, stdout, stderr) => {
      console.log(stdout);
    }
  );
};

export default npmPackageInfo;
