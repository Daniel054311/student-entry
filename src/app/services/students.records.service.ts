import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsRecord } from "../state/students-records";


@Injectable({
  providedIn: 'root'
})

export class StudentsRecordsService{

  constructor(private http: HttpClient) { }

  getStudentsRecords(){
    return this.http.get<Array<StudentsRecord>>('http://localhost:300/api/studentsRecords')
  }

}
