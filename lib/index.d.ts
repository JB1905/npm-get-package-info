import { Options } from './interfaces/Options';
import { Info } from './types/Info';
declare const npmGetPackageInfo: ({ name, version, parseOutput, info, }: Options) => Promise<string | Record<Info, any>>;
export default npmGetPackageInfo;
