import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdPostComponent } from './curd-post.component';

describe('CurdPostComponent', () => {
  let component: CurdPostComponent;
  let fixture: ComponentFixture<CurdPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
