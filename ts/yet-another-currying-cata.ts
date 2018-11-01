
export function add(x: number, y: number, z: number) {
    return x + y + z;
}

export function yack(fn: any, ...args: any) {
    if (args.length >= fn.length) {
        return fn(...args);
    } else {
        return (...args2: Array<number>) => yack(fn, ...args, ...args2);
    }
}

let test = yack(add);
console.log(test(1)(3,4));