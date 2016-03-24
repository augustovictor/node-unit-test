'use strict';

var
    chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect()
;

chai.should()

describe('sinon tests', function() {
    var student;

    beforeEach(function() {
        student = {
            dropClass: function (classId, callback) {
                // Do some stuff
                callback();
            }
        }
    });

    describe('student.dropClass()', function() {
        it('should call the callback', function() {
            // The method spy allows me to know if a method has been called, how many times and which parameters were used alog with its values
            var spy = sinon.spy();
            student.dropClass(1, spy);
            spy.called.should.be.true;
        });
    });
});
