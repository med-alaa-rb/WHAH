import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-training-center-register',
  templateUrl: './training-center-register.component.html',
  styleUrls: ['./training-center-register.component.css']
})
export class TrainingCenterRegisterComponent implements OnInit {

  constructor(private _http : HttpService) { }
  obj : any
  ngOnInit(): void {
  }
  takedata(email, owner, trainingOptions, numberOfStudent, location, website, logo, about) {
    this.obj = {
      email:email,
      owner: owner,
      trainingOptions: trainingOptions,
      numberOfStudent: numberOfStudent,
      location: location,
      website:website ,
      logo: logo,
      about: about,
      name : 'rbk'
    }
    console.log(this.obj)
    this._http.httpRegisterTrainingCenter(this.obj).subscribe((data) => {
      console.log("done")
    });
  }
}
