"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z) {
    return x + y + z;
}
exports.add = add;
function yack(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }
    else {
        return (...args2) => yack(fn, ...args, ...args2);
    }
}
exports.yack = yack;
let test = yack(add);
console.log(test(1)(3, 4));
