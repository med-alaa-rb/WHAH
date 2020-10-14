import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.css']
})
export class VerficationComponent implements OnInit {
  
  constructor() { }
  namee : any ; 
  ngOnInit(): void {
  }
  takedata(name){
    this.namee = name
  }
}
