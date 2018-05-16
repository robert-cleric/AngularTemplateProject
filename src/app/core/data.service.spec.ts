import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  let mockHttp;
  let dataService: DataService;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);

    TestBed.configureTestingModule({
      providers: [DataService, {provide: HttpClient, useValue: mockHttp}]
    });

    dataService = TestBed.get(DataService);
    mockHttp = TestBed.get(HttpClient);

  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created again', () => {
    expect(dataService).toBeTruthy();
  });

  describe('getDogs', () => {

    it('should retreive a list of dogs', () => {
      const expectedDogs: any[] = [{ dog: 'labrador' }, { dog: 'bernes' }];
      mockHttp.get.and.returnValue(expectedDogs);

      // dataService.getDogs().subscribe(
      //   dogs => expect(dogs).toEqual(expectedDogs, 'expected dogs'), fail
      // );

      // expect(mockHttp.get.calls.count()).toBe(1, 'one call');

      // let dogs = dataService.getDogs();
    });

  });

});
