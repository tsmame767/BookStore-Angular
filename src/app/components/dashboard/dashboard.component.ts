import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  booksList: { bookID: number, title: string, description: string, author: string, price: number, bookImg: string, quantity: number }[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
