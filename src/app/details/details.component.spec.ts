import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { DataService } from '../core/data.service';

class MockDataService {
  getDogs = {};
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  // let dataService;
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     providers: [DetailsComponent, {provide: DataService, useClass: MockDataService}]
  //   });

  //   component = TestBed.get(DetailsComponent);
  //   dataService = TestBed.get(DataService);
  // }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  let dataServiceStub: Partial<DataService>;
  let dataService: DataService;

  beforeEach(async(() => {
    dataServiceStub = {
    };

    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
       providers: [{ provide: DataService, useValue: dataServiceStub }]
      // providers: [{provide: DataService, useValue: MockDataService}]
    })
      .compileComponents();

      fixture = TestBed.createComponent(DetailsComponent);
      component = fixture.componentInstance;
       dataService = fixture.debugElement.injector.get(DataService);
      // dataService = TestBed.get(DataService);
      // fixture.detectChanges();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
