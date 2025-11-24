import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.css']
})
export class ReviewPopupComponent {
  @Output() submitReview = new EventEmitter<{ reviewer: string; rating: number; comment: string }>();
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      reviewer: ['', Validators.required],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitReview.emit(this.form.value);
      this.form.reset({ reviewer: '', rating: 5, comment: '' });
    }
  }

  onClose() {
    this.close.emit();
  }
}
