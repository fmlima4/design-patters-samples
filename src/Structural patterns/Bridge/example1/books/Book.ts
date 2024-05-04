import { Reader } from '../interfaces/Reader';

abstract class Book {
    protected reader: Reader;
    protected title: string;

    constructor(reader: Reader, title: string) {
        this.reader = reader;
        this.title = title;
    }

    open(): void {
        this.reader.openBook(this.title);
    }

    abstract turnPage(page: number): void;
}

export { Book };
