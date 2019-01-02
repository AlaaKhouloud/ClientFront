import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVirementComponent } from './create-virement.component';

describe('CreateVirementComponent', () => {
  let component: CreateVirementComponent;
  let fixture: ComponentFixture<CreateVirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
