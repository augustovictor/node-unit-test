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
    courseDescription = 'This course will make you awesome!'
  ;

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
});
