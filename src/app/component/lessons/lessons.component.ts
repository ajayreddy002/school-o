import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/service/lessons.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})

export class LessonsComponent implements OnInit {
  lessonData = []
  constructor(
    private router: Router,
    private lessonService: LessonsService,
  ) { }

  ngOnInit() {
    this.lessonsData()
  }
  lessonsData() {
    let body = {
      subject_id: 41,
      class_id: 11,
      section_id: 29,
      school_id: 6,
      user_id: 986
    };

    this.lessonService.getLessons(body).subscribe((response) => {
      if (response && response.result.lessons.length > 0) {
        this.lessonData = response.result.lessons;
        console.log(this.lessonData)
      } else {
        this.lessonData = [];
      }
    });

  }

  navigateToLesson = (lesson) => {
    let navigationExtras: NavigationExtras = {
      state: {
      lessonId:lesson.id
      }
    };
    this.router.navigate(['/app/lessons/topic'], navigationExtras);
  }
}
