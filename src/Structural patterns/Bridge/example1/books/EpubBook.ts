import { Reader } from '../interfaces/Reader';
import { Book } from './Book';

class EpubBook extends Book {
    constructor(reader: Reader, title: string) {
        super(reader, title);
    }

    turnPage(page: number): void {
        this.reader.displayPage(page);
    }
}

export { EpubBook };
