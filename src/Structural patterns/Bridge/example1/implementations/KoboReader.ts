import { Reader } from '../interfaces/Reader';

class KoboReader implements Reader {
    openBook(book: string): void {
        console.log(`Opening book ${book} on Kobo`);
    }

    displayPage(page: number): void {
        console.log(`Displaying page ${page} on Kobo`);
    }
}

export { KoboReader };
