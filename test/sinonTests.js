'use strict';

var
    chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect()
;

chai.should()

describe('sinon tests', function() {
    var
        student,
        schedule
    ;

    beforeEach(function() {
        student = {
            dropClass: function (classId, callback) {
                // Do some stuff

                // If the method exists
                if (!!callback.dropClass) {
                    callback.dropClass();
                }
                else {
                    callback();
                }
            },
            addClass: function(schedule) {
                if (!schedule.classIsFull()) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }

        schedule = {
            dropClass: function() {
                console.log('class dropped');
            },
            classIsFull: function() {
                return true;
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

        it('should call the callback and log to the console', function() {
            function onDropClass() {
                console.log('onDropClass was called');
            };
            var spy = sinon.spy(onDropClass);

            student.dropClass(1, spy);

            spy.called.should.be.true;
        });

        it('should call the callback even if it\'s a method of an object', function() {
            // Sinon will go in, grap the method, wrap it in a spy and replace the method with this wraped spy
            sinon.spy(schedule, 'dropClass');
            student.dropClass(1, schedule);
            schedule.dropClass.called.should.be.true;
        });
    });

    describe('student with stubs', function() {
        it('should call a stubbed method', function() {
            // We pass the whole object as param when using stubs so it will replace every obj's method with a stub function
            var stub = sinon.stub(schedule);
            student.dropClass(1, stub);
            stub.dropClass.called.should.be.true;
        });

        it('should return true when the class is not full', function() {
            var stub = sinon.stub(schedule);
            stub.classIsFull.returns(false);

            var returnVal = student.addClass(stub);
            returnVal.should.be.true;
        });
    });

    describe('student with mocks', function() {
        it('mocks schedule ', function() {
            var mockObj = sinon.mock(schedule);
            var expectation = mockObj.expects('classIsFull').once();

            student.addClass(schedule);
            expectation.verify();
        });
    });

});
