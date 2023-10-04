var firstStudent = {
    firstName: "Hannibal",
    lastName: "Mejbri",
    age: 20,
    location: "Tunisia"
};
var secondStudent = {
    firstName: "Sofyan",
    lastName: "Amrabat",
    age: 27,
    location: "Morocco"
};
var studentsList = [firstStudent, secondStudent];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
});
document.body.appendChild(table);
