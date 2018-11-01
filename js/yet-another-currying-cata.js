"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z) {
    return x + y + z;
}
function yack(fn, ...args) {
    return ((fnLength, inArgs) => {
        const diff = fnLength - inArgs.length;
        let tArgs = [];
        const recur = function a(count) {
            if (count) {
                return (...x) => {
                    tArgs.push(...x);
                    count -= x.length;
                    return recur(count);
                };
            }
            else {
                tArgs = tArgs.length > diff ? tArgs.slice(0, diff) : tArgs;
                return fn(...inArgs, ...tArgs);
            }
        };
        return recur(diff);
    })(fn.length, args);
}
let test = yack(add);
console.log(test(1)(2)(3));
console.log(test(2)(3));
