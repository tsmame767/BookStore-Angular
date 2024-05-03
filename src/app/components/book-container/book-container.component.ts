import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { DataService } from 'src/app/services/dataService/data.service';
import { BookObj } from 'src/assets/type';


@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  bookList:BookObj[]=[];
  
  constructor(private bookService:BookService,private dataService:DataService) { }

  ngOnInit(): void {
    // this.bookList=this.dataService.getBookList();
    // console.log('Received book List in Book Container:', this.bookList);

    this.dataService.getBookList().subscribe({
      next: (books) => {
        this.bookList = books; // Update the local bookList when new data arrives
        console.log('Received book List in Book Container:', this.bookList);
      },
      error: (err) => console.error('Error fetching books:', err)
    });
  }
  

  

}
