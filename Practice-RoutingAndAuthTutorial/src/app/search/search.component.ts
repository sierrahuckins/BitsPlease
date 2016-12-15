import { Component, OnInit }   from '@angular/core';

import { Search }             from './search';
import { SearchService }      from './search.service';

@Component({
  selector:    'search',
  templateUrl: 'search.component.html',
  providers:  [ SearchService ]
})

export class SearchComponent implements OnInit {
  errorMessage:string;
  search: Object[];
  mode = 'Observable';

  constructor (private searchService: SearchService) {}

  ngOnInit() { 
    this.getProducts(); 
  }

  getProducts() {
    this.searchService.getSearch().subscribe(
      search => this.search = search,
      error => this.errorMessage = <any>error);
  }
}