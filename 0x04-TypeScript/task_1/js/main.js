var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
var printTeacher = function (firstName, lastName) {
    var initial = firstName.charAt(0).toUpperCase();
    return initial + ". " + lastName;
};
var fullName = printTeacher("John", "Doe");
var student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(teacher3);
console.log(director1);
console.log(fullName);
console.log(student.workOnHomework());
console.log(student.displayName());
