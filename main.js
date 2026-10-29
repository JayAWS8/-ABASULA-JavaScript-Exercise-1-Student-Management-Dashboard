import { getStudentsAPI, addStudentsAPI } from './api.js';

console.log("--- Test Case 1: Initial Database ---");
const initialDb = getStudentsAPI();
console.log(initialDb);

console.log("\n--- Test Case 2: Create New Student ---");
const newStudentData = {
  firstName: "Bianca",
  lastName: "Labrador",
  email: "bianca.labrador@gmail.com"
};

const newlyAddedStudent = addStudentsAPI(newStudentData);
console.log([newlyAddedStudent]);

console.log("\n--- Test Case 3: Updated Database ---");
const updatedDb = getStudentsAPI();
console.log(updatedDb);