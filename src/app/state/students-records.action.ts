import {createAction,props} from "@ngrx/store"
import { StudentsRecord } from "./students-records";


export const actionsList = {
  callStudentsRecordsApi: "[ Student Table Component ] Call Students Records api",
  callStudentRecordsSuccess: "[ Student Table Component ] Call Students Records Success",
}

export const callStudentsRecordsApi = createAction(actionsList.callStudentsRecordsApi);
export const callStudentRecordsSuccess =  createAction(actionsList.callStudentRecordsSuccess, props<{data: StudentsRecord[]}>())
