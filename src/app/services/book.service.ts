import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book/book.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: "I Don't Love You Anymore",
      author: "Rithvik singh",
      coverUrl:
        "https://i.pinimg.com/736x/37/e1/0d/37e10d69ffc7533230f181d8a1d3d2b4.jpg",
      rating: 4.3,
      tags: ["fiction", "romance"],
      description:
        "A deeply emotional story about healing, heartbreak, and rediscovering oneself after love fades.",
      chapters: [
        { title: "Chapter 1 — The Goodbye" },
        { title: "Chapter 2 — Finding Myself Again" },
        { title: "Chapter 3 — Healing" }
      ],
      featured: true
    },
    {
      id: 2,
      title: "Ikigai",
      author: "Héctor García & Francesc Miralles",
      coverUrl:
        "https://www.careerreload.com/wp-content/uploads/2021/11/ikigai-diagram.png",
      rating: 4.6,
      tags: ["self-help", "philosophy"],
      description:
        "A beautiful exploration of the Japanese concept of Ikigai — discovering purpose, joy, and meaning in everyday life.",
      chapters: [
        { title: "Chapter 1 — What Is Ikigai?" },
        { title: "Chapter 2 — Find Your Flow" },
        { title: "Chapter 3 — Live With Purpose" }
      ],
      featured: true
    },
    {
      id: 3,
      title: "You've Reached Sam",
      author: "Dustin Thao",
      coverUrl:
        "https://www.morninglazziness.com/wp-content/uploads/2023/04/Youve-Reached-Sam-A-Novel.jpeg",
      rating: 2,
      tags: ["YA", "romance", "emotional"],
      description:
        "A heartbreaking and magical YA romance where a girl mysteriously connects with her deceased boyfriend one last time.",
      chapters: [
        { title: "Chapter 1 — The Call" },
        { title: "Chapter 2 — Echoes of Us" },
        { title: "Chapter 3 — Letting Go" }
      ]
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  getBookById(id: number): Observable<Book | undefined> {
    return of(this.books.find(b => b.id === id));
  }
}
