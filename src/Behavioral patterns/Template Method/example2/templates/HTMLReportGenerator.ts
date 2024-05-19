import { ReportGenerator } from './ReportGenerator';

export class HTMLReportGenerator extends ReportGenerator {
    protected collectData(data: any): void {
        console.log('Collecting data for HTML report...');
    }

    protected formatReport(): void {
        console.log('Formatting HTML report...');
    }

    protected exportReport(): void {
        console.log('Exporting HTML report...');
    }
}
