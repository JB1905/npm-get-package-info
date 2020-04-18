declare const npmGetPackageInfo: (name: string, version?: string | undefined) => Promise<string | void>;
export default npmGetPackageInfo;
