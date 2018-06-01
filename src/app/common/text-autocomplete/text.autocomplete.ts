import {Component, Input, OnInit} from '@angular/core';
import {FilterTextHintsProviderService} from "../../filter-text-hints-provider.service";
import {Observable, Subject} from "rxjs/index";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/internal/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'text-autocomplete',
  templateUrl: './text.autocomplete.html',
  styleUrls: ['./text.autocomplete.css']
})
export class TextAutocompleteComponent implements OnInit {

  private hints$: Observable<string[]>;
  control: FormControl = new FormControl();
  private text: string;
  @Input() code: string;
  @Input() name: string;

  constructor(private hintService: FilterTextHintsProviderService) {
    this.hints$ = this.control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(str => hintService.getHints(this.code, str))
    );
  }

  ngOnInit() {
  }

}
