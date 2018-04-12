import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myModel = 'World';

  constructor() { }

  ngOnInit() {
  }

}
