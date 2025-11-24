import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { ReviewService } from '../../services/review.service';
import { Book, Review } from '../../models/book/book.module';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book?: Book;
  reviews: Review[] = [];
  showModal = false;
  alertMessage = '';

  constructor(
    private route: ActivatedRoute,
    private bookSvc: BookService,
    private reviewSvc: ReviewService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookSvc.getBookById(id).subscribe(b => this.book = b);
    this.loadReviews(id);
  }

  loadReviews(bookId: number) {
    this.reviewSvc.getReviewsForBook(bookId).subscribe(r => this.reviews = r);
  }

  openReviewModal() {
    this.showModal = true;
  }

  onModalSubmit(reviewData: { reviewer: string; rating: number; comment: string }) {
    if (!this.book) return;
    this.reviewSvc.addReview({ bookId: this.book.id, reviewer: reviewData.reviewer, rating: reviewData.rating, comment: reviewData.comment })
      .subscribe(newR => {
        this.reviews.push(newR);
        this.alertMessage = 'Review submitted successfully!';
        this.showModal = false;
        setTimeout(()=> this.alertMessage = '', 3000);
      });
  }

  onModalClose() {
    this.showModal = false;
  }
}
