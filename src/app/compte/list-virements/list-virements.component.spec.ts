import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVirementsComponent } from './list-virements.component';

describe('ListVirementsComponent', () => {
  let component: ListVirementsComponent;
  let fixture: ComponentFixture<ListVirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
