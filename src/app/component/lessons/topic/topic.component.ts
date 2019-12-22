import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  topics: any;
  lessonTitle: any;
  lessonDescription: any;
  data: any;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.lessonId;
        console.log(this.data,"654153")
  }
})
   }

  ngOnInit() {
    this.getTopics();
  }

  getTopics = () => {
    const body = {
      "user_id":496,
      "lesson_id":this.data
    }
    this.httpClient.post<any>(AppConstants.BASE_URL + '/api/students/v1/topics', body)
    .subscribe(
      data => {
          this.lessonTitle = data.lesson_name;
          this.lessonDescription = data.lesson_introduction;
          this.topics = data.result.topics;
        }, err => {
          console.log(err);
        }
      )
  }
  videoRedirect(data){
    let navigationExtras: NavigationExtras = {
      state: {
        videoUrl:data.module
      }
    };
    this.router.navigate(['/app/lessons/video'], navigationExtras);

  }
}
