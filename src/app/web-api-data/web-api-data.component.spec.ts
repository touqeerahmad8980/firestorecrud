import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApiDataComponent } from './web-api-data.component';

describe('WebApiDataComponent', () => {
  let component: WebApiDataComponent;
  let fixture: ComponentFixture<WebApiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebApiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
