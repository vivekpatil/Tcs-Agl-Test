import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { GenderPipe } from './gender.pipe';
import { PetsPipe } from './pets.pipe';
import { MockApiData } from '../app/MockData/apiData'
import { IPerson } from './core/models/Person.interface';
import { ApiService } from './api.service';

describe('AppComponent', () => {
  let service: ApiService; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule        
      ],
      declarations: [
        AppComponent,
        GenderPipe,
        PetsPipe        
      ],
    }).compileComponents();
    service = TestBed.inject(ApiService);
  }));

  it('should create the app Tcs-Agl-test', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Tcs-Agl-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tcs-Agl-test');
  });

  it('Check for OnInit function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var onInit = app.ngOnInit();
    expect(onInit).toEqual("success");
  });

  it('Check for cat in pets function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    service.getData().subscribe((data) => {
    var pets = app.GetCatsList(data as unknown);
    expect(pets).toContain("Garfield")
  });
  });

  it('Check for API data', () => {
    var data = service.getData();
    expect(data).not.toBeNull();
  });

  it('Check for Person data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    var onInit = app.ngOnInit();
    var data = service.getData();
    expect(onInit.PersonData).not.toBeNull();
  });

});
