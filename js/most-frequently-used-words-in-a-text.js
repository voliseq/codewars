"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TEST_STRING = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`;
function topThreeWords(text) {
    const words = text.toLowerCase().match(/([a-z]|'+[a-z]|[a-z]'+|'+[a-z]'+)+/g);
    if (!words)
        return [];
    let result = words.reduce((acc, val) => {
        acc[val] = acc[val] ? ++acc[val] : 1;
        return acc;
    }, {});
    result = Object.keys(result).sort((a, b) => result[b] - result[a]).slice(0, 3);
    return result;
}
exports.topThreeWords = topThreeWords;
topThreeWords(TEST_STRING);
