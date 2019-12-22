import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl: any;

  constructor(
    public sanitizer: DomSanitizer ,
    private httpClient: HttpClient,
    private route: ActivatedRoute,private router: Router
  ) {   this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.router.getCurrentNavigation().extras.state.videoUrl)
      console.log(this.videoUrl,"654153")
      
}
}) }

  ngOnInit() {
    
  }

  getVideos = () => {
    const body = {
      "user_id":496,
      "lesson_id":602
    }
    this.httpClient.post<any>(AppConstants.BASE_URL + '/api/students/v1/topics', body)
    .subscribe(
      data => {
          console.log(data, 'data123');
          // this.lessonTitle = data.lesson_name;
          // this.lessonDescription = data.lesson_introduction;
          // this.topics = data.result.topics;
        }, err => {
          console.log(err);
        }
      )
  }

}
