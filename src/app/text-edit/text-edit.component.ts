import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {switchMap} from "rxjs/internal/operators";

@Component({
  selector: 'app-text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.css']
})
export class TextEditComponent implements OnInit {

  @Input() placeholder:string = "";
  @Input() label:string = "";
  @Input() onEdit: (str: string) => any = str => {};
  private control: FormControl = new FormControl();

  constructor() {
    this.control.valueChanges.pipe(switchMap(str => this.onEdit(str)));
  }

  ngOnInit() {
  }

  showLabel(): boolean {
    return this.label && this.label.trim().length == 0;
  }

  public setValue(value:string):void{
    this.control.setValue(value);
  }

}
