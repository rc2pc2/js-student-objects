
const students = [
   {
      firstName : 'Ginetta',
      lastName: 'Apetta',
      age: 18,
   },
   {
      firstName : 'Ginettina',
      lastName: 'Aspetta',
      age: 19,
   },
];

for (let index = 0; index < students.length; index++) {
   const student = students[index];
   console.log(student.lastName, student.firstName);
}

const userFirstName = prompt("Insert a new student's first name");
const userLastName = prompt("Insert a new student's last name");
const userAge = prompt("Insert a new student's age");

const newStudent = {
   firstName : userFirstName,
   lastName : userLastName,
   age: userAge
};

students.push(newStudent);