declare const npmPackageInfo: (name: string, version?: string | undefined) => Promise<void | {
    [key: string]: string;
}>;
export default npmPackageInfo;
