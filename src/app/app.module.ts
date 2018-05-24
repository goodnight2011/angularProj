import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FilterComponent } from './filter/filter.component';
import {FilterTextHintsProviderService} from "./filter-text-hints-provider.service";
import {
  MatAutocomplete, MatAutocompleteModule, MatButtonModule, MatFormField, MatInput, MatInputModule,
  MatOption
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent
  ],
  imports: [
    [
      MatAutocompleteModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatButtonModule
    ]
  ],
  providers: [FilterTextHintsProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
