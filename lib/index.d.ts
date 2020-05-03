import { Options } from './interfaces/Options';
import { Info } from './types/Info';
declare const npmGetPackageInfo: <T extends Info>({ name, version, parseOutput, info, }: Options<T>) => Promise<Record<Extract<"dependencies", T> | Extract<"deprecated", T> | Extract<"description", T> | Extract<"dist", T> | Extract<"dist-tags", T> | Extract<"keywords", T> | Extract<"license", T> | Extract<"maintainers", T> | Extract<"name", T> | Extract<"repository", T> | Extract<"version", T> | Extract<"versions", T>, any>>;
export default npmGetPackageInfo;
