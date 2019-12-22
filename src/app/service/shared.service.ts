import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getTests(body){
    return this.http.post<any>("http://52.66.30.201:3000/api/students/v1/start_assessment", body);
  }
}
