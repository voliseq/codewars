"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z) {
    return x + y + z;
}
function yack(fn, ...args) {
    const diff = fn.length - args.length;
    const recur = function a(count, argsT) {
        if (count) {
            return (...x) => {
                x = x.slice(0, diff - argsT.length);
                return recur(count - x.length, [...argsT, ...x]);
            };
        }
        else {
            argsT = argsT.length > diff ? argsT.slice(0, diff) : argsT;
            return fn(...args, ...argsT);
        }
    };
    return recur(diff, []);
}
let test = yack(add);
console.log(test(1)(null, 4));
