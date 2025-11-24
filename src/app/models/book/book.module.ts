export interface Review {
  id: number;
  bookId: number;
  reviewer: string;
  rating: number; 
  comment: string;
  date: string; 
}

export interface Chapter {
  title: string;
  summary?: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl?: string;
  rating: number; 
  tags?: string[];
  description?: string;
  chapters?: Chapter[];
  featured?: boolean;
}
