import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { TestsComponent } from './tests/tests.component';
import { VideoComponent } from './video/video.component';
import { MaterialModule } from '../core/material.module';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './practice/results/results.component';

@NgModule({
  declarations: [PracticeComponent, TestsComponent, VideoComponent, ResultComponent, ResultsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[
    PracticeComponent,
    TestsComponent,
    VideoComponent
  ]
})
export class SharedModule { }
