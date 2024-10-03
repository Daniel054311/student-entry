import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentsRecord } from '../state/students-records';
import { AppState, selectAll } from '../state/students-selectors';
import * as Actions from '../state/students-records.action';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent implements OnInit {

  dataSource: any = [];

  dataSource$: Observable<StudentsRecord[]> = this.store.select(selectAll);
  displayColumns:string[] = [ 'name', 'city', 'country', 'subject', 'passportDeclaration', 'fitnessDeclaration', 'courseName', 'date', 'state', 'subjects', 'email', 'phone', 'street', 'postalCode'];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(Actions.callStudentsRecordsApi())
  }

  ngOnInit(): void {
    this.dataSource$.subscribe(
      (res: StudentsRecord[]) => {
        this.dataSource = res;

      }
    )
  }


}
