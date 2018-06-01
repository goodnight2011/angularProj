import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAutocompleteComponent } from './text.autocomplete';

describe('TextAutocompleteComponent', () => {
  let component: TextAutocompleteComponent;
  let fixture: ComponentFixture<TextAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
