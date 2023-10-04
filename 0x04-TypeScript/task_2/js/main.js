/* eslint-disable @typescript-eslint/explicit-function-return-type */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}
function isDirector(employee) {
    return 'workDirectorTasks' in employee;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    else {
        return 'Invalid subject';
    }
}
var employee1 = createEmployee(200);
var employee2 = createEmployee(1000);
console.log(createEmployee(200).constructor.name);
console.log(createEmployee(1000).constructor.name);
console.log(createEmployee('$500').constructor.name);
console.log(executeWork(employee1));
console.log(executeWork(employee2));
console.log(teachClass('Math'));
console.log(teachClass('History'));
