import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteDemoComponent } from './templete-demo.component';

describe('TempleteDemoComponent', () => {
  let component: TempleteDemoComponent;
  let fixture: ComponentFixture<TempleteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
