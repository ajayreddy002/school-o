import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceComponent } from './performance/performance.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AuthGuard } from '../auth/auth.guard';



const routes: Routes = [
    { path: 'performance', component: PerformanceComponent },
    { path: 'announcements', component: AnnouncementsComponent },
    { path: '', pathMatch: 'full', canActivate: [AuthGuard],
  },
  { path: 'homework', loadChildren: () => import('./homework/homework.module').then(mod => mod.HomeworkModule) },
  { path: 'lessons', loadChildren: () => import('./lessons/lessons.module').then(mod => mod.LessonsModule) },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
