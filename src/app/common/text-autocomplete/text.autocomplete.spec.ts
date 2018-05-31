import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAutocomplete } from './text.autocomplete';

describe('TextAutocomplete', () => {
  let component: TextAutocomplete;
  let fixture: ComponentFixture<TextAutocomplete>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAutocomplete ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAutocomplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
