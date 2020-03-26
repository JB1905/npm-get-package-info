declare const npmPackageInfo: (name: string) => Promise<{
    [key: string]: string;
}>;
export default npmPackageInfo;
