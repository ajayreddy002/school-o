import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  userDetails: any;
  currentPracticesData: any = [];
  currentTestsData: any = [];
  lateTestsData: any = [];
  latePracticeData: any = [];
  max = 2;
  isColapsed = false;
  cpMax = 2;
  ctMax = 2;
  ltMax = 2;
  isCpCollapsed: boolean;
  isCtCollapsed: boolean;
  isLpCollapsed: boolean;
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    const userDetails = localStorage.getItem('userData')
    this.userDetails = JSON.parse(userDetails);
    this.getPractices();
    let Data = localStorage.getItem('userData')

  }
  getPractices() {
    const body = {
      subject_id: [41],
      class_id: 11,
      section_id: 29,
      school_id: 6,
      user_id: 496
    }
    this.httpClient.post<any>(AppConstants.BASE_URL + '/api/students/v1/app_homework', body)
      .subscribe(
        data => {
          // console.log(data);
          this.currentPracticesData = data.result.current_assignments;
          this.currentTestsData = data.result.current_assessments;
          this.latePracticeData = data.result.late_assignments
          this.lateTestsData = data.result.late_assessments;
        }, err => {
          console.log(err);
        }
      )
  }
  showAll(arrayTpe: string) {
    this.isColapsed = !this.isColapsed;
    if (this.isColapsed && arrayTpe === 'pendingtest') {
      this.max = this.lateTestsData.length
    } else {
      this.max = 2;
    }
  }
  showAllCp(arrayTpe: string) {
    this.isCpCollapsed = !this.isCpCollapsed;
    if (this.isCpCollapsed && arrayTpe === 'currentpractice') {
      this.cpMax = this.currentPracticesData.length
    } else {
      this.cpMax = 2;
    }
  }
  showAllCt(arrayTpe: string) {
    this.isCtCollapsed = !this.isCtCollapsed;
    if (this.isCtCollapsed && arrayTpe === 'currenttests') {
      this.ctMax = this.currentTestsData.length
    } else {
      this.ctMax = 2;
    }
  }
  showAllLp(arrayTpe: string) {
    this.isLpCollapsed = !this.isLpCollapsed;
    if (this.isLpCollapsed && arrayTpe === 'latepractices') {
      this.ltMax = this.currentTestsData.length
    } else {
      this.ltMax = 2;
    }
  }
  redirectToVideoPage(data) {
    let navigationExtras: NavigationExtras = {
      state: {
        videoUrl: data.module
      }
    };
    this.router.navigate(['/app/homework/video'], navigationExtras);
  }
}
