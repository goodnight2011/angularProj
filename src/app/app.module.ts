import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TextAutocomplete } from './common/text-autocomplete/text.autocomplete';
import {FilterTextHintsProviderService} from "./filter-text-hints-provider.service";
import {
  MatAutocomplete, MatAutocompleteModule, MatButtonModule, MatDatepickerModule, MatExpansionModule, MatFormField,
  MatInput, MatInputModule, MatNativeDateModule,
  MatOption
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAutocomplete,
    SearchFilterComponent
  ],
  imports: [
    [
      MatAutocompleteModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatButtonModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatNativeDateModule
    ]
  ],
  providers: [FilterTextHintsProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
