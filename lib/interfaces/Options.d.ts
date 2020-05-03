import { Info } from '../types/Info';
export interface Options<T> {
    name: string;
    version?: string;
    parseOutput?: boolean;
    info?: T[] | Info[];
}
