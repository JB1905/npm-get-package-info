declare const npmPackageInfo: (name: string, version?: string | undefined) => Promise<{
    [key: string]: string;
}>;
export default npmPackageInfo;
