const mockStudentDb = [
  {
    id: 1111111111111,
    firstName: "Red",
    lastName: "Arman",
    email: "red.arman@gmail.com"
  },
  {
    id: 2222222222222,
    firstName: "Keanue",
    lastName: "Andal",
    email: "keanue.andal@gmail.com"
  }
];

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(),
    firstName: newStudentData.firstName,
    lastName: newStudentData.lastName,
    email: newStudentData.email
  };

  mockStudentDb.push(savedStudent);

  return savedStudent;
}