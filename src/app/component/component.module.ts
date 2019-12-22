import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material.module';

import { ComponentRoutingModule } from './component-routing.module';
import { PerformanceComponent } from './performance/performance.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    PerformanceComponent,
    AnnouncementsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  
})
export class ComponentModule { }
