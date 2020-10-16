import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-send-request-company',
  templateUrl: './send-request-company.component.html',
  styleUrls: ['./send-request-company.component.css']
})
export class SendRequestCompanyComponent implements OnInit {

  constructor(private _http : HttpService ,  private router: Router) { }
  name: any = "facebook"; 
  ngOnInit(): void {
  }
  verificationReq() {
    this._http.httpSendVerificationRequestCompany({name : this.name}).subscribe((data) => {
      this.router.navigateByUrl('/wait');
    });
  }
}
