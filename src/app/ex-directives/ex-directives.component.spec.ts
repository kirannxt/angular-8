import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDirectivesComponent } from './ex-directives.component';

describe('ExDirectivesComponent', () => {
  let component: ExDirectivesComponent;
  let fixture: ComponentFixture<ExDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
