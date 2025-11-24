import { Injectable } from '@angular/core';
import { Review } from '../models/book/book.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviews: Review[] = [
    { id: 1, bookId: 1, reviewer: 'Harshitha', rating: 5, comment: 'Loved the book!', date: new Date().toISOString() },
    { id: 2, bookId: 2, reviewer: 'Mullapudi', rating: 4, comment: 'Really Good.', date: new Date().toISOString() }
  ];
  private nextId = 3;

  getReviewsForBook(bookId: number): Observable<Review[]> {
    return of(this.reviews.filter(r => r.bookId === bookId));
  }

  addReview(review: Omit<Review, 'id' | 'date'>): Observable<Review> {
    const newReview: Review = {
      id: this.nextId++,
      date: new Date().toISOString(),
      ...review
    };
    this.reviews.push(newReview);
    return of(newReview);
  }
}
