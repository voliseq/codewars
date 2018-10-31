import { topThreeWords } from "../ts/most-frequently-used-words-in-a-text";

var assert = require('assert');

describe('most-frequently-used-words-in-a-text', function () {
    it('should return empty array if apostrophe without word', function () {
        const result = topThreeWords("     '     ");
        assert.deepEqual(result, []);
    });

    it('should return empty array if apostrophe without word', function () {
        const result = topThreeWords("b b b a a a a c");
        assert.deepEqual(result, ["a", "b", "c"])
    });

    it('should return empty array if empty string', function () {
        const result = topThreeWords("");
        assert.deepEqual(result, [])
    });
});