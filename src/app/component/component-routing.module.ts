import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';


const routes: Routes = [
  { path: '', redirectTo: 'homework', pathMatch: 'full' },
  { path: 'homework', component: Menu4Component },
  { path: 'lessons', component: Menu5Component },
  { path: 'tests', component: Menu5Component },
  { path: 'practice', component: Menu5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
