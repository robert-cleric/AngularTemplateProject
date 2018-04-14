import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'atp-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dogs: any[] = [];
  errorMessage: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getDogs()
      .subscribe(dogs => {
        this.dogs = dogs['message']['terrier'];
      },
        error => this.errorMessage = <any>error
    );
  }

}
