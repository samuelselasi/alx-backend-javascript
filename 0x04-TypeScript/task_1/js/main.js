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
console.log(teacher3);
console.log(director1);
console.log(fullName);
