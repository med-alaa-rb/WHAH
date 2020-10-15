import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  ROOT_URL = 'http://localhost:3000';

  httpRegister(obj) {
    console.log('this si inside ====>' , obj)
    return this.http.post(this.ROOT_URL + `/api/users/registration` , obj);
  }

  httpSendVerificationRequest(name) {
    return this.http.post(this.ROOT_URL + '/api/users/sendVerificationRequest', name);
  }


  httpGetNonVerifiedStudents() {
    return this.http.get(this.ROOT_URL + '/api/users/getNonVerifiedStudents', );
  }

  httpVerifyStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/verifyStudent', name);
  }
  httprejectStudent(name) {
    return this.http.post(this.ROOT_URL + '/api/users/rejectStudent', name);
  }

}
 