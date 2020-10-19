import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-profil-tc',
  templateUrl: './profil-tc.component.html',
  styleUrls: ['./profil-tc.component.css']
})
export class ProfilTcComponent implements OnInit{

  constructor(private _http: HttpService, private router: Router) { }

  userData : any ; 

  ngOnInit(): void {
    const userToken = localStorage.getItem('token')
    var obj = {
      'token': userToken
    }
     this._http.tcProfil(obj).subscribe((res)=>{
      this.userData = res[0]
      console.log(this.userData)
    })
  }

}