import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerficationComponent } from './verfication/verfication.component';

const routes: Routes = [
  {path : "" , component : VerficationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
