import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkComponent } from './homework.component';
import { PracticeComponent} from '../../shared/practice/practice.component';
import {TestsComponent} from '../../shared/tests/tests.component';
import {SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/material.module';

@NgModule({
  declarations: [HomeworkComponent],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents:[
    PracticeComponent,
    TestsComponent
  ]
})
export class HomeworkModule { }
