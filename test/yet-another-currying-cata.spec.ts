

var assert = require('assert');
import { yack, add } from "../ts/yet-another-currying-cata";

describe('yet-another-currying-cata.spec', function () {
    it('should return empty array if apostrophe without word', function () {
        const result = yack(add)(1)(2)(3);
        assert.equal(result, 6);
    });

    it('should ignore empty parenthesis', function () {
        const result = yack(add)(1)()(2)()(3);
        assert.equal(result, 6);
    });

    it('should allow to pass add arguments into yack', function () {
        let result = yack(add,1,2)(3)
        assert.equal(result, 6) 
    });
});