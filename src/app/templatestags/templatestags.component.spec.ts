import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatestagsComponent } from './templatestags.component';

describe('TemplatestagsComponent', () => {
  let component: TemplatestagsComponent;
  let fixture: ComponentFixture<TemplatestagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatestagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatestagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
