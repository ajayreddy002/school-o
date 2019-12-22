import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  responseData = [];
  showingQuestion;
  questionIndex = 0;
  currentQuestionOptions = [];
  currentQuestion;
  showSubmitButton: boolean = false;

  constructor(private sharedService: SharedService,
    private route: Router) { }

  ngOnInit() {
    console.log(123)
    this.getAssesment();
  }
  getAssesment() {
    let body = { "user_id": 496, "assessment_id": 522 }
    this.sharedService.getTests(body).subscribe((res: any) => {
      this.responseData = res.result
      this.currentQuestion = this.responseData[this.questionIndex].name;
      this.currentQuestionOptions = this.responseData[this.questionIndex].answers;
      this.responseData.map(item => {
        item.danger = false;
        item.success = false;
      })
      this.currentQuestionOptions.map(item => {
        item.isSubmited = false;
      })
      console.log(this.currentQuestionOptions)
    }), (error) => {
      console.log(error)
    }
  }
  submittedOption(data) {
    this.showSubmitButton = true;
  }
  submittedAnswer() {
    if (this.responseData[this.questionIndex].danger) {
      this.responseData[this.questionIndex].danger = false;
    }
    this.responseData[this.questionIndex].success = true;
    this.currentQuestionOptions[this.questionIndex].isSubmited = true;
    this.questionIndex++;
    console.log(this.questionIndex, this.responseData.length)
    if (this.questionIndex != this.responseData.length) {
      this.currentQuestion = this.responseData[this.questionIndex].name;
      this.currentQuestionOptions = this.responseData[this.questionIndex].answers;
      this.showSubmitButton = false
    } else {
      console.log(123)
      this.route.navigate(['/app/homework/result'])
    }
  }
  previousQuestion() {
    this.questionIndex--;
    this.currentQuestion = this.responseData[this.questionIndex].name;
    this.currentQuestionOptions = this.responseData[this.questionIndex].answers;
  }
  nextQuestion() {
    if (!this.responseData[this.questionIndex].success) {
      this.responseData[this.questionIndex].danger = true;
    }
    this.questionIndex++;
    console.log(this.questionIndex, this.responseData.length)
    if (this.questionIndex != this.responseData.length) {
      this.currentQuestion = this.responseData[this.questionIndex].name;
      this.currentQuestionOptions = this.responseData[this.questionIndex].answers;
      this.showSubmitButton = false
    }
  }
}
