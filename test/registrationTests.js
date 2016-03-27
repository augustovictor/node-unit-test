'use strict';

//jshint expr: true

var Course = require('../Course');
var Student = require('../Student');
var Registration = require('../Registration');
var DataLoader = require('../DataLoader');
var chai = require('chai');
var sinon = require('sinon');

chai.should();

describe('tests for adding a student to a course', function() {
  var dataLoader;
  var student;
  var course;
  var registration;

  beforeEach(function() {
    dataLoader = sinon.stub(new DataLoader());
    student = Student.create(dataLoader);
    course = Course.create(dataLoader);

    dataLoader.getCourseSync.returns({
      maxSize: 2,
      students: [],
      id: 1
    });

    dataLoader.saveCourseSync.returns(true);

    dataLoader.getStudentSync.returns({
      name: 'Lara',
      id: 1
    });
    registration = Registration.create(course, student);

  });

  xit('doesn\' call save if the course is full', function() {
    // We will use stub to tell the dataLoader when somebody calls .getCourseSync();
    dataLoader.getCourseSync.returns({
      maxSize: 2,
      students: [
          {id: 2},
          {id: 3}
      ],
      id: 1
    });

    registration.registerStudentForCourse(1, 1); // Student_id and course id

    sinon.assert.notCalled(dataLoader.saveCourseSync);
  });

});
