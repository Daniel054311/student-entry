import { createSelector } from "@ngrx/store";
import { StudentsRecord } from "./students-records";


export interface AppState{
studentRecords: StudentsRecord[]
}

export const selectFeature = (state: AppState) => state.studentRecords;

export const selectAll = createSelector(
  selectFeature,
  ( state: StudentsRecord[]) => state
)
