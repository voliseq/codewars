"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumIntervals(intervals) {
    let length = 0;
    const finalInterval = [];
    intervals.forEach((interval, index) => {
        let newElements = 0;
        for (let i = interval[0]; i <= interval[1]; i++) {
            if (finalInterval.indexOf(i) === -1) {
                finalInterval.push(i);
                newElements++;
            }
        }
        if (index === 0) {
            length += interval[1] - interval[0];
        }
        else {
            length += newElements > 1 ? newElements - 1 : newElements;
        }
    });
    return length;
}
exports.sumIntervals = sumIntervals;
let res = sumIntervals([[1, 5], [1, 5]]);
