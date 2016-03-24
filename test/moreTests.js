'use strict';

var
    chai  = require('chai'),
    expect = chai.expect
;

chai.should();

describe('shold be true', function() {
    it('should be true', function() {
        expect(true).to.be.true;
    });
});
