import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksVsConversionComponent } from './clicks-vs-conversion.component';

describe('ClicksVsConversionComponent', () => {
  let component: ClicksVsConversionComponent;
  let fixture: ComponentFixture<ClicksVsConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicksVsConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicksVsConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
