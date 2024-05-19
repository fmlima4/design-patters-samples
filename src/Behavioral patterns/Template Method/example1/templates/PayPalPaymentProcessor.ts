import { PaymentProcessor } from './PaymentProcessor';

export class PayPalPaymentProcessor extends PaymentProcessor {
    protected validatePaymentDetails(): void {
        console.log('Validating PayPal account details...');
    }

    protected debitAmount(amount: number): void {
        console.log(`Debiting ${amount} from PayPal account...`);
    }
}
