import { createSelector, createFeatureSelector } from "@ngrx/store";
import { StudentsRecord } from "./students-records";
import { state } from "@angular/animations";


export
interface AppState{
studentRecords: StudentsRecord[]
}

export const selectFeature = (state: AppState) => state.studentRecords;

export const selectAll = createSelector(
  selectFeature,
  (state: StudentsRecord[]) => state
)
