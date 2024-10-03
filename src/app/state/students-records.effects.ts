import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { actionsList } from "./students-records.action";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";
import { StudentsRecordsService } from "../services/students.records.service";

@Injectable()
export class StudentsRecordsEffects {

  loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
    ofType(actionsList.callStudentsRecordsApi),
    exhaustMap(() => this.studentsRecordsService.getStudentsRecords().pipe(
      map(studentsRecords => ({type:actionsList.callStudentRecordsSuccess, payload: studentsRecords})),
      catchError(() => EMPTY)
    ))
  ));

  constructor(private actions$: Actions,private studentsRecordsService: StudentsRecordsService) {}

}
