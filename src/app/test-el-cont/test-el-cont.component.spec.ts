import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestElContComponent } from './test-el-cont.component';

describe('TestElContComponent', () => {
  let component: TestElContComponent;
  let fixture: ComponentFixture<TestElContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestElContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestElContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
