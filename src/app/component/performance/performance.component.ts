import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { PerformanceService } from 'src/app/service/performance.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  topicBadges: any;
  conceptual: any;

  constructor(private performanceservice:PerformanceService) { }

  ngOnInit() {
   this.performanceDetails();
   this.subjectPerformance();
  }
  subjectPerformance(){
    let body ={
      "subject_id":43,
      "user_id":496
    }
    this.performanceservice.getSubjectPerformance(body).subscribe((response)=>{
      this.conceptual=response.result;
      console.log( this.conceptual)
    })
  }


  performanceDetails(){
    let body={
      "user_id":496
    }
  this.performanceservice.getPerformanceDeatils(body).subscribe((response)=>{
    console.log(response)
    this.topicBadges=response.badges.badges_list.topic_badges
    console.log(this.topicBadges)
  })
  }
}
