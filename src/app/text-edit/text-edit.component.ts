import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  val:string="";
  @Output() value = new EventEmitter<string>();

  onValUpdate():void{
    this.value.emit(this.val);
  }

  constructor() {
  }

  ngOnInit() {
  }

  showLabel(): boolean {
    return this.label && this.label.trim().length != 0;
  }

  setValue(val: string):void{
    this.val = val;
  }

}
