import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './homework.component';
import { PracticeComponent } from '../../shared/practice/practice.component';
import { TestsComponent } from '../../shared/tests/tests.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { VideoComponent } from '../../shared/video/video.component'
import { ResultComponent } from '../../shared/result/result.component'
import { ResultsComponent } from 'src/app/shared/practice/results/results.component';
const routes: Routes = [
  {
    path: '', component: HomeworkComponent, canActivate: [AuthGuard]
  },
  { path: 'test', component: TestsComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'practice-results', component: ResultsComponent },
  { path: 'video', component: VideoComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworkRoutingModule { }
