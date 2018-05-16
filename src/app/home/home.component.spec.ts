import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../core/data.service';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataServiceStub: Partial<DataService>;
  let dataService: DataService;

  beforeEach(async(() => {
    dataServiceStub = {

    };

    TestBed.configureTestingModule({
      // imports: [SharedModule],
      // declarations: [HomeComponent],
      // or
      imports: [HomeModule],
      providers: [{provide: DataService, useValue: dataServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
