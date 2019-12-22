import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {
    path: '', component: SideNavComponent,
    canActivate: [AuthGuard],
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
