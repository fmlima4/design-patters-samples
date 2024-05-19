import { Request, Response } from 'express';
import { ReportGenerator } from '../templates/ReportGenerator';
import { PDFReportGenerator } from '../templates/PDFReportGenerator';
import { HTMLReportGenerator } from '../templates/HTMLReportGenerator';

class TemplateReportController {
    async generateReport(req: Request, res: Response): Promise<void> {
        const { data, format } = req.body;

        if (!data || !format) {
            res.status(400).json({ error: 'Data and format are required' });
            return;
        }

        let reportGenerator: ReportGenerator;

        switch (format) {
            case 'pdf':
                reportGenerator = new PDFReportGenerator();
                break;
            case 'html':
                reportGenerator = new HTMLReportGenerator();
                break;
            default:
                res.status(400).json({ error: 'Unsupported report format' });
                return;
        }

        reportGenerator.generateReport(data);
        res.status(200).json({ message: 'Report generated successfully' });
    }
}

export { TemplateReportController };
