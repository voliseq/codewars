import { fchown } from "fs";

function add(x: number, y: number, z: number) {
    return x + y + z;
}

function yack(fn: any, ...args: any) {

    const diff = fn.length - args.length;
    const recur = function a(count: number, argsT: Array<number>) {
        if (count) {
            return (...x: any) => {
                x = x.slice(0, diff - argsT.length);
                return recur(count - x.length, [...argsT, ...x])
            }
        } else {
            argsT = argsT.length > diff ? argsT.slice(0, diff) : argsT;
            return fn(...args, ...argsT)
        }
    }
    return recur(diff, [])
}

let test = yack(add);
console.log(test(1)( null,4));