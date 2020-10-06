
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'wtf',
    loadChildren: () => import('./components/login/login.module').then(mod => mod.LoginModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(mod => mod.RegisterModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
