import { delay } from "./delay";

export const genRandomSleepInterval = (min: number, max: number): number =>
    Math.floor(Math.random() * max) + min;

export async function* parallelize<T = unknown>({
    funcs,
    concurrency = Infinity,
    sleepInterval = 0
}: {
    funcs: (() => Promise<T>)[];
    concurrency?: number;
    sleepInterval?: number;
}): AsyncGenerator<T[]> {
    for (let i = 0; i < funcs.length; i += concurrency) {
        yield await Promise.all(
            funcs.slice(i, concurrency + i).map(func => func())
        );

        i + concurrency < funcs.length && (await delay(sleepInterval));
    }
}
