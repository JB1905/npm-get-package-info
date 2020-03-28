declare const npmGetPackageInfo: (name: string, version?: string | undefined) => Promise<void | {
    [key: string]: string;
}>;
export default npmGetPackageInfo;
