import { Options } from './interfaces/Options';
import { Info } from './types/Info';
declare const npmGetPackageInfo: <T extends Info>({ name, version, parseOutput, info, }: Options<T>) => Promise<Record<Extract<"author", T> | Extract<"contributors", T> | Extract<"dependencies", T> | Extract<"deprecated", T> | Extract<"description", T> | Extract<"dist", T> | Extract<"dist-tags", T> | Extract<"homepage", T> | Extract<"keywords", T> | Extract<"license", T> | Extract<"main", T> | Extract<"maintainers", T> | Extract<"name", T> | Extract<"repository", T> | Extract<"scripts", T> | Extract<"version", T> | Extract<"versions", T>, any>>;
export default npmGetPackageInfo;
