/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = "male" | "female";

const myGender: Gender = "female";
if (myGender === "female") {
  console.log("Gender: woman");
} else if (myGender === "man") {
  console.log("Gender: man");
}

export {};
