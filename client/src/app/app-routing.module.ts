import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { ForgotPswdPageComponent } from './forgot-pswd-page/forgot-pswd-page.component';
import { HomeComponent } from './home/home.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ChatComponent } from './chat/chat.component';
import { MeetUpDisplayComponent } from './meet-up-display/meet-up-display.component';
import { MeetUpFormComponent } from './meet-up-form/meet-up-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sign-up', component: SignUpPageComponent},
  {path:'log-in', component: LogInPageComponent},
  {path:'forgot-pswd', component: ForgotPswdPageComponent},
  {path:'profile', component: ProfileComponent},
  {path:'events', component:EventComponent},
  {path:'chat',component:ChatComponent},
  {path:'meetupform',component:MeetUpFormComponent},
  {path:'meetupdisplay',component:MeetUpDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
