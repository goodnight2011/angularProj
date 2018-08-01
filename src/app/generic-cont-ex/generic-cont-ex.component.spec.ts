import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericContExComponent } from './generic-cont-ex.component';

describe('GenericContExComponent', () => {
  let component: GenericContExComponent;
  let fixture: ComponentFixture<GenericContExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericContExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericContExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
