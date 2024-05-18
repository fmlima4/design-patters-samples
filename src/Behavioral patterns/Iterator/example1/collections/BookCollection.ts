import { Book } from '../models/Book';
import { BookIterator } from '../iterators/BookIterator';

export class BookCollection {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getIterator(): BookIterator {
        return new BookIterator(this.books);
    }
}
