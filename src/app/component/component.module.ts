import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';

@NgModule({
  declarations: [
    Menu4Component,
    Menu5Component
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
