import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService:HttpService) {}

  getAllBooks(){
    return this.httpService.getBooks("Books/GetAllBooks");
  }

}
