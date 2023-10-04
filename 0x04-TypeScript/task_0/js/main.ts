interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: "Hannibal",
  lastName: "Mejbri",
  age: 20,
  location: "Tunisia"
}

const secondStudent: Student = {
  firstName: "Sofyan",
  lastName: "Amrabat",
  age: 27,
  location: "Morocco"
}

const studentsList: Student[] = [firstStudent, secondStudent]

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});

document.body.appendChild(table);
