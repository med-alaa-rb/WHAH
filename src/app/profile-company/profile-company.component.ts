import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css']
})
export class ProfileCompanyComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router) { }

  userData : any ; 

  ngOnInit(): void {
    const userToken = localStorage.getItem('token')
    var obj = {
      'token': userToken
    }
     this._http.compantProfil(obj).subscribe((res)=>{
      this.userData = res[0]
      console.log(this.userData)
    })
  }

}
