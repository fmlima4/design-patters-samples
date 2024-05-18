import { Request, Response } from 'express';
import { BookCollection } from '../collections/BookCollection';
import { Book } from '../models/Book';

class IteratorBookController 
{
    private bookCollection: BookCollection;

    constructor() {
        this.bookCollection = new BookCollection();
        // Adding some initial books to the collection
        this.bookCollection.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald'));
        this.bookCollection.addBook(new Book('1984', 'George Orwell'));
        this.bookCollection.addBook(new Book('To Kill a Mockingbird', 'Harper Lee'));
    }

    getBooks = (req: Request, res: Response): void => {
        try {
            const iterator = this.bookCollection.getIterator();
            const books = [];
            while (iterator.hasNext()) {
                books.push(iterator.next());
            }
            res.status(200).json(books);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
    }
}

export { IteratorBookController };
