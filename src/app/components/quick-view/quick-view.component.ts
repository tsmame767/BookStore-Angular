import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  book!:BookObj;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.book=this.dataService.getBook();
    const bookData = localStorage.getItem('selectedBook');
  if (bookData) {
    this.book = JSON.parse(bookData);
  } else {
    // Handle case where no book data is found
    console.log('No book data available');
  }
   console.log(this.book.title)
  }

}
