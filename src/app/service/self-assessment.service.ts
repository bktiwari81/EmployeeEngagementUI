import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService {

  constructor(public http: HttpClient) { }

  notifyEmployee(empId: string, comments: string): Observable<any> {
    let headers = new HttpHeaders()
    .set('EmpId', empId)
    .set('AppreciationDescription', comments);
    console.log('headers: ', headers);
    return this.http.get('http://localhost:5600/employeeEngagement/v1/notify', {headers});
  }
}
