import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsDemoComponent } from './materials-demo.component';

describe('MaterialsDemoComponent', () => {
  let component: MaterialsDemoComponent;
  let fixture: ComponentFixture<MaterialsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
