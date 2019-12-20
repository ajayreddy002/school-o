import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent,
    children: [
      { path: 'app', loadChildren: () => import('./component/component.module').then(mod => mod.ComponentModule) }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
