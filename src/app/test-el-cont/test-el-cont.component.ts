import {Component, Input, OnInit} from '@angular/core';
import {ElemCont} from "../elem-cont";

@Component({
  selector: 'app-test-el-cont',
  templateUrl: './test-el-cont.component.html',
  styleUrls: ['./test-el-cont.component.css']
})
export class TestElContComponent implements OnInit, ElemCont<string>{
  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }

}
