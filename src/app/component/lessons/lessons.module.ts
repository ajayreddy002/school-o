import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { PracticeComponent} from '../../shared/practice/practice.component';
import {TestsComponent} from '../../shared/tests/tests.component';
import {SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/material.module';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [LessonsComponent, TopicComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents:[
    PracticeComponent,
    TestsComponent,
  ]
})
export class LessonsModule { }
