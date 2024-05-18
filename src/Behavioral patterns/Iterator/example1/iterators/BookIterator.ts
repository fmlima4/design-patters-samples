import { Book } from '../models/Book';

export class BookIterator {
    private index: number = 0;

    constructor(private books: Book[]) {}

    next(): Book | null {
        if (this.hasNext()) {
            return this.books[this.index++];
        }
        return null;
    }

    hasNext(): boolean {
        return this.index < this.books.length;
    }
}
