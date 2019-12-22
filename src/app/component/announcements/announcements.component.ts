import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcementData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getAnnouncements()
  }
getAnnouncements(){
  const body ={
    "user_id":496
  }
  this.httpClient.post<any>(AppConstants.BASE_URL + '/api/students/v1/get_announcements', body).subscribe
  ((response)=>{
    this.announcementData=response.result
    console.log(this.announcementData)
  })
  , err => {
    console.log(err);
  }
  
}
}
