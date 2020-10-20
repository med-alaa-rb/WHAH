import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-profil',
  templateUrl: './student-profil.component.html',
  styleUrls: ['./student-profil.component.css']
})
export class StudentProfilComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router) { }
  
  userData : any ; 
    
  ngOnInit(): void {
    const userToken = localStorage.getItem('token')
    var obj = {
      'token': userToken
    }
     this._http.userProfil(obj).subscribe((res)=>{
      this.userData = res[0]
      console.log(this.userData)
    })
  }

}
