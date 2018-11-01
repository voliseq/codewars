

var assert = require('assert');
import { sumIntervals } from "../js/sum-of-intervals";

describe('sum-of-intervals', function () {
    it('should not add if second interval is same as first', function () {
        const result = sumIntervals([[1,5], [1,5]])
        assert.equal(result, 4);
    });
    it('should add one if second interval extends the first one only by range of 1', function () {
        const result = sumIntervals([[1,5], [1,6]])
        assert.equal(result, 5);
    });
    it('should calculate range for 3 intervals', function () {
        const result = sumIntervals([[1,5], [1,6], [2,10]])
        assert.equal(result, 8);
    });
});
