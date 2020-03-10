import { exec } from 'child_process';

const npmPackageInfo = async (name: string) => {
  exec(`npm view ${name}`);
};

export default npmPackageInfo;
