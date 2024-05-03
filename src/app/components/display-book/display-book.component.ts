import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataService/data.service';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  @Input() book!: BookObj;
  @Output() bookClicked=new EventEmitter<BookObj>();

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    console.log('Received book:', this.book);
  }

  handleBookClick() {
    // this.dataService.setBook(this.book)
    localStorage.setItem('selectedBook', JSON.stringify(this.book));
    this.router.navigate(['/book',this.book.book_Id]);
  }
}
