import { Cache } from '../interfaces/cache.interface';

class MapCache implements Cache {
    private readonly map: Map<string, any> = new Map();

    has(key: string): boolean {
        return this.map.has(key);
    }

    put(key: string, value: any): void {
        this.map.set(key, value);
    }

    get(key: string): any {
        const value = this.map.get(key);
        if (value) {
            return value;
        }
        throw Error(`Cannot find value`);
    }
}

export function newCache(): Cache {
    return new MapCache();
}

export const CACHE: Cache = new MapCache();
