var assert = require('assert');
var plusOne = require('../index.js');

describe('plusOne', function() {
    describe('when passed 1', function() {
	it('should return 2', function() {
	    assert.equal(plusOne.plusOne(1), 2);
	});
    });
    describe('when passed 2', function() {
	it('should return 3', function() {
	    assert.equal(plusOne.plusOne(2), 3);
	});
    });
});
