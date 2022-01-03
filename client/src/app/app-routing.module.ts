import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPswdPageComponent } from './forgot-pswd-page/forgot-pswd-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path:'sign-up-page', component: SignUpPageComponent},
  {path:'log-in-page', component: LogInPageComponent},
  {path:'forgot-pswd-page', component: ForgotPswdPageComponent},
  {path:'profile-page', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
