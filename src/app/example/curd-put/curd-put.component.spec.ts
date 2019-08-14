import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdPutComponent } from './curd-put.component';

describe('CurdPutComponent', () => {
  let component: CurdPutComponent;
  let fixture: ComponentFixture<CurdPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
