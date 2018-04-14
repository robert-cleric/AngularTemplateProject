import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'atp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myModel = 'World';
  apiUrl = '/api/values/dogs';
  dogs: any[] = [];
  errorMessage: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getDogs(): void {
    this._dataService.getMoreDogs(this.apiUrl)
      .subscribe(dogs => {
        this.dogs = dogs;
      },
        error => this.errorMessage = <any>error
    );
  }


}
