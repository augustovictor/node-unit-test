/// <reference path="../typings/mocha/mocha.d.ts"/>
'use strict';

var Student = require("../Student")
, Course = require("../Course")
, chai = require("chai")
, should = chai.should()
, expect = chai.expect
;

describe("Course", function () {
  var
    courseName = 'Introduction to awesomeness',
    courseCode = 'AWE 101',
    courseDescription = 'This course will make you awesome!',
    student
  ;

  beforeEach(function() {
      student = Student.create('Victor Augusto', 5);
  });

  it('should save data correctly', function() {
      var course = Course.create(courseName, courseCode, courseDescription);

      should.exist(course.name);
      course.name.should.equal(courseName);

      should.exist(course.code);
      course.code.should.equal(courseCode);

      should.exist(course.description);
      course.description.should.equal(courseDescription);

      should.exist(course.students);
      course.students.should.eql([]); // equal() compares references whereas eql() compare values

      should.exist(course.times);
      course.times.should.eql([]);
  });

  describe('registerStudent()', function() {
      it('should add the student to the students array', function() {
          var course = Course.create(courseName, courseCode, courseDescription);

          course.registerStudent(student);
          course.students.length.should.equal(1);
          course.students[0].id.should.equal(student.id);
      });
  });

  describe('unregisterStudent()', function() {
      it('should throw an error if we try to remove a student that is not in the class', function() {
          var course = Course.create(courseName, courseCode, courseDescription);
          expect(function() {
              course.unregisterStudent('anything =D');
          }).to.throw();
      });
  });
});
