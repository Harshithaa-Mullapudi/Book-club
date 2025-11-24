import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book/book.module';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  loading = true;

  constructor(private bookSvc: BookService) {}

  ngOnInit(): void {
    this.bookSvc.getBooks().subscribe(list => {
      this.books = list;
      this.loading = false;
    });
  }
}
