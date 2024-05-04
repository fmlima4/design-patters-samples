import { Request, Response } from 'express';
import { KindleReader } from './implementations/KindleReader';
import { KoboReader } from './implementations/KoboReader';
import { PdfBook } from './books/PdfBook';
import { EpubBook } from './books/EpubBook';

class BookController {
    static openBook(req: Request, res: Response) {
        const { platform, format, title, page } = req.body;

        // Verifica se os parâmetros necessários foram fornecidos
        if (!platform || !format || !title || !page) {
            return res.status(400).json({ error: 'Parâmetros inválidos' });
        }

        // Escolhe a implementação do leitor com base na plataforma
        let reader;
        if (platform === 'kindle') {
            reader = new KindleReader();
        } else if (platform === 'kobo') {
            reader = new KoboReader();
        } else {
            return res.status(400).json({ error: 'Plataforma não suportada' });
        }

        // Escolhe o tipo de livro com base no formato
        let book;
        if (format === 'pdf') {
            book = new PdfBook(reader, title);
        } else if (format === 'epub') {
            book = new EpubBook(reader, title);
        } else {
            return res.status(400).json({ error: 'Formato não suportado' });
        }

        // Abre o livro e exibe a página especificada
        try {
            book.open();
            book.turnPage(page);
            return res.status(200).json({ message: 'Livro aberto e página exibida com sucesso' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Ocorreu um erro ao abrir o livro' });
        }
    }
}

export { BookController };
