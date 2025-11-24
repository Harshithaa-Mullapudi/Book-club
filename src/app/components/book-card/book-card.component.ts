import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book/book.module';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book!: Book;

  constructor(private router: Router) {}

  goToDetails() {
    if (this.book?.id != null) {
      this.router.navigate(['/book', this.book.id]);
    }
  }
}
