export abstract class ReportGenerator {
    // Template Method
    public generateReport(data: any): void {
        this.collectData(data);
        this.formatReport();
        this.exportReport();
    }

    protected abstract collectData(data: any): void;
    protected abstract formatReport(): void;
    protected abstract exportReport(): void;
}
