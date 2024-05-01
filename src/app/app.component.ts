import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private books: Book[] = [
    {
      name: 'Железният Светилник',
      description: 'Роман, разказващ историята на Султана, Лазар, Екатерина.',
      author: 'Димитър Талев',
      totalReviews: 0,
      rating: 0
    },
    {
      name: 'Време разделно',
      description: 'Епичен роман, разказващ за съдбата на един български селски народ през различни исторически периоди.',
      author: 'Йордан Йовков',
      totalReviews: 0,
      rating: 0
    },
    {
      name: 'През греховете на нашите бащи',
      description: 'Роман, разказващ за семейството на главния герой, което е преследвано от проклятието на миналите грехове.',
      author: 'Илия Троянов',
      totalReviews: 0,
      rating: 0
    },
    {
      name: 'Под игото',
      description: 'Роман, описващ българското село през освобождението и след освобождението.',
      author: 'Иван Вазов',
      totalReviews: 0,
      rating: 0
    },
    {
      name: 'Тютюн',
      description: 'Роман, разказващ за тютюневите земи в Тракия и възхода на богатството и властта на един тютюнев търговец.',
      author: 'Димитър Димов',
      totalReviews: 0,
      rating: 0
    }
  ];
  private index: number = 0;

  public currentBook: Book = this.books[this.index];
  public canEdit: boolean = this.currentBook.rating != 0;
  public showAdditionalModal: boolean = false;

  public calculateCurrentRating(): string {
    return (this.currentBook.rating / this.currentBook.totalReviews).toFixed(1);
  }

  public handleRatingOfBook(rating: number): void {
    this.currentBook.totalReviews += 1;
    this.currentBook.rating += rating;

    this.index += 1;
    if (this.index > this.books.length - 1) {
      this.showAdditionalModal = true;
    } else {
      this.refreshBook();
    }
  }

  public handleContinueReviewing(): void {
    this.index = 0;
    this.refreshBook();
    this.showAdditionalModal = false;
  }

  public handleEndReviewing(): void {
    alert('Успешно оценихте книгите!');
  }

  private refreshBook(): void {
    this.currentBook = this.books[this.index];
    this.canEdit = this.currentBook.rating != 0;
  }
}

interface Book {
  name: string,
  description: string,
  author: string,
  totalReviews: number,
  rating: number;
}
