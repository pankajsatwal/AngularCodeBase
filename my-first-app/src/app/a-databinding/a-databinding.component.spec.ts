import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADatabindingComponent } from './a-databinding.component';

describe('ADatabindingComponent', () => {
  let component: ADatabindingComponent;
  let fixture: ComponentFixture<ADatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
