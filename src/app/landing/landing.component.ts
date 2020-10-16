import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  check : any = document.getElementsByClassName('checks')
  hello : any 
  constructor() { }

  ngOnInit(): void {

  }
  put() {
    for (var i = 0; i < 3; i++){
      if (this.check[i].checked === true) {
        this.hello += this.check[i].value
      }
    }
 
  }
}
