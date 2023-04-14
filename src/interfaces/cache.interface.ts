export interface Cache {
    has(key: string): boolean;
    put(key: string, value: any): void;
    get(key: string): any;
}
