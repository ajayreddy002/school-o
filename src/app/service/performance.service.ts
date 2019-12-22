import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) { }
  getSubjectPerformance(body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>("http://52.66.30.201:3000/api/students/v1/subject_academic_performance",body,httpOptions);
  }
  
  getPerformanceDeatils(body){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>("http://52.66.30.201:3000/api/students/v1/expert_badges",body,httpOptions);
  }
}
