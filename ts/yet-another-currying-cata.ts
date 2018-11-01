import { fchown } from "fs";

function add(x: number, y: number, z: number) {
    return x + y + z;
}

function yack(fn: any, ...args: any) {
    return ((fnLength: any, inArgs: any) => {
        const diff = fnLength - inArgs.length;
        let tArgs: any = [];
        const recur = function a(count: number) {
            if (count) {
                return (...x: any) => {
                    tArgs.push(...x);
                    count -= x.length;
                    return recur(count)
                }
            } else {
                tArgs = tArgs.length > diff ? tArgs.slice(0, diff) : tArgs;
                return fn(...inArgs, ...tArgs)
            }
        }
        return recur(diff)
    })(fn.length, args)
}

let test = yack(add);
console.log(test(1)(2)(3));
console.log(test(2)(3));