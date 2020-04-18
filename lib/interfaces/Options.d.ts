import { Info } from '../types/Info';
export interface Options {
    name: string;
    version?: string;
    parseOutput?: boolean;
    info?: Info[];
}
