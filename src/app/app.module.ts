import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ReviewPopupComponent } from './components/review-popup/review-popup.component';
import { AboutComponent } from './components/about/about.component';

import { AuthorNamePipe } from './pipes/author-name.pipe';
import { ShortDatePipe } from './pipes/date-format.pipe';

import { HighlightDirective } from './directives/highlight.directive';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    BookCardComponent,
    BookDetailsComponent,
    ReviewPopupComponent,
    AboutComponent,
    AuthorNamePipe,
    ShortDatePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
