import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService {

  constructor(public http: HttpClient) { }

  notifyEmployee(empData: any): Observable<any> {
    return this.http.post('http://localhost:5600/employeeEngagement/v1/notify', empData);
  }
}