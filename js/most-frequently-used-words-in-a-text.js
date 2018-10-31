"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TEST_STRING = "In a village of La Mancha, the name of which I have no desire to call to\nmind, there lived not long since one of those gentlemen that keep a lance\nin the lance-rack, an old buckler, a lean hack, and a greyhound for\ncoursing. An olla of rather more beef than mutton, a salad on most\nnights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\non Sundays, made away with three-quarters of his income.";
function topThreeWords(text) {
    var words = text.toLowerCase().match(/([a-z]|'+[a-z]|[a-z]'+|'+[a-z]'+)+/g);
    if (!words)
        return [];
    var result = words.reduce(function (acc, val) {
        acc[val] = acc[val] ? ++acc[val] : 1;
        return acc;
    }, {});
    result = Object.keys(result).sort(function (a, b) { return result[b] - result[a]; }).slice(0, 3);
    return result;
}
exports.topThreeWords = topThreeWords;
topThreeWords(TEST_STRING);
