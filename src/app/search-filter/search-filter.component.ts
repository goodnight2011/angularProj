import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  private showDetails: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  private handle(event: MouseEvent) {
     this.showDetails  = !this.showDetails;
  }

  isShowDetails(): boolean {
    return this.showDetails;
  }

  collapseExpandBtnIconName():string{
    return this.showDetails ? "expand_less" : "expand_more";
  }
}
