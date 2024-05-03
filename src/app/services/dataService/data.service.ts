import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BookObj } from 'src/assets/type';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  book!:BookObj
  private bookSource = new BehaviorSubject<BookObj[]>([]);
  bookList$=this.bookSource.asObservable(); // This is what components will subscribe to

  constructor() { }

  setBook(book: any){
    this.book=book;
  }

  setBookList(booksList:BookObj[]){
    this.bookSource.next(booksList); // Update the BehaviorSubject
    console.log('Received book List in data service:', this.bookList$);
  }

  getBookList(){
    return this.bookList$;
  }

  getBook(){
    return this.book;
  }
}
