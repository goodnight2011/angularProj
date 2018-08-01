import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TextAutocompleteComponent } from './common/text-autocomplete/text.autocomplete';
import {FilterTextHintsProviderService} from './filter-text-hints-provider.service';
import {
  MatAutocomplete, MatAutocompleteModule, MatButtonModule, MatDatepickerModule, MatExpansionModule, MatFormField,
  MatIconModule,
  MatInput, MatInputModule, MatNativeDateModule,
  MatOption, MatPaginatorModule, MatSortModule, MatTableDataSource, MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { TestElContComponent } from './test-el-cont/test-el-cont.component';
import { GenericContDirective } from './generic-cont.directive';
import { GenericContExComponent } from './generic-cont-ex/generic-cont-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAutocompleteComponent,
    SearchFilterComponent,
    TestElContComponent,
    GenericContDirective,
    GenericContExComponent
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
      MatNativeDateModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule
    ]
  ],
  providers: [FilterTextHintsProviderService],
  bootstrap: [AppComponent],
  entryComponents: [TestElContComponent]
})
export class AppModule { }
