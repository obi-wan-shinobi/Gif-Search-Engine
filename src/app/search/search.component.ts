import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gifs: any[] = [];
  successFlag = true;

  constructor(private dataService: DataService, private ref: ApplicationRef) { }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if(searchTerm !== '') {
      this.dataService.searchGifs(searchTerm)
        .subscribe((response: any) => {
          console.log('Search Data', response);
          this.gifs = response.data
          this.ref.tick();
          this.check(response.data.length);
        });
      }
  }
  check(data: number){
    if(data == 0) {
      console.log("Results not Found")
      this.successFlag = false;
    }
    else {
      console.log("Results Found")
      this.successFlag = true;
    }
    console.log(this.successFlag);
  }

}
