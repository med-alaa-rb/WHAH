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
import { SendRequestCompanyComponent } from './send-request-company/send-request-company.component';
import { SendRequestCenterComponent } from './send-request-center/send-request-center.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentLoginComponent } from './student-login/student-login.component';
const routes: Routes = [
  { path: 's3', component: VerficationComponent },
  { path: 's1', component: SendRequestforVerificationComponent },
  { path: 'A10', component: AdminVerificationComponent },
  { path: 'wait', component: WaitingComponent },
  { path: '', component: LandingComponent },
  { path: 'c3', component: CompanyRegisterComponent },
  { path: 't3', component: TrainingCenterRegisterComponent },
  { path: 'c1', component: SendRequestCompanyComponent },
  { path: 't1', component: SendRequestCenterComponent },
  { path: 'ss', component: StudentRegisterComponent },
  { path: 's0', component: StudentLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
