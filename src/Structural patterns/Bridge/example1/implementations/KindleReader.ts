import { Reader } from '../interfaces/Reader';

class KindleReader implements Reader {
    openBook(book: string): void {
        console.log(`Opening book ${book} on Kindle`);
    }

    displayPage(page: number): void {
        console.log(`Displaying page ${page} on Kindle`);
    }
}

export { KindleReader };
