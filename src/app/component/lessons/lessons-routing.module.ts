import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonsComponent } from './lessons.component';
import { PracticeComponent } from '../../shared/practice/practice.component';
import { TestsComponent } from '../../shared/tests/tests.component';
import { TopicComponent } from './topic/topic.component';
import { VideoComponent } from 'src/app/shared/video/video.component';
import { ResultsComponent } from 'src/app/shared/practice/results/results.component';
const routes: Routes = [
  {
    path: '', component: LessonsComponent
  },
  {path:'topic',component:TopicComponent},
  { path: 'tests', component: TestsComponent },
  { path: 'practice', component: PracticeComponent},
  { path: 'practice-results', component: ResultsComponent },
  {path:'video',component:VideoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
