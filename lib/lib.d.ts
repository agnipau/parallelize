export declare const genRandomSleepInterval: (min: number, max: number) => number;
export declare function parallelize<T = unknown>({ funcs, concurrency, sleepInterval }: {
    funcs: (() => Promise<T>)[];
    concurrency?: number;
    sleepInterval?: number;
}): AsyncGenerator<T[]>;
