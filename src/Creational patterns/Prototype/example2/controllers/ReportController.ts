import { Request, Response } from 'express';
import { ReportPrototype, Report } from '../entities/ReportPrototype';

class ReportController {
    static createReport(req: Request, res: Response) {
        const title: string = req.body.title;
        const content: string = req.body.content;

        const reportPrototype: ReportPrototype = new Report(title, content);

        // Clonar o protótipo para criar um novo relatório
        const newReport: ReportPrototype = reportPrototype.clone();

        // Retornar o relatório gerado
        return res.status(200).json({ message: 'Report created successfully', report: newReport.generate() });
    }
}

export { ReportController };
