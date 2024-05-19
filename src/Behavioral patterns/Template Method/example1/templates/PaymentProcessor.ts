export abstract class PaymentProcessor {
    // Template Method
    public processPayment(amount: number): void {
        this.validatePaymentDetails();
        this.debitAmount(amount);
        this.sendPaymentNotification();
    }

    protected abstract validatePaymentDetails(): void;
    protected abstract debitAmount(amount: number): void;

    private sendPaymentNotification(): void {
        console.log('Sending payment notification...');
    }
}
