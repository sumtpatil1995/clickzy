import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  { path: 'analyze', loadChildren: () => import('./analyze/analyze.module').then(m => m.AnalyzeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
