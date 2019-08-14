import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdGetComponent } from './curd-get.component';

describe('CurdGetComponent', () => {
  let component: CurdGetComponent;
  let fixture: ComponentFixture<CurdGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
