import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  answers = [
    {
      name: 223,
    },
    {
      name: 232,
    },
    {
      name: 233,
    },
    {
      name: 322,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
