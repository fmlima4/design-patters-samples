import { Request, Response } from 'express';
import { DocumentPrototype, Document } from '../entities/DocumentPrototype';

class DocumentController {
    static createDocument(req: Request, res: Response) {
        const content: string = req.body.content;

        // Criar uma instância do protótipo de documento
        const documentPrototype: DocumentPrototype = new Document(content);

        // Clonar o protótipo para criar um novo documento com conteúdo diferente
        const newDocument: DocumentPrototype = documentPrototype.clone();

        // Retornar informações sobre o novo documento criado
        return res.status(200).json({ message: 'Document created successfully', info: newDocument.getInfo() });
    }
}

export { DocumentController };
