import { ReportGenerator } from './ReportGenerator';

export class PDFReportGenerator extends ReportGenerator {
    protected collectData(data: any): void {
        console.log('Collecting data for PDF report...');
    }

    protected formatReport(): void {
        console.log('Formatting PDF report...');
    }

    protected exportReport(): void {
        console.log('Exporting PDF report...');
    }
}
