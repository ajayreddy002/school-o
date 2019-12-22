import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }
  getLessons(body){
  return this.http.post<any>("http://52.66.30.201:3000/api/students/v1/lessons", body);

  }
}
