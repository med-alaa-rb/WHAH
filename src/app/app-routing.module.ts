import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { VerficationComponent } from './verfication/verfication.component';
import { SendRequestforVerificationComponent } from './send-requestfor-verification/send-requestfor-verification.component';
import { AdminVerificationComponent } from './admin-verification/admin-verification.component';
import { WaitingComponent } from './waiting/waiting.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { TrainingCenterRegisterComponent } from './training-center-register/training-center-register.component';
const routes: Routes = [
  { path: 'studentRegister', component: VerficationComponent },
  { path: 'send', component: SendRequestforVerificationComponent },
  { path: '', component: AdminVerificationComponent },
  { path: 'waiting', component: WaitingComponent },
  { path: 'land', component: LandingComponent },
  { path: 'company', component: CompanyRegisterComponent },
  { path: 'training', component: TrainingCenterRegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
