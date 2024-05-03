import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';
import { DataService } from 'src/app/services/dataService/data.service';
import { SEARCH_ICON } from 'src/assets/svg-icons (2)';
import { BookObj } from 'src/assets/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bookList: BookObj[] = []
  constructor(iconRegistry: MatIconRegistry,sanitizer: DomSanitizer, private bookService:BookService, private dataService:DataService, private router:Router) {
    iconRegistry.addSvgIconLiteral("Search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
   }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(
      (res) => {
        // Directly assign the response data to notesList
        // Assuming res.data contains the array of notes you need
        console.log(res.data);
        this.bookList = res.data; // Adjust according to the actual structure of your response
        this.dataService.setBookList(this.bookList);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  handleCartClick(){
    this.router.navigate(['/cart']);
  }

  handleHomeClick(){
    this.router.navigate(['']);
  }

}
