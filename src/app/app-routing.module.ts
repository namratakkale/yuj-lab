import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WhatItIsComponent } from './what-it-is/what-it-is.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'directory',
    component: DirectoryComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'comp1',
    component: WhatItIsComponent,
  },
  {
    path: 'comp2',
    component: HowItWorksComponent,
  },
  {
    path: '',
    component: DirectoryComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [LoginComponent];
