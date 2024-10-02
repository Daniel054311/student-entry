import { createReducer } from "@ngrx/store";
import { StudentsRecord } from "./students-records";

export const initState: ReadonlyArray<StudentsRecord> = [{
  name: "Deepak",
  city: "Takoradi",
  country: "Ghana",
  subject: "Algebra",
  passportDeclaration: "Yes",
  fitnessDeclaration: "Yes",
  courseName: "Match",
  date: "14-11-2021",
  state: "Accra",
  subjects: "Maths",
  email: "deepak@me.com",
  phone: "0547688686286",
  street: "5th street",
  postalCode: 1234
}];


export const studentsReducer = createReducer(
  initState
)
