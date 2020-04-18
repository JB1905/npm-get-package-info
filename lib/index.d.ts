declare type InfoType = 'dependencies' | 'deprecated' | 'description' | 'dist' | 'dist-tags' | 'keywords' | 'license' | 'maintainers' | 'name' | 'repository' | 'version' | 'versions';
interface Options {
    name: string;
    version?: string;
    parseOutput?: boolean;
    info: InfoType[];
}
declare const npmGetPackageInfo: ({ name, version, parseOutput, info, }: Options) => Promise<string | JSON>;
export default npmGetPackageInfo;
